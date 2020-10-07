import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLeadComponent } from './update-lead.component';

describe('UpdateLeadComponent', () => {
  let component: UpdateLeadComponent;
  let fixture: ComponentFixture<UpdateLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
