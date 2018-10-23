import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAddressComponent } from './view-address.component';

describe('ViewAddressComponent', () => {
  let component: ViewAddressComponent;
  let fixture: ComponentFixture<ViewAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
