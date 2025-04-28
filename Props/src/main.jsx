import App from './App'
import { createRoot } from 'react-dom/client'
import { createContext } from 'react'
import { useContext } from 'react'
import { secondContext } from './component/UseContext'



createRoot(document.getElementById('root')).render(
    <secondContext>
        <App />
    </secondContext>
)
