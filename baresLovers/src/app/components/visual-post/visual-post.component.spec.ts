import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualPostComponent } from './visual-post.component';

describe('VisualPostComponent', () => {
  let component: VisualPostComponent;
  let fixture: ComponentFixture<VisualPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualPostComponent]
    });
    fixture = TestBed.createComponent(VisualPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
