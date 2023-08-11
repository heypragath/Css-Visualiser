import { useState } from 'react'
import ContinuousSlider from '../Components/Logical/ContinousSlider'
import Info from '../Components/Layout/Info'
import Layout from '../Components/Layout/MasterLayout'
import Code from '../Components/UI/Code'
import ControlElementUI from '../Components/Layout/ControlElementUI'
import { SliderTypes } from '../Types/Types'
import TestBox from '../Components/Layout/TestBox'


function BoxModel() {
    const [margin, useMargin] = useState<number>(0)
    const [padding, usePadding] = useState<number>(0)
    const [Border, useBorder] = useState<number>(0)


    const Options: SliderTypes[] = [
        { value: margin, name: "Margin", setUseState: (payload) => useMargin(payload) },
        { value: padding, name: "Padding", setUseState: (payload) => usePadding(payload) },
        { value: Border, name: "Border", setUseState: (payload) => useBorder(payload) }
    ]

    const codeString = `
    .class{
        padding: ${padding}px;
        margin-block: ${margin}px;    
        border: ${Border}px solid #c13131;
    }
    `

    return (
        <>
            <Layout>
                <div>
                    <Info info='Box Model'>
                        The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.
                    </Info>
                    <Code>{codeString}</Code>
                </div>
                <ControlElementUI>
                    {Options.map(item => {
                        return (<ContinuousSlider props={item} />)
                    })}
                </ControlElementUI>
                <TestBox AddClass='p-4 my-4'>
                    <div className={`${padding && "outline outline-offset-2 outline-1 rounded-xl w-full"}`} style={{
                        margin: `${margin}px 0px ${margin}px 0px`,
                        padding: `${padding}px`,
                        border: `${Border}px solid #c13131`
                    }}>
                        Content
                    </div>
                </TestBox>
            </Layout>
        </>

    )
}

export default BoxModel