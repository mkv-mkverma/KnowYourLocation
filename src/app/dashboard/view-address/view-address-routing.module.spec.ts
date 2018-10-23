import { ViewAddressRoutingModule } from './view-address-routing.module';

describe('ViewAddressRoutingModule', () => {
  let viewAddressRoutingModule: ViewAddressRoutingModule;

  beforeEach(() => {
    viewAddressRoutingModule = new ViewAddressRoutingModule();
  });

  it('should create an instance', () => {
    expect(viewAddressRoutingModule).toBeTruthy();
  });
});
