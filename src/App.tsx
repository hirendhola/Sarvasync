import { Routes, Route } from "react-router-dom";
import { NavigationInitializer } from "./wrappers/NavigationInitializer";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import LandingPage from "./pages/Landing";

function App() {
  return (
      <NavigationInitializer>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </NavigationInitializer>
  );
}

export default App;
