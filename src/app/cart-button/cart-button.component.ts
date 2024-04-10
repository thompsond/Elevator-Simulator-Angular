import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-button',
  standalone: true,
  imports: [],
  templateUrl: './cart-button.component.html',
  styleUrl: './cart-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartButtonComponent {
  @Input({ required: true }) floorNumber!: number;
}
