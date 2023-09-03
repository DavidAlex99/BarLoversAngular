import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaNewPostComponent } from './multimedia-new-post.component';

describe('MultimediaNewPostComponent', () => {
  let component: MultimediaNewPostComponent;
  let fixture: ComponentFixture<MultimediaNewPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultimediaNewPostComponent]
    });
    fixture = TestBed.createComponent(MultimediaNewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
