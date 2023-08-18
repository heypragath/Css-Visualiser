import { useState } from 'react'
import Layout from '../Components/Layout/MasterLayout';
import Info from '../Components/Layout/Info';
import ControlElementUI from '../Components/Layout/ControlElementUI';
import ToggleButtons from '../Components/Logical/ToggleButtons';

function CAD() {
  const [Postion, SetPosition] = useState(0)

  const code1 = `
    .class{
      display: flex;
      justify-content: center;
      align-items-center
      }
    `
  const code2 = `
    .class{
      display: grid;
      place-items: center;
    
    }
    `
  const code3 = `
    .class{
      position: absolute;
      inset: 0;
      margin: auto
    }
  `
  const Data = [
    {
      title: "Flex",
      value: "left",
      setUseState: SetPosition,
      code: code1,
      index: 1,
      blur: true
    },
    {
      title: "Grid",
      value: "center",
      setUseState: SetPosition,
      code: code2,
      index: 2,
      blur: true
    },
    {
      title: "Inset",
      value: "right",
      setUseState: SetPosition,
      code: code3,
      index: 3,
      blur: true
    },
  ]

  function AddClass() {
    if (Postion === 1) {
      return "flex justify-center items-center"
    }
    if (Postion === 2) {
      return "grid place-content-center"
    }
  }



  return (
    <Layout>
      <Info info="Centering a Div">
        The Most Dreaded Part of CSS😉
      </Info>
      <ControlElementUI>
        <div className='mt-5'>
          <ToggleButtons data={Data} />
        </div>
      </ControlElementUI>
      <p className='mt-8 text-lg text-center text-red-500 '> Click on any of the Code Snippets to Center the Div😉 </p>
      <div className={`bg h-[20vh] my-4 gap-4 mt-12  ${AddClass()} relative`}
      >
        <div className={`${Postion === 3 ? "absolute inset-0 m-auto" : ""} w-20 h-10 p-10 text-center border-2 border-sky-500 `}></div>
      </div>
    </Layout >
  )
}

export default CAD