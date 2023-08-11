import React, { useState, useContext } from 'react'
import MasterLayout from '../Components/Layout/MasterLayout'
import TestBox from '../Components/Layout/TestBox'
import Info from '../Components/Layout/Info'
import ControlElementUI from '../Components/Layout/ControlElementUI'
import ContinuousSlider from '../Components/Logical/ContinousSlider'
import { CreateFluidContext } from '../Context/FluidContext'
import { SliderTypes } from '../Types/Types'

function ViewPortUnits() {

    const [VW, setVW] = useState(1.5)
    const [VH, setVH] = useState(1.5)

    const { state: { CalcWidth } } = useContext(CreateFluidContext)

    const unitsArray: SliderTypes[] = [
        {
            name: "Root Font Size",
            value: VW,
            setUseState: (payload) => setVW(payload),
            unit: "vw",
            max: 6
        },
        {
            name: "Parent Font Size",
            value: VH,
            setUseState: (payload) => setVH(payload),
            unit: "vh",
            max: 8
        }
    ]

    return (
        <MasterLayout>
            <Info info='View-Port Units'>
                <p>The View-Port Units are the units that are used to measure the size of the viewport.</p>
            </Info>
            <ControlElementUI>
                {unitsArray.map(data => {
                    return (
                        <ContinuousSlider props={data} />
                    )
                })}

            </ControlElementUI>
            <TestBox AddClass='resize-x overflow-auto h-[20vh] flex relative flex-col'>
                <p className='absolute top-0 right-0 p-4 text-base '>View-Port Width : {CalcWidth} </p>
                <p style={{ fontSize: `${VW}vw` }}>Font Size: 1.5vw</p>
                <p style={{ fontSize: `${(VH)}vh` }}>Font Size: 1.5vh</p>
            </TestBox>
            <Info info='Special View-Port Units'>
                <p>The View-Port Units are the units that are used to measure the size of the viewport.</p>
            </Info>
        </MasterLayout>
    )
}

export default ViewPortUnits