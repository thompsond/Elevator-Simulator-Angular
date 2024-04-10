import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ElevatorComponent } from './elevator/elevator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ElevatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'elevator';
}
