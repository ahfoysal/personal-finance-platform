import { PropertyService } from '@ghostfolio/api/services/property/property.service';
import {
  DEFAULT_CURRENCY,
  PROPERTY_CUSTOM_CRYPTOCURRENCIES
} from '@ghostfolio/common/config';

import { Injectable, OnModuleInit } from '@nestjs/common';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

function readCryptocurrencyMap(fileName: string): Record<string, string> {
  const filePath = join(__dirname, '../../assets/cryptocurrencies', fileName);

  if (!existsSync(filePath)) {
    return {};
  }

  return JSON.parse(readFileSync(filePath, 'utf8')) as Record<string, string>;
}

@Injectable()
export class CryptocurrencyService implements OnModuleInit {
  private combinedCryptocurrencies: string[];

  public constructor(private readonly propertyService: PropertyService) {}

  public async onModuleInit() {
    const customCryptocurrenciesFromDatabase =
      await this.propertyService.getByKey<Record<string, string>>(
        PROPERTY_CUSTOM_CRYPTOCURRENCIES
      );
    const cryptocurrencies = readCryptocurrencyMap('cryptocurrencies.json');
    const customCryptocurrencies = readCryptocurrencyMap('custom.json');

    this.combinedCryptocurrencies = [
      ...Object.keys(cryptocurrencies),
      ...Object.keys(customCryptocurrencies),
      ...Object.keys(customCryptocurrenciesFromDatabase ?? {})
    ];
  }

  public isCryptocurrency(aSymbol = '') {
    const cryptocurrencySymbol = aSymbol.substring(0, aSymbol.length - 3);

    return (
      aSymbol.endsWith(DEFAULT_CURRENCY) &&
      this.combinedCryptocurrencies.includes(cryptocurrencySymbol)
    );
  }
}
