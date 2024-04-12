import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { BehaviorSubject, Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { Person } from '../../models/Person';
import { FloorPersonComponent } from '../floor-person/floor-person.component';
import { Store } from '@ngrx/store';
import { addPersonOnFloor } from '../../state/actions';
import { selectAllPeopleOutsideElevatorMap } from '../../state/selectors';
@Component({
  selector: 'app-people-container',
  standalone: true,
  imports: [
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
    FloorPersonComponent,
  ],
  templateUrl: './people-container.component.html',
  styleUrl: './people-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleContainerComponent {
  @Input({required: true}) numberOfFloors!: number;

  peopleList$: Observable<Person[]>;

  personNameFormControl = new FormControl<string>('');
  personFloor = 1;

  constructor (private readonly store: Store<{}>) {
    this.peopleList$ = store.select(selectAllPeopleOutsideElevatorMap).pipe(
      map(peopleMap => Array.from(peopleMap.values()).flat()),
    );
  }

  get floorList() {
    const floors: number[] = [];
    for (let i = 1; i <= this.numberOfFloors; i++) {
      floors.push(i);
    }
    return floors;
  }

  onAddPerson() {
    const personName = this.personNameFormControl.value?.trim() ?? '';
    if (personName.length === 0) return;
    this.store.dispatch(addPersonOnFloor({name: personName, floor: this.personFloor}));
    this.personNameFormControl.reset();
  }
}
