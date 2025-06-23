import { Routes, Route } from "react-router-dom";
import { NavigationInitializer } from "./wrappers/NavigationInitializer";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { AppProvider } from "./context/AppContext";

import LandingPage from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import AuthCallback from "./pages/AuthCallback"; 
import Notfound from "./pages/NotFound";

function App() {
  return (
    <NavigationInitializer>
      <AuthProvider>
        <AppProvider>
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
        </AppProvider>
      </AuthProvider>
    </NavigationInitializer>
  );
}

export default App;
