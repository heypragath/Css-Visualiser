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
        },
        {
            name: "Parent Font Size",
            value: Parent,
            setUseState: (payload) => setParent(payload),
            unit: "px",
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
                <p className='p-4 mb-1 text-xl text-center '>Root Font Size : 16px (1rem) </p>
                <div className='h-[20vh] w-11/12 mx-auto border-2 border-zinc-300 grid grid-cols-1 text-xl pb-5 '>
                    <p className='text-xl justify-self-end '>Parent Font Size : 20px </p>
                    <div className='flex flex-col gap-5 text-center'>
                        <p style={{ fontSize: `${Number(Root) * 1.5}px` }}>Font Size: 1.5rem (1.5 * {Root})</p>
                        <p style={{ fontSize: `${Number(Parent) * 1.5}px` }}>Font Size: 1.5em (1.5 * {Parent})</p>
                    </div>
                </div>
            </TestBox>
        </MasterLayout>
    )
}

export default RelativeUnits