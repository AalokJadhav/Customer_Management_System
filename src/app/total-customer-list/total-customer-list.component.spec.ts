import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCustomerListComponent } from './total-customer-list.component';

describe('TotalCustomerListComponent', () => {
  let component: TotalCustomerListComponent;
  let fixture: ComponentFixture<TotalCustomerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalCustomerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
