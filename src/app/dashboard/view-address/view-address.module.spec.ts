import { ViewAddressModule } from './view-address.module';

describe('ViewAddressModule', () => {
  let viewAddressModule: ViewAddressModule;

  beforeEach(() => {
    viewAddressModule = new ViewAddressModule();
  });

  it('should create an instance', () => {
    expect(viewAddressModule).toBeTruthy();
  });
});
