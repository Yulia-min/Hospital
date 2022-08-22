import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthPage, SignInPage } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<SignInPage />} />
        <Route path="auth" element={<AuthPage />} />
        {/* <Route path="main" element={<Main />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
