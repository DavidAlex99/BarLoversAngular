import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesBarComponent } from './detalles-bar.component';

describe('DetallesBarComponent', () => {
  let component: DetallesBarComponent;
  let fixture: ComponentFixture<DetallesBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesBarComponent]
    });
    fixture = TestBed.createComponent(DetallesBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
