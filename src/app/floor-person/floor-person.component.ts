import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Person } from '../../models/Person';
import { FloorPersonButtonGroupComponent } from '../floor-person-button-group/floor-person-button-group.component';

@Component({
  selector: 'app-floor-person',
  standalone: true,
  imports: [FloorPersonButtonGroupComponent],
  templateUrl: './floor-person.component.html',
  styleUrl: './floor-person.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
/** A representation of a person waiting on a floor. */
export class FloorPersonComponent {
  @Input({required: true}) person!: Person;
}
