import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalPostDetailComponent } from './principal-post-detail.component';

describe('PrincipalPostDetailComponent', () => {
  let component: PrincipalPostDetailComponent;
  let fixture: ComponentFixture<PrincipalPostDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipalPostDetailComponent]
    });
    fixture = TestBed.createComponent(PrincipalPostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
