import React, { useCallback, useEffect, useState } from 'react'
import MasterLayout from '../Components/Layout/MasterLayout'
import TestBox from '../Components/Layout/TestBox'
import Info from '../Components/Layout/Info'
import ControlElementUI from '../Components/Layout/ControlElementUI'
import ToggleButtons from '../Components/Logical/ToggleButtons'

function ViewPortUnits() {

    const [Unit, setUnit] = useState(0)
    const [vw, setvw] = useState(window.innerWidth)
    const [vh, setvh] = useState(window.innerHeight)

    const codevw = `
    .class{
        font-size: 2vw;
    }
    `
    const codevh = `
    .class{
        font-size: 2vh;
    }
    `
    const codevamx = `
    .class{
        font-size: 2vmax;
    }
    `
    const codevmin = `
    .class{
        font-size: 2vmin;
    }
    `
    const codesvh = `
    .class{
        font-size: 2svh;
    }
    `
    const codedvh = `
    .class{
        font-size: 2dvh;
    }
    `

    const unitsArray = [
        {
            name: "ViewPort Width",
            value: "left",
            setUseState: (payload) => setUnit(payload),
            code: codevw,
            index: 1,
        },
        {
            name: "ViewPort Height",
            value: "center",
            setUseState: (payload) => setUnit(payload),
            code: codevh,
            index: 2,
        },
        {
            name: "ViewPort Max",
            value: "right",
            setUseState: (payload) => setUnit(payload),
            code: codevamx,
            index: 3,
        },
        {
            name: "ViewPort Min",
            value: "bottom left",
            setUseState: (payload) => setUnit(payload),
            code: codevmin,
            index: 4,
        },
        {
            name: "ViewPort Min",
            value: "bottom center",
            setUseState: (payload) => setUnit(payload),
            code: codesvh,
            index: 5,
        },
        {
            name: "ViewPort Min",
            value: "bottom right",
            setUseState: (payload) => setUnit(payload),
            code: codedvh,
            index: 6,
        },
    ]

    function setWord() {
        if (Unit === 2  || Unit === 5 || Unit === 6) {
            return "Height"
        }
        if (Unit === 1 || Unit === 3) {
            return "Width"
        }
        if( Unit === 4){
            return "Smaller of Width or Height"
        }

    }


    function AddClass() {
        if (Unit === 1) {
            return "2vw"
        }
        if (Unit === 2) {
            return "2vh"
        } if (Unit === 3) {
            return "2vmax"
        } if (Unit === 4) {
            return "2vmin"
        } if (Unit === 5) {
            return "2svh"
        } if (Unit === 6) {
            return "2dvh"
        }
        else {
            return "20px"
        }
    }

    useEffect(() => {

        function HandleResize() {
            setvw(window.innerWidth)

        }

        window.addEventListener("resize", HandleResize)

        setvh(window.innerHeight)

        return (() => window.removeEventListener("resize", HandleResize))

    }, [])


    return (
        <MasterLayout>
            <Info info='View-Port Units'>
                <p>The View-Port Units are the units that are relative to the size of the viewport.</p>
            </Info>
            <ControlElementUI>
                {/* {unitsArray.map(data => {
                    return (
                        <ContinuousSlider props={data} />
                    )
                })} */}
                <ToggleButtons data={unitsArray} />
                <p className='mt-8 text-lg text-center text-red-500'>Inspect The Page and Change the Device Type To See font-size changing with device</p>

            </ControlElementUI>
            <TestBox AddClass='h-[20vh] flex relative flex-col'>
                <div className='absolute top-0 right-0 p-4'>
                    <p className='step--2 '>View-Port Width : {vw}px  </p>
                    <p className='step--2 '>View-Port Height : {vh}px </p>
                </div>
                {
                    AddClass() === "20px" ?
                        <p className="pt-4 text-center" style={{ fontSize: `${AddClass()}` }}>Font Sizes: {AddClass()}</p> :
                        <p className="pt-4 text-center" style={{ fontSize: `${AddClass()}` }}>Font Sizes: {AddClass()} (2% of the {setWord()} of the screen)</p>
                }

            </TestBox>
        </MasterLayout>
    )
}

export default ViewPortUnits