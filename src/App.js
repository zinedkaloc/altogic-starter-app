import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Signup } from './components/Signup';
import { Verification } from './components/Verification';
import { Redirect } from './components/Redirect';
import { Login } from './components/Login';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/auth-redirect" element={<Redirect />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
