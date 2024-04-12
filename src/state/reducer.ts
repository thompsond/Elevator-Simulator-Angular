import { createReducer, on } from '@ngrx/store';
import { Person } from '../models/Person';
import { addPersonOnFloor, updateCurrentFloor } from './actions';
import { Elevator } from '../models/Elevator';

export const initialState: Elevator = {
    peopleMap: new Map<number, Person>(),
    insideElevatorIds: new Set<number>(),
    outsideElevator: new Map<number, Person[]>(),
    numberOfFloors: 6,
    currentFloor: 6,
};

let nextPersonId = 0;

export const elevatorReducer = createReducer(
  initialState,
  on(addPersonOnFloor, (state, {name, floor}) => {
    const person = {
        id: nextPersonId,
        name,
        floor,
    };
   const peopleMap = state.peopleMap.set(nextPersonId, person);
    const peopleCurrentlyOnTheFloor =
        state.outsideElevator.get(floor) ?? [];
    const outsideElevator = new Map(state.outsideElevator);
    outsideElevator
        .set(floor, [...peopleCurrentlyOnTheFloor, person]);
        nextPersonId++;
    return {
        ...state,
        outsideElevator,
        peopleMap,
    };
  }),
  on(updateCurrentFloor, (state, {floor}) => {
    return {
        ...state,
        currentFloor: floor,
    };
  }),
);