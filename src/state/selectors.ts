import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Person } from '../models/Person';
import { Elevator } from '../models/Elevator';

export const selectElevator = createFeatureSelector<Elevator>('elevator');

export const selectAllPeopleMap = createSelector(
    selectElevator,
    (elevator) => elevator.peopleMap
);

export const selectAllPeopleInElevatorIds = createSelector(
    selectElevator,
    (elevator) => elevator.insideElevatorIds
);

export const selectAllPeopleOutsideElevatorMap = createSelector(
    selectElevator,
    (elevator) => elevator.outsideElevator
)

export const selectNumberOfFloors = createSelector(
    selectElevator,
    (elevator) => elevator.numberOfFloors
);

export const selectCurrentFloor = createSelector(
    selectElevator,
    (elevator) => elevator.currentFloor
)