import { createAction, props } from '@ngrx/store';
import { Person } from '../models/Person';
import { LandingCall } from '../models/LandingCall';

export const addPersonOnFloor =
    createAction('[Elevator] Add Person On Floor',
        props<{readonly name: string, readonly floor: number}>());

export const travelToFloor = 
    createAction('[Elevator] Travel To a Floor',
        props<{readonly floor: number}>());

export const updateCurrentFloor =
    createAction('[Elevator] Update Current Floor',
        props<{readonly floor: number}>());

export const triggerLandingCall =
    createAction('[Elevator] Make Landing Call',
    props<{readonly landingCall: LandingCall}>());