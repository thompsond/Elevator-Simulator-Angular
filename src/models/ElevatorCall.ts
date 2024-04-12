import { Person } from "./Person";

export enum CallDirection {
    UP,
    DOWN
}

export interface ElevatorCall {
    readonly person: Person;
}