import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Signup } from './components/Signup';
import { Verification } from './components/Verification';
import { Redirect } from './components/Redirect';
import { Login } from './components/Login';
import { PrivateRoute } from './components/PrivateRoute';
import { AuthProvider } from './contexts/Auth';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/auth-redirect" element={<Redirect />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
