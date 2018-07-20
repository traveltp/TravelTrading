import { TravelbuzzModule } from './travelbuzz.module';

describe('TravelbuzzModule', () => {
  let travelbuzzModule: TravelbuzzModule;

  beforeEach(() => {
    travelbuzzModule = new TravelbuzzModule();
  });

  it('should create an instance', () => {
    expect(travelbuzzModule).toBeTruthy();
  });
});
