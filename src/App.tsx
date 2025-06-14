import { Routes, Route } from "react-router-dom";
import { NavigationInitializer } from "./wrappers/NavigationInitializer";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";

import LandingPage from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import AuthCallback from "./pages/AuthCallback"; // <-- Import the new page
import Notfound from "./pages/NotFound";

function App() {
  return (
    <NavigationInitializer>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth/magiclink/callback" element={<AuthCallback />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </AuthProvider>
    </NavigationInitializer>
  );
}

export default App;
