import { AuthProvider } from './context/AuthContext'
import AppRouter from './Router/AppRouter';
import ToastHost from './Components/ToastHost.jsx'

function App() {
  return (
    <AuthProvider>
      <AppRouter />
      <ToastHost />
    </AuthProvider>
  )
}

export default App
