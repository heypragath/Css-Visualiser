import React, { useState } from 'react'
import MasterLayout from '../Components/Layout/MasterLayout'
import Info from '../Components/Layout/Info'
import TestBox from '../Components/Layout/TestBox'
import ControlElementUI from '../Components/Layout/ControlElementUI'
import ContinuousSlider from '../Components/Logical/ContinousSlider'
import { SliderTypes } from '../Types/Types'

function RelativeUnits() {

    const [Root, setRoot] = useState(16)
    const [Parent, setParent] = useState(20)

    const unitsArray: SliderTypes[] = [
        {
            name: "Root Font Size",
            value: Root,
            setUseState: (payload) => setRoot(payload),
            unit: "px",
            max: 30
        },
        {
            name: "Parent Font Size",
            value: Parent,
            setUseState: (payload) => setParent(payload),
            unit: "px",
            max: 30
        }
    ]



    return (
        <MasterLayout>
            <Info info='Relative Units'>
            </Info>
            <ControlElementUI>
                {unitsArray.map((prop) => <ContinuousSlider props={prop} />)}
            </ControlElementUI>
            <TestBox AddClass='h-[40vh] flex flex-col'>
                <p className='p-4 mb-1 text-xl text-center '>Root Font Size : {Root}px (1rem) </p>
                <div className='h-[25vh] w-11/12 mx-auto border-2 border-zinc-300 grid grid-cols-1 text-xl pb-5 '>
                    <p className='mt-3 mr-2 text-xl justify-self-end '>Parent Font Size : {Parent}px (1em) </p>
                    <div className='flex flex-col text-center gap-7'>
                        <p style={{ fontSize: `${Number(Root) * 1.5}px` }}>Font Size: 1.5rem (1.5 * {Root})</p>
                        <p style={{ fontSize: `${Number(Parent) * 1.5}px` }}>Font Size: 1.5em (1.5 * {Parent})</p>
                    </div>
                </div>
            </TestBox>
        </MasterLayout>
    )
}

export default RelativeUnits