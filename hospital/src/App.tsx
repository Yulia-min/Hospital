import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  AuthPage,
  SignInPage,
  VisitsListPage,
  CreateRequestPage,
  ProfilePage,
  EditProfilePage,
  RequestDetailsPage,
  ListOfPatientsPage
} from 'src/pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login/patient" element={<SignInPage />} />
        <Route path="login/admin" element={<SignInPage />} />
        <Route path="login/doctor" element={<SignInPage />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="visits-list" element={<VisitsListPage />} />
        <Route path="request/:requestId" element={<RequestDetailsPage />} />
        <Route path="request/:requestId/list-of-patients" element={<ListOfPatientsPage />} />
        <Route path="create-request" element={<CreateRequestPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="edit-profile/:patientId" element={<EditProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
