
import { createRoot } from 'react-dom/client'
import UserContext from './UserContext.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<UserContext>
<App />
</UserContext>


)
