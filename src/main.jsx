
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "../src/api/server.js"

createRoot(document.getElementById('root')).render(
    <App />
)
