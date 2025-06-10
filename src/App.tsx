import { Routes, Route } from "react-router-dom";
import { NavigationInitializer } from "./wrappers/NavigationInitializer";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import LandingPage from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Notfound from "./pages/NotFound";

function App() {
  return (
    <NavigationInitializer>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </NavigationInitializer>
  );
}

export default App;
