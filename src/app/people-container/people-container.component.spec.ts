import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleContainerComponent } from './people-container.component';

describe('PeopleContainerComponent', () => {
  let component: PeopleContainerComponent;
  let fixture: ComponentFixture<PeopleContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeopleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
