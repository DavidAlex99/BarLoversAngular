import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaNewEventComponent } from './multimedia-new-event.component';

describe('MultimediaNewEventComponent', () => {
  let component: MultimediaNewEventComponent;
  let fixture: ComponentFixture<MultimediaNewEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultimediaNewEventComponent]
    });
    fixture = TestBed.createComponent(MultimediaNewEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
