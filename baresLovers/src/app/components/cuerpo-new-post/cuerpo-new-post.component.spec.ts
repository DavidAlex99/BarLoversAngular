import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoNewPostComponent } from './cuerpo-new-post.component';

describe('CuerpoNewPostComponent', () => {
  let component: CuerpoNewPostComponent;
  let fixture: ComponentFixture<CuerpoNewPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuerpoNewPostComponent]
    });
    fixture = TestBed.createComponent(CuerpoNewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
