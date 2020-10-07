import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalLeadComponent } from './total-lead.component';

describe('TotalLeadComponent', () => {
  let component: TotalLeadComponent;
  let fixture: ComponentFixture<TotalLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
