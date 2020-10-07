import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalcustomerComponent } from './totalcustomer.component';

describe('TotalcustomerComponent', () => {
  let component: TotalcustomerComponent;
  let fixture: ComponentFixture<TotalcustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalcustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
