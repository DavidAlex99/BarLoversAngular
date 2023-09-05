import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoNewEventComponent } from './cuerpo-new-event.component';

describe('CuerpoNewEventComponent', () => {
  let component: CuerpoNewEventComponent;
  let fixture: ComponentFixture<CuerpoNewEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuerpoNewEventComponent]
    });
    fixture = TestBed.createComponent(CuerpoNewEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
