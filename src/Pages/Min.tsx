import React, { useContext, useState } from 'react'
import MasterLayout from '../Components/Layout/MasterLayout'
import Info from '../Components/Layout/Info'
import Code from '../Components/UI/Code'
import ControlElementUI from '../Components/Layout/ControlElementUI'
import ContinuousSlider from '../Components/Logical/ContinousSlider'
import { SliderTypes, Values, actions } from '../Types/Types'
import { CreateFluidContext } from '../Context/FluidContext'
import TestBox from '../Components/Layout/TestBox'

function Min() {

  const [Max, useMax] = useState<number>(50)
  const [Multiplier, useMultiplier] = useState<number>(30)
  const [Base, useBase] = useState<number>(70)

  const FluidContext = useContext(CreateFluidContext)

  if (!FluidContext) return null

  const { state, dispatch } = FluidContext

  const { FinalUnit, IdealUnit, multiplierUnit } = state



  const Options: SliderTypes[] = [
    {
      value: Base,
      name: "Base Value",
      setValue: ({ payload }) => useBase(payload),
      setUnit: ({ payload }: actions) => dispatch!({ type: Values.setIdealUnit, payload: payload as string }),
      unit: IdealUnit
    },
    {
      value: Multiplier,
      name: "Multiplier",
      setValue: ({ payload }) => useMultiplier(payload),
      setUnit: ({ payload }: actions) => dispatch!({ type: Values.Setmultiplier, payload: payload as string }),
      unit: multiplierUnit
    },
    {
      value: Max,
      name: "Maximum Value",
      setValue: (payload) => useMax(payload),
      setUnit: ({ payload }: actions) => dispatch!({ type: Values.setFinalUnit, payload: payload as string }),
      unit: FinalUnit
    }
  ]

  console.log(FinalUnit)

  const codeString = `
    .class{
     width:min(${Base}${IdealUnit} + ${Multiplier}${multiplierUnit}, ${Max}${FinalUnit})
    }
  `
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
      {/* <p className='mt-6 text-lg text-center text-red-700 '>Kindly Leave The Element after Dragging it,to Get The Desired Changes </p> */}
      <TestBox AddClass='h-[20vh] flex'>
        <div className='overflow-auto resize-x bg-blue-950 h-[10vh] max-w-[800px] rounded-2xl grid place-items-center relative' style={{ width: `min( ${Base}${IdealUnit} + ${Multiplier}${multiplierUnit}, ${Max}${FinalUnit})`, minWidth: `${Base}${IdealUnit}` }}>
          <p>Drag Me</p>
          <p className='absolute text-2xl -rotate-45 bottom-2 right-4'> 👇</p>


        </div>
      </TestBox >

    </MasterLayout>
  )
}

export default Min