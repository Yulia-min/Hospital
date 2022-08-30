import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthPage, SignInPage, VisitsListPage, RequestListPage } from 'src/pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<SignInPage />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="visits-list" element={<VisitsListPage />} />
        <Route path="request-list" element={<RequestListPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
