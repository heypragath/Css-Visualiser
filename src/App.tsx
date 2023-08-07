import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BoxModel from './Pages/BoxModel'
import Flex from './Pages/Flex'
import Radius from './Pages/Radius'
import Display from './Pages/Display'
import Clamp from './Pages/Clamp'
import Min from './Pages/Min'
import Max from './Pages/Max'


function App() {

  return (

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BoxModel />} />
          <Route path='/box-model' element={<BoxModel />} />
          <Route path='/flex' element={<Flex />} />
          <Route path='/border-radius' element={<Radius />} />
          <Route path='/Clamp' element={<Clamp />} />
          <Route path='/min' element={<Min />} />
          <Route path='/max' element={<Max />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
