import { FluidTypes } from "../Context/FluidContext"

export interface SliderTypes {
    value: string,
    name: string,
    setValue: React.Dispatch<actions>,
    setUnit?: React.Dispatch<actions>,
    unit?: string,
}

export type actions = {
    type: string,
    payload: string

}


export type InitialContextStateTypes = {
    state: FluidTypes,
    dispatch?: React.Dispatch<actions>
}

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
