import React, { createContext, useEffect, useReducer } from 'react'
import { InitialContextStateTypes, Values } from '../Types/Types'

const InitialState = {

    initialState: "16",
    IdealState: "25",
    multiplier: "2",
    FinalState: "72",
    InitialUnit: "px",
    IdealUnit: "px",
    FinalUnit: "px",
    multiplierUnit: "vw",
    CalcWidth: "0"

}

export type FluidTypes = typeof InitialState


export type actions = {
    type: string,
    payload: string

}

const FluidReducer = (state: FluidTypes, action: actions): FluidTypes => {
    switch (action.type) {
        case Values.setInitialValue:
            return { ...state, initialState: action.payload }
        case Values.setIdealValue:
            return { ...state, IdealState: action.payload }
        case Values.setFinalValue:
            return { ...state, FinalState: action.payload }
        case Values.setUnit:
            return { ...state, InitialUnit: action.payload }
        case Values.setUnit2:
            return { ...state, IdealUnit: action.payload }
        case Values.setUnit3:
            return { ...state, FinalUnit: action.payload }
        case Values.multiplier:
            return { ...state, multiplier: action.payload }
        case Values.Setmultiplier:
            return { ...state, multiplierUnit: action.payload }
        case Values.calcWidth:
            return { ...state, CalcWidth: action.payload }

        default:
            return state
    }

}

const InitialContextState = {
    state: InitialState,
    dispatch: () => { }
}




export const CreateFluidContext = createContext<InitialContextStateTypes>(InitialContextState)


function FluidContext({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(FluidReducer, InitialState)


    console.log(state.InitialUnit)
    useEffect(() => {
        if (state.InitialUnit === "rem") {
            dispatch({ type: Values.setInitialValue, payload: "1" })
            console.log(state.initialState)
        }
        if (state.IdealUnit == "rem") {
            dispatch({ type: Values.setIdealValue, payload: "1" })
        }
        if (state.FinalUnit == "rem") {
            dispatch({ type: Values.setFinalValue, payload: "1" })
        }


    }, [state.InitialUnit, state.IdealUnit, state.FinalUnit])


    return (
        <CreateFluidContext.Provider value={{ state, dispatch }} >
            {children}
        </CreateFluidContext.Provider >
    )
}

export default FluidContext