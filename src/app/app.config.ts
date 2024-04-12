import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { elevatorReducer } from '../state/reducer';
import { provideEffects } from '@ngrx/effects';
import { ElevatorEffects } from '../state/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideStore({ elevator: elevatorReducer }),
    provideEffects(ElevatorEffects),
  ]
};
