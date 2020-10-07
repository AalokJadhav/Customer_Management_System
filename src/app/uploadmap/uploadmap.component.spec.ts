import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadmapComponent } from './uploadmap.component';

describe('UploadmapComponent', () => {
  let component: UploadmapComponent;
  let fixture: ComponentFixture<UploadmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
