import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BoxModel from './Pages/BoxModel'
import Flex from './Pages/CAD'
import Radius from './Pages/Radius'
import Display from './Pages/Display'
import Clamp from './Pages/Clamp'
import Min from './Pages/Min'
import Max from './Pages/Max'
import Units from './Pages/RelativeUnits'
import ViewPortUnits from './Pages/ViewPortUnits'


function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BoxModel />} />
          <Route path='/box-model' element={<BoxModel />} />
          <Route path='/flex' element={<Flex />} />
          <Route path='/border-radius' element={<Radius />} />
          <Route path='/display-property' element = {<Display/>} />
          <Route path='/Clamp' element={<Clamp />} />
          <Route path='/min' element={<Min />} />
          <Route path='/max' element={<Max />} />
          <Route path='/ultimate-units' element={<Units />} />
          <Route path='/viewport-units' element={<ViewPortUnits />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
