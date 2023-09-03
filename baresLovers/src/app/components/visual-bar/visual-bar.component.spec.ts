import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualBarComponent } from './visual-bar.component';

describe('VisualBarComponent', () => {
  let component: VisualBarComponent;
  let fixture: ComponentFixture<VisualBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualBarComponent]
    });
    fixture = TestBed.createComponent(VisualBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
