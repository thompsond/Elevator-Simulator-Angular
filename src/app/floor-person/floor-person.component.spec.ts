import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorPersonComponent } from './floor-person.component';

describe('FloorPersonComponent', () => {
  let component: FloorPersonComponent;
  let fixture: ComponentFixture<FloorPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloorPersonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FloorPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
