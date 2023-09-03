import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualFoodComponent } from './visual-food.component';

describe('VisualFoodComponent', () => {
  let component: VisualFoodComponent;
  let fixture: ComponentFixture<VisualFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualFoodComponent]
    });
    fixture = TestBed.createComponent(VisualFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
