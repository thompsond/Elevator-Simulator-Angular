import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import FastPriorityQueue from 'fastpriorityqueue';
import { InsideElevatorComponent } from '../inside-elevator/inside-elevator.component';
import { PeopleContainerComponent } from '../people-container/people-container.component';
import { Person } from '../../models/Person';

@Component({
  selector: 'app-elevator',
  standalone: true,
  imports: [InsideElevatorComponent, PeopleContainerComponent],
  templateUrl: './elevator.component.html',
  styleUrl: './elevator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElevatorComponent {
  @Input() numberOfFloors = 6;

  @Output() upQueueEmitter = new EventEmitter<void>(); 
  @Output() downQueueEmitter = new EventEmitter<void>(); 
  // Sort a.localeCompare(b)

  // A map of floor number -> [people on that floor]
  floorMap = new Map<number, Person[]>();
  // f
  insideElevatorMap = [];
  private readonly comparator = (a: number, b: number) => a > b; 
  upQueue = new FastPriorityQueue(this.comparator);
  downQueue = new FastPriorityQueue(this.comparator);
  

  constructor() {

  }
}
