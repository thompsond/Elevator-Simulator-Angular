import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideElevatorComponent } from './inside-elevator.component';

describe('InsideElevatorComponent', () => {
  let component: InsideElevatorComponent;
  let fixture: ComponentFixture<InsideElevatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsideElevatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsideElevatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
