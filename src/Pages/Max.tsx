import React, { useContext, useState } from 'react'
import MasterLayout from '../Components/Layout/MasterLayout'
import Info from '../Components/UI/Info'
import Code from '../Components/UI/Code'
import ControlElementUI from '../Components/Layout/ControlElementUI'
import { SliderTypes, Values } from '../Types/Types'
import { CreateFluidContext } from '../Context/FluidContext'
import ContinuousSlider from '../Components/Logical/ContinousSlider'

function Max() {

  const codeString = `
  .class{
    width: max(34px, 45px)
  }
`
const [initial, useInitial] = useState<string>("0")
const [Multiplier, useMultiplier] = useState<string>("0")
const [Ideal, useIdeal] = useState<string>("0")

const { state, dispatch } = useContext<any>(CreateFluidContext)

const { initialState, IdealState, FinalState, Unit, Unit2, Unit3, multiplier, multiplierUnit } = state

const Options: SliderTypes[] = [
  {
    value: initial,
    name: "Initial Value",
    setValue: ({ type, payload }) => useInitial(payload),
    setUnit: ({ type, payload }) => dispatch!({ type: Values.setUnit, payload: payload }),
    unit: Unit
  },
  {
    value: Ideal,
    name: "Final Value",
    setValue: ({ type, payload }) => useIdeal(payload),
    setUnit: ({ type, payload }) => dispatch!({ type: Values.setUnit2, payload: payload }),
    unit: Unit2
  },
  {
    value: Multiplier,
    name: "Multiplier",
    setValue: ({ type, payload }) => useMultiplier(payload),
    setUnit: ({ type, payload }) => dispatch!({ type: Values.Setmultiplier, payload: payload }),

    unit: multiplierUnit
  }
]


  return (
    <MasterLayout>
      <div>
        <Info info='CSS Clamp'>
        </Info>
        <Code>{codeString}</Code>
      </div>
      <ControlElementUI>
      {Options.map(option => <ContinuousSlider props={option} />)}



      </ControlElementUI>
    </MasterLayout>
  )
}

export default Max