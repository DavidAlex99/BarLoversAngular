import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualEventoComponent } from './visual-evento.component';

describe('VisualEventoComponent', () => {
  let component: VisualEventoComponent;
  let fixture: ComponentFixture<VisualEventoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualEventoComponent]
    });
    fixture = TestBed.createComponent(VisualEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
