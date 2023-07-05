import { useState } from 'react'
import ContinuousSlider from './UI/Logical/ContinousSlider'
import Info from './UI/Info'
import Layout from './UI/Layout/MasterLayout'
import Code from './UI/Code'
import ControlElementUI from './UI/Layout/ControlElementUI'

function BoxModel() {
    const [margin, useMargin] = useState<number>(0)
    const [padding, usePadding] = useState<number>(0)
    const [Border, useBorder] = useState<number>(0)

    interface optionType {
        value: number,
        name: string,
        setValue: React.Dispatch<React.SetStateAction<number>>,
        boxModel?: boolean
    }

    const Options: optionType[] = [
        { value: margin, name: "Margin", setValue: useMargin, boxModel: true },
        { value: padding, name: "Padding", setValue: usePadding, boxModel: true },
        { value: Border, name: "Border", setValue: useBorder, boxModel: true }
    ]

    const codeString = `
    .class{
        padding: ${padding}px;
        margin: ${margin}px;    
        border: ${Border}px solid #c13131;
    }
    `

    return (
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
            <div className='p-4 my-4 bg'>
                <div className={`${padding && "outline outline-offset-2 outline-1 rounded-xl"}`} style={{
                    margin: `${margin}px`,
                    padding: `${padding}px`,
                    border: `${Border}px solid #c13131`
                }}>
                    Content
                </div>
            </div>
        </Layout>

    )
}

export default BoxModel