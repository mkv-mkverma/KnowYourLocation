import { SearchAddressModule } from './search-address.module';

describe('SearchAddressModule', () => {
  let searchAddressModule: SearchAddressModule;

  beforeEach(() => {
    searchAddressModule = new SearchAddressModule();
  });

  it('should create an instance', () => {
    expect(searchAddressModule).toBeTruthy();
  });
});
