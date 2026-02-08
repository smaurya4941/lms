import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  './assets/style.scss'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './context/Auth.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <App />

    </AuthProvider>
  </StrictMode>,
)
