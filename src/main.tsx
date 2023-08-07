import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import FluidContext from './Context/FluidContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FluidContext>
      <App />
    </FluidContext>
  </React.StrictMode>,
)
