import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { FreelancerApp } from './App'

import './styles.css'
import { AppTheme } from './theme/AppTheme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <AppTheme>
        <FreelancerApp />
      </AppTheme>
     </BrowserRouter> 
  </React.StrictMode>
)