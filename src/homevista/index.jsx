import { Routes, Route, Navigate } from 'react-router-dom'
import HomeVistaLayout from './HomeVistaLayout'
import HomeVistaHome from './pages/HomeVistaHome'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import DeleteAccount from './pages/DeleteAccount'

// All /homevista/* routes. Mounted from App.jsx with a single lazy import.
export default function HomeVistaRoutes() {
  return (
    <Routes>
      <Route path="/homevista" element={<HomeVistaLayout />}>
        <Route index element={<HomeVistaHome />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="delete-account" element={<DeleteAccount />} />
        <Route path="*" element={<Navigate to="/homevista" replace />} />
      </Route>
    </Routes>
  )
}
