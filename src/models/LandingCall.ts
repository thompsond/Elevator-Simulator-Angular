import { ElevatorCall } from "./ElevatorCall";
import { CallDirection } from "./Enums";

export interface LandingCall extends ElevatorCall {
    readonly direction: CallDirection;
}