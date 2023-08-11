import { FluidTypes } from "../Context/FluidContext"
import { actionTypes } from "../Pages/Radius";

export interface SliderTypes {
    name: string,
    value: number,
    setValue?: React.Dispatch<actions> | React.Dispatch<actionTypes>,
    setUnit?: React.Dispatch<actions>,
    setUseState?: React.Dispatch<React.SetStateAction<number>>,
    unit?: string,
    max?: number
}

export type actions =
    | { type?: Values.setInitialValue; payload: number }
    | { type?: Values.setIdealValue; payload: number }
    | { type?: Values.setFinalValue; payload: number }
    | { type?: Values.setInitialUnit; payload: string }
    | { type?: Values.setIdealUnit; payload: string }
    | { type?: Values.setFinalUnit; payload: string }
    | { type?: Values.multiplier; payload: number }
    | { type?: Values.Setmultiplier; payload: string }
    | { type?: Values.calcWidth; payload: number }


export type InitialContextStateTypes = { state: FluidTypes; dispatch: React.Dispatch<actions> }

export enum Values {
    setInitialValue = "SetInitialValue",
    setIdealValue = "SetIdealValue",
    setFinalValue = "SetFinalValue",
    setInitialUnit = "setUnit",
    setIdealUnit = "setUnit2",
    setFinalUnit = "setUnit3",
    multiplier = "multiplier",
    Setmultiplier = "Setmultiplier",
    calcWidth = "calcWidth"
}
