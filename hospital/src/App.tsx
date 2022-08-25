import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthPage, SignInPage, VisitsListPage } from 'src/pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<SignInPage />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="visits-list" element={<VisitsListPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
