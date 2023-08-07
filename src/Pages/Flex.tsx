import { useState } from 'react'
import SwitchLabel from '../Components/Logical/Switch'
import Layout from '../Components/Layout/MasterLayout';
import Info from '../Components/UI/Info';
import Code from '../Components/UI/Code';
import ControlElementUI from '../Components/Layout/ControlElementUI';

function Flex() {
  const [JustifyContent, SetJustifyContent] = useState(false)
  const [Flex, SetFlex] = useState(true)
  const [Align, SetAlign] = useState(false)
  const [Grid, SetGrid] = useState(false)
  const [PlaceCenter, SetPlaceCenter] = useState(false)


  const codeString = `
    .class{
        display: ${Flex ? "flex" : "block"};
        ${JustifyContent ? "justify-content: center;" : ""}  
        ${Align ? "align-items: center;" : ""} 
    }
    `
  const code = `
    .class{
        display: ${Grid ? "grid" : "block"};
        ${PlaceCenter ? "place-items: center;" : ""}  
    }
    `

  const data = [
    {
      name: "Flex",
      other: Grid,
      state: Flex,
      setState: SetFlex,
    },
    {
      name: "Horizontally Center",
      state: JustifyContent,
      setState: SetJustifyContent,
    },
    {
      name: "Vertically Center",
      state: Align,
      setState: SetAlign,
    }
  ]

  const GridData = [{
    name: "Grid",
    other: Flex,
    state: Grid,
    setState: SetGrid,
  },
  {
    name: "Place Center",
    other: Flex,
    state: PlaceCenter,
    setState: SetPlaceCenter,
  }
  ]


  return (
    <Layout>
      <Info info=" Flex Property of CSS ">
        Before the Flexbox Layout module, there were four layout modes:
        Block, for sections in a webpage
        Inline, for text
       

      </Info>
      <div className='flex flex-wrap justify-around '>
        <Code>
          {codeString}
        </Code>
        <Code>
          {code}
        </Code>
      </div>
      <ControlElementUI>
        <p className='py-3 text-center text-red-500 step--1'>Kindly, Uncheck Previous Property before using the other one</p>
        <div className='flex flex-wrap justify-around mt-4 max-md:flex-start max-md:gap-6'>
          <div>
            <p>Flex Positioning</p>
            <SwitchLabel data={data} />
          </div>
          <div>
            <p>Grid Positioning</p>
            <SwitchLabel data={GridData} />
          </div>
        </div>
      </ControlElementUI>
      <div className={`bg h-[20vh] my-4 ${Flex && "flex"} ${Grid && "grid"} ${PlaceCenter && "place-content-center"} gap-4 ${JustifyContent && "justify-center"} ${Align && "items-center"}  `}
      >
        <div className='w-20 h-10 p-10 text-center border-2 border-sky-500'></div>
      </div>
    </Layout >
  )
}

export default Flex