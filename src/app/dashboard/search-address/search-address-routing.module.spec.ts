import { SearchAddressRoutingModule } from './search-address-routing.module';

describe('SearchAddressRoutingModule', () => {
  let searchAddressRoutingModule: SearchAddressRoutingModule;

  beforeEach(() => {
    searchAddressRoutingModule = new SearchAddressRoutingModule();
  });

  it('should create an instance', () => {
    expect(searchAddressRoutingModule).toBeTruthy();
  });
});
