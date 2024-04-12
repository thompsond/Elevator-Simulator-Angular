import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Person } from '../../models/Person';
import { CallDirection } from '../../models/Enums';
import { Store } from '@ngrx/store';
import { travelToFloor, triggerLandingCall } from '../../state/actions';
import { LandingCall } from '../../models/LandingCall';

@Component({
  selector: 'app-floor-person-button-group',
  standalone: true,
  imports: [],
  templateUrl: './floor-person-button-group.component.html',
  styleUrl: './floor-person-button-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FloorPersonButtonGroupComponent {
  @Input({required: true}) person!: Person;

  readonly CallDirection = CallDirection;

  constructor (private readonly store: Store) {}

  makeLandingCall(direction: CallDirection) {
    const landingCall: LandingCall = {
      person: this.person,
      direction
    };
    this.store.dispatch(triggerLandingCall({landingCall}));
  }
}
