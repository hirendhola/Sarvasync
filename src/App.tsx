import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing';
import Notfound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<Notfound />} />

    </Routes>
  );
}

export default App;