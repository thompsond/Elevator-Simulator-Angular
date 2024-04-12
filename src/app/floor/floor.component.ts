import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllPeopleOutsideElevatorMap } from '../../state/selectors';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-floor',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './floor.component.html',
  styleUrl: './floor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FloorComponent {
  @Input({required: true}) floor!: number;

  peopleOutsideElevator$ = this.store.select(selectAllPeopleOutsideElevatorMap)
  .pipe(map((peopleMap) => peopleMap.get(this.floor)));

  constructor (private readonly store: Store) {}
}
