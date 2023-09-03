import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesFoodComponent } from './detalles-food.component';

describe('DetallesFoodComponent', () => {
  let component: DetallesFoodComponent;
  let fixture: ComponentFixture<DetallesFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesFoodComponent]
    });
    fixture = TestBed.createComponent(DetallesFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
