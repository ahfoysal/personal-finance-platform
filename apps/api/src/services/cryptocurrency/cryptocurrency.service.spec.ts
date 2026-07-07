import { CryptocurrencyService } from './cryptocurrency.service';

describe('CryptocurrencyService', () => {
  it('falls back to custom and database cryptocurrency symbols when the public snapshot omits the default asset', async () => {
    const service = new CryptocurrencyService({
      getByKey: jest.fn().mockResolvedValue({ DBTOKEN: 'Database Token' })
    } as any);

    await service.onModuleInit();

    expect(service.isCryptocurrency('USTUSD')).toBe(true);
    expect(service.isCryptocurrency('DBTOKENUSD')).toBe(true);
    expect(service.isCryptocurrency('AAPLUSD')).toBe(false);
  });
});
