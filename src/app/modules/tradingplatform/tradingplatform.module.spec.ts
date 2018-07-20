import { TradingplatformModule } from './tradingplatform.module';

describe('TradingplatformModule', () => {
  let tradingplatformModule: TradingplatformModule;

  beforeEach(() => {
    tradingplatformModule = new TradingplatformModule();
  });

  it('should create an instance', () => {
    expect(tradingplatformModule).toBeTruthy();
  });
});
