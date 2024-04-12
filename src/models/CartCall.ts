import { ElevatorCall } from "./ElevatorCall";

export interface CartCall extends ElevatorCall {
    readonly floor: number;
}