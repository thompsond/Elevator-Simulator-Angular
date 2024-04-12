import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import FastPriorityQueue from 'fastpriorityqueue';
import { InsideElevatorComponent } from '../inside-elevator/inside-elevator.component';
import { PeopleContainerComponent } from '../people-container/people-container.component';
import { Person } from '../../models/Person';
import { Store } from '@ngrx/store';
import { selectNumberOfFloors } from '../../state/selectors';
import { CommonModule } from '@angular/common';
import { FloorComponent } from '../floor/floor.component';
import anime from 'animejs/lib/anime.es.js';
import { travelToFloor } from '../../state/actions';

@Component({
  selector: 'app-elevator',
  standalone: true,
  imports: [
    InsideElevatorComponent,
    PeopleContainerComponent,
    CommonModule,
    FloorComponent,
  ],
  templateUrl: './elevator.component.html',
  styleUrl: './elevator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElevatorComponent {

  // Sort a.localeCompare(b)
// Take these out and put them into state
  private readonly comparator = (a: number, b: number) => a > b; 
  upQueue = new FastPriorityQueue(this.comparator);
  downQueue = new FastPriorityQueue(this.comparator);
  
  numberOfFloors$ = this.store.select(selectNumberOfFloors);

  animateDown() {
    this.store.dispatch(travelToFloor({floor: 2}));
  }

  constructor(private readonly store: Store) {}
}
