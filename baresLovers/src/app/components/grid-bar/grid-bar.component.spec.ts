import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridBarComponent } from './grid-bar.component';

describe('GridBarComponent', () => {
  let component: GridBarComponent;
  let fixture: ComponentFixture<GridBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridBarComponent]
    });
    fixture = TestBed.createComponent(GridBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
