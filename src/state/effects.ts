import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, defer } from 'rxjs';
import { combineLatestWith, concatMap, map, tap } from 'rxjs/operators';
import { travelToFloor, triggerLandingCall, updateCurrentFloor } from './actions';
import anime from 'animejs';
import { Store } from '@ngrx/store';
import { selectCurrentFloor } from './selectors';

const elevatorHeight = 242;
const passengerHeight = 63;

@Injectable()
export class ElevatorEffects {

  readonly travelToFloor = createEffect(() => this.actions$.pipe(
    ofType(travelToFloor),
    combineLatestWith(this.store.select(selectCurrentFloor)),
    concatMap(([{floor}, currentFloor]) => {
      if (floor === currentFloor) return EMPTY;
      const numberOfFloorsToTravel = Math.abs(currentFloor - floor);
      const multiplier = 6 - floor;
      const offset = (10 * multiplier) + (elevatorHeight * multiplier) + (passengerHeight * multiplier);

      return defer(() => anime({
        targets: '#elevator',
        translateY: offset,
        duration: 180 * 10 * numberOfFloorsToTravel,
        easing: 'easeInOutQuad'
      }).finished)
        .pipe(
          map(() => updateCurrentFloor({floor}))
        );
    }))
  );

  readonly triggerLandingCall = createEffect(() => this.actions$.pipe(
    ofType(triggerLandingCall),
    map(({landingCall}) => {
      return travelToFloor({floor: landingCall.person.floor});
    })
  ));

  constructor(
    private actions$: Actions,
    private readonly store: Store,
  ) {}
}