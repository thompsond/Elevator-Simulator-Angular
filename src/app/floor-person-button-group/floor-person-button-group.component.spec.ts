import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorPersonButtonGroupComponent } from './floor-person-button-group.component';

describe('FloorPersonButtonGroupComponent', () => {
  let component: FloorPersonButtonGroupComponent;
  let fixture: ComponentFixture<FloorPersonButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloorPersonButtonGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FloorPersonButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
