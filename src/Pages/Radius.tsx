import { useReducer } from 'react'
import Layout from '../Components/Layout/MasterLayout'
import ContinuousSlider from '../Components/Logical/ContinousSlider'
import Info from '../Components/UI/Info'
import Code from '../Components/UI/Code'
import ControlElementUI from '../Components/Layout/ControlElementUI'

function Radius() {

  const InitialState = {
    paddingTopLeft: "0",
    paddingTopRight: "0",
    paddingBottomRight: "0",
    paddingBottomLeft: "0",
  }

  type stateTypes = typeof InitialState

  type actionTypes = {
    type: string,
    payload: string
  }

  const reducer = (state: stateTypes, action: actionTypes) => {
    switch (action.type) {
      case "paddingTopLeft":
        return { ...state, paddingTopLeft: action.payload }
      case "paddingTopRight":
        return { ...state, paddingTopRight: action.payload }
      case "paddingBottomRight":
        return { ...state, paddingBottomRight: action.payload }
      case "paddingBottomLeft":
        return { ...state, paddingBottomLeft: action.payload }
      default:
        return state
    }
  }


  const [state, dispatch] = useReducer(reducer, InitialState)


  const props = [
    {
      name: "Padding Top-Left",
      value: state.paddingTopLeft,
      setValue: ({ type, payload }) => dispatch({ type: "paddingTopLeft", payload: payload })
    },
    {
      name: "Padding Top-Right",
      value: state.paddingTopRight,
      setValue: ({ type, payload }) => dispatch({ type: "paddingTopRight", payload: payload })
    },
    {
      name: "Padding Bottom-Right",
      value: state.paddingBottomRight,
      setValue: ({ type, payload }) => dispatch({ type: "paddingBottomRight", payload: payload })
    },
    {
      name: "Padding Bottom-Left",
      value: state.paddingBottomLeft,
      setValue: ({ type, payload }) => dispatch({ type: "paddingBottomLeft", payload: payload })
    },
  ]

  const codeString = `
    .class{
        border-radius: ${state.paddingTopLeft}px ${state.paddingTopRight}px ${state.paddingBottomRight}px ${state.paddingBottomLeft}px;
    }
    `

  return (
    <Layout>
      <Info info='Border Radius Property of CSS'>
        This CSS property sets the rounded borders and provides the rounded corners around an element, tags, or div. It defines the radius of the corners of an element.
      </Info>
      <div>
        <Code>
          {codeString}
        </Code>
      </div>
      <ControlElementUI>
        {props.map(data => {
          return (<ContinuousSlider props={data} />)
        })}
      </ControlElementUI>
      <div className='p-2 my-4 bg '>
        <div className='p-10 bg-violet-900' style={{ borderRadius: `${state.paddingTopLeft}px ${state.paddingTopRight}px ${state.paddingBottomRight}px ${state.paddingBottomLeft}px` }}>
          Content
        </div>
      </div>
    </Layout >
  )
}

export default Radius