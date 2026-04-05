import { createRoot } from 'react-dom/client'
import 'remixicon/fonts/remixicon.css'
import './index.css'
import AppRouter from './Router/AppRouter.jsx'
import ToastHost from './Components/ToastHost.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <AppRouter />
    <ToastHost />
  </>,
)
