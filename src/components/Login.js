import { useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';
import { altogic } from '../helpers/altogic';

export function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { setUser } = useAuth();
  const { setSession } = useAuth();
  const [errors, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    // Get email and password input values
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Call Altogic client library `signInWithEmail` function.
    const { errors, user, session } = await altogic.auth.signInWithEmail(
      email,
      password
    );
    setUser(user ?? null);
    setSession(session ?? null);
    if (errors) return setError(errors);
    if (user && session) {
      navigate('/');
    }
  }

  return (
    // Create login form with email, password, and submit button
    <div style={{ margin: '20px 20px' }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <pre>{errors && JSON.stringify(errors, null, 3)}</pre>
        <label>Email:</label>
        <input type="text" name="email" ref={emailRef} />
        <label>Password:</label>
        <input type="password" name="password" ref={passwordRef} />
        <input type="submit" value="Login" />
      </form>
      <p>
        {' '}
        Don't you have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}
