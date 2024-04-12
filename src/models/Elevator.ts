import { Person } from "./Person";

export interface Elevator {
    // Id -> Person
    readonly peopleMap: Map<number, Person>,
    // Set of Person Ids for people inside the elevator
    readonly insideElevatorIds: Set<number>,
    // Floor -> [Person]
    readonly outsideElevator: Map<number, Person[]>,
    readonly numberOfFloors: number,
    readonly currentFloor: number,
}