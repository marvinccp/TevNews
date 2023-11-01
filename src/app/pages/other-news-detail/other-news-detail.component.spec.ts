import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherNewsDetailComponent } from './other-news-detail.component';

describe('OtherNewsDetailComponent', () => {
  let component: OtherNewsDetailComponent;
  let fixture: ComponentFixture<OtherNewsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherNewsDetailComponent]
    });
    fixture = TestBed.createComponent(OtherNewsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
