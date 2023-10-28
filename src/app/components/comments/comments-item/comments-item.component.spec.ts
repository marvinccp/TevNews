import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsItemComponent } from './comments-item.component';

describe('CommentsItemComponent', () => {
  let component: CommentsItemComponent;
  let fixture: ComponentFixture<CommentsItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentsItemComponent]
    });
    fixture = TestBed.createComponent(CommentsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
