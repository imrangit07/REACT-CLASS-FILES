import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';

import ContextApi from './ContextApi.jsx';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <ContextApi>
        <App />
    </ContextApi>

)
