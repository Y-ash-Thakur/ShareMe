import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import {GoogleOAuthProvider} from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId='469254797660-dbtp7kln6h0asl3shunkh4q5hvumb026.apps.googleusercontent.com'>
    <Router>
    <App />
    </Router>
    </GoogleOAuthProvider>
  </StrictMode>,
)
