import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BoxModel from './Components/BoxModel'
import Flex from './Components/Flex'
import Radius from './Components/Radius'
import Display from './Components/Display'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BoxModel />}/>
        <Route path='/box-model' element={<BoxModel />}/>
        <Route path='/flex' element={<Flex />} />
        <Route path='/border-radius' element={<Radius />} />
        <Route path='/display-Property' element={<Display />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
