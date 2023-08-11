import React, { useContext, useEffect } from 'react'
import MasterLayout from '../Components/Layout/MasterLayout'
import Info from '../Components/Layout/Info'
import Code from '../Components/UI/Code'
import ControlElementUI from '../Components/Layout/ControlElementUI'
import { SliderTypes, Values, actions } from '../Types/Types'
import ContinuousSlider from '../Components/Logical/ContinousSlider'
import { CreateFluidContext } from '../Context/FluidContext'
import TestBox from '../Components/Layout/TestBox'

function Clamp() {

    const { state, dispatch } = useContext(CreateFluidContext)

    const { initialState, IdealState, FinalState, InitialUnit, IdealUnit, FinalUnit, multiplier, multiplierUnit, CalcWidth } = state


    const ContainerUnit = CalcWidth

    useEffect(() => {
        if (FinalUnit === "rem") {
            dispatch({
                type: Values.setFinalUnit,
                payload: "rem"
            })
        }


    }, [FinalState])



    const Options: SliderTypes[] = [
        {
            value: initialState,
            name: "Minimum Value",
            setValue: ({ payload }) => dispatch!({ type: Values.setInitialValue, payload: payload }),
            setUnit: ({ payload }: actions) => dispatch!({ type: Values.setInitialUnit, payload: payload as string }),
            unit: InitialUnit
        },

        {
            value: IdealState,
            name: "Ideal Value",
            setValue: ({ payload }) => dispatch!({ type: Values.setIdealValue, payload: payload }),
            setUnit: ({ payload }) => dispatch!({ type: Values.setIdealUnit, payload: payload as string }),
            unit: IdealUnit
        },


        {
            value: multiplier,
            name: "Responsive Multiplier",
            setValue: ({ payload }) => dispatch!({ type: Values.multiplier, payload: payload }),
            setUnit: ({ payload }) => dispatch!({ type: Values.Setmultiplier, payload: payload as string }),
            unit: multiplierUnit,
            max: 3
        },

        {
            value: FinalState,
            name: "Maximum Value",
            setValue: ({ payload }) => dispatch!({ type: Values.setFinalValue, payload: payload }),
            setUnit: ({ payload }) => dispatch!({ type: Values.setFinalUnit, payload: payload as string }),
            unit: FinalUnit
        },

    ]


    const codestring = `
 .class {              
    clamp: clamp(${initialState}${InitialUnit}, ${IdealState}${IdealUnit} + ${multiplier}vw, ${FinalState}${FinalUnit})
}
    `

    function Calculation() {

        let inititalValue: number = Number(initialState)
        let IdealValue: number = Number(IdealState)
        let FinalValue: number = Number(FinalState)
        let apple: number


        if (InitialUnit === "rem") {
            inititalValue = initialState * 16
        }
        if (IdealUnit == "rem") {
            IdealValue = IdealState * 16

        }
        if (FinalUnit == "rem") {
            FinalValue = FinalState * 16
        }

        apple = IdealValue + ((multiplier / 100) * ContainerUnit)

        if (FinalValue > apple && apple > inititalValue) {
            return apple
        }

        if (FinalValue < apple) {
            return FinalValue
        }

        if (apple < inititalValue) {
            return inititalValue
        }
    }
    console.log(FinalState)
    return (
        <MasterLayout>
            <div>
                <Info info='CSS Clamp'>
                </Info>
                <div className='flex flex-wrap items-center justify-between'>
                    <div className='basis-1/2'>
                        <Code width='100'>{codestring}</Code>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-3 my-margin-clamp py-padding-clamp basis-1/2 max-md:flex-1 '>
                        <div className='flex '>
                            <p>View-Port Width: </p>
                            <p>{Math.floor(ContainerUnit)}px</p>
                        </div>
                        <div className='flex gap-1 p-2'>
                            <p>Font-Size: </p>
                            <p>{Math.floor(Calculation() ?? 7)}px</p>
                        </div>
                    </div>
                </div>
            </div>
            <ControlElementUI>
                {Options.map((props) => <ContinuousSlider props={props} />)}
            </ControlElementUI>
            <p className='mt-6 text-lg text-center text-red-500 '>Kindly Leave The Parent after Dragging it,to Get The Desired Changes </p>
            <TestBox AddClass='resize-x overflow-auto h-[20vh] flex relative'>
                <p style={{ fontSize: `clamp(${initialState}${InitialUnit}, ${IdealState}${IdealUnit} + ${(multiplier / 100) * ContainerUnit}px, ${FinalState}${FinalUnit})` }}>Try Resizing The Container</p>
                <p className='absolute text-2xl -rotate-45 bottom-2 right-4'> 👇</p>
            </TestBox>
        </MasterLayout>
    )
}

export default Clamp