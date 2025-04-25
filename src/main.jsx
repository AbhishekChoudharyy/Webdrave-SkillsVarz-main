import React from 'react' 
import { Analytics } from "@vercel/analytics/react"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'  // 👈 import this

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* 👈 wrap App with BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
