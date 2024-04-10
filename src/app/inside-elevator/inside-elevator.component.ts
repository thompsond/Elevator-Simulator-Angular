import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CartButtonComponent } from '../cart-button/cart-button.component';

@Component({
  selector: 'app-inside-elevator',
  standalone: true,
  imports: [CartButtonComponent],
  templateUrl: './inside-elevator.component.html',
  styleUrl: './inside-elevator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InsideElevatorComponent {
  @Input() numberOfFloors = 6;
  peopleList = []
  cartButtons = []

  get floorsArray() {
    return new Array(this.numberOfFloors);
  }
}
