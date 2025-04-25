
import { createRoot } from 'react-dom/client';
import BgProvider from './BgProvider.jsx';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<BgProvider>
    <App />
</BgProvider>

)
