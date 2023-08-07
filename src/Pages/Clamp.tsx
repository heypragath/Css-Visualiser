import React, { useContext, useRef, useState } from 'react'
import MasterLayout from '../Components/Layout/MasterLayout'
import Info from '../Components/UI/Info'
import Code from '../Components/UI/Code'
import ControlElementUI from '../Components/Layout/ControlElementUI'
import { SliderTypes, Values } from '../Types/Types'
import ContinuousSlider from '../Components/Logical/ContinousSlider'
import { CreateFluidContext } from '../Context/FluidContext'
import TestBox from '../Components/Layout/TestBox'

function Clamp() {

    const { state, dispatch } = useContext<any>(CreateFluidContext)

    const { initialState, IdealState, FinalState, InitialUnit, IdealUnit, FinalUnit, multiplier, multiplierUnit, CalcWidth } = state


    const ContainerUnit = Number(CalcWidth)


    const Options: SliderTypes[] = [
        {
            value: initialState,
            name: "Initial Value",
            setValue: ({ type, payload }): { value: string } => dispatch!({ type: Values.setInitialValue, payload: payload }),
            setUnit: ({ type, payload }) => dispatch!({ type: Values.setUnit, payload: payload }),
            unit: InitialUnit
        },

        {
            value: IdealState,
            name: "Ideal Value",
            setValue: ({ type, payload }) => dispatch!({ type: Values.setIdealValue, payload: payload }),
            setUnit: ({ type, payload }) => dispatch!({ type: Values.setUnit2, payload: payload }),
            unit: IdealUnit
        },



        {
            value: FinalState,
            name: "Final Value",
            setValue: ({ type, payload }) => dispatch!({ type: "SetFinalValue", payload: payload }),
            setUnit: ({ type, payload }) => dispatch!({ type: Values.setUnit3, payload: payload }),
            unit: FinalUnit
        },
        {
            value: multiplier,
            name: "Responsive Multiplier",
            setValue: ({ type, payload }) => dispatch!({ type: Values.multiplier, payload: payload }),
            setUnit: ({ type, payload }) => dispatch!({ type: Values.Setmultiplier, payload: payload }),
            unit: multiplierUnit
        },

    ]


    const codestring = `
 .class {              
    clamp: clamp(${initialState}${InitialUnit}, ${IdealState}${IdealUnit} + ${multiplier}vw, ${FinalState}${FinalUnit}
}
    `

    function Calculation() {

        let inititalValue: number = Number(initialState)
        let IdealValue: number = Number(IdealState)
        let state3: number = Number(FinalState)
        let apple: number


        if (InitialUnit === "rem") {
            inititalValue = initialState * 16
        }
        if (IdealUnit == "rem") {
            IdealValue = IdealState * 16

        }
        if (FinalUnit == "rem") {
            state3 = FinalState * 16
        }

        apple = IdealValue + ((multiplier / 100) * ContainerUnit)

        if (FinalState > apple && apple > inititalValue) {
            return apple
        }

        if (FinalState < apple) {
            return FinalState
        }

        if (apple < inititalValue) {
            return inititalValue
        }



    }

    return (
        <MasterLayout>
            <div>
                <Info info='CSS Clamp'>
                </Info>
                <div className='flex justify-between'>
                    <Code>{codestring}</Code>
                    <div className='flex flex-col items-center justify-center gap-3 my-margin-clamp py-padding-clamp basis-1/2 '>
                        <div className='flex '>
                            <p>WP: </p>
                            <p>{Math.floor(ContainerUnit)}px</p>
                        </div>
                        <div className='flex gap-1 p-2'>
                            <p>Font-Size: </p>
                            <p>{Calculation()}px</p>
                        </div>
                    </div>
                </div>
            </div>
            <ControlElementUI>
                {Options.map((props) => <ContinuousSlider props={props} />)}
            </ControlElementUI>
            <TestBox AddClass='resize-x overflow-auto h-[20vh]'>
                <p style={{ fontSize: `clamp(${initialState}${InitialUnit}, ${IdealState}${IdealUnit} + ${(multiplier / 100) * ContainerUnit}px, ${FinalState}${FinalUnit})` }}>Try Resizing The Container</p>
            </TestBox>
        </MasterLayout>
    )
}

export default Clamp