import React, { useState } from 'react'
import Layout from './UI/Layout/MasterLayout'
import Info from './UI/Info'
import Code from './UI/Code'
import ControlElementUI from './UI/Layout/ControlElementUI'
import SwitchLabel from './UI/Logical/Switch'

function Display() {
    const [Block, setBlock] = useState(true)
    const [InlineBlock, setInlineBlock] = useState(false)
    const [Inline, setInline] = useState(false)
    const [Hidden, setHidden] = useState(false)

    const DisplayData = [
        {
            name: 'Block',
            state: Block,
            setState: setBlock
        },
        {
            name: 'Inline-Block',
            state: InlineBlock,
            setState: setInlineBlock
        },
        {
            name: 'Inline',
            state: Inline,
            setState: setInline
        },
        {
            name: 'Hidden',
            state: Hidden,
            setState: setHidden
        },
    ]


    const codestring = `
    .class{
        border-radius: ;
    }
    `
    return (
        <Layout>
            <Info info='Display Property Of CSS'>
                The display property specifies the display behavior (the type of rendering box) of an element.
            </Info>
            <Code>
                {codestring}
            </Code>
            <ControlElementUI>
                <SwitchLabel data={DisplayData} />
            </ControlElementUI>
            <div className={`h-[20vh] bg my-4 `}>
                <div className={`p-3  bg-violet-900 rounded-2xl ${Block && "block"}
                ${InlineBlock && "inline-block"} ${Inline && "inline"}`}>
                    content
                </div>
            </div>
        </Layout>
    )
}

export default Display