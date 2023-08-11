import { useState } from 'react'
import Layout from '../Components/Layout/MasterLayout'
import Info from '../Components/Layout/Info'
import Code from '../Components/UI/Code'
import ControlElementUI from '../Components/Layout/ControlElementUI'
import BasicTabs from '../Components/Logical/Tabs'

function Display() {

    const [Property, setProperty] = useState(0)

    function Properties() {

        if (Property === 2) {
            return "Inline"
        }
        if (Property === 0) {
            return "Block"
        }
        if (Property === 1) {
            return "Inline-block"
        }
        if (Property === 3) {
            return "Hidden"
        }
    }

    const codestring = `
    .class{
        display: ${Properties()};
    }
    `
    return (
        <Layout>
            <Info info='Display Properties Of CSS'>
            </Info>
            <Code>
                {codestring}
            </Code>
            <ControlElementUI>
                <BasicTabs setProperty={setProperty} />
            </ControlElementUI>
        </Layout>
    )
}

export default Display