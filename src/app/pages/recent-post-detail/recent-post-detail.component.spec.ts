import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPostDetailComponent } from './recent-post-detail.component';

describe('RecentPostDetailComponent', () => {
  let component: RecentPostDetailComponent;
  let fixture: ComponentFixture<RecentPostDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentPostDetailComponent]
    });
    fixture = TestBed.createComponent(RecentPostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
