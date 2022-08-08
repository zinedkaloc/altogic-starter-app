import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { altogic } from '../helpers/altogic';

export function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errors, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    // Get email and password input values
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Calls `signUpWithEmail` function from the Altogic client library
    const { errors, user } = await altogic.auth.signUpWithEmail(
      email,
      password
    );
    // If error occurs, set error state
    if (errors) return setError(errors);

    // If user.emailVerified is false, redirect to verification page else redirect to home page

    if (user.emailVerified === false) {
      console.log('Email verification status:', user.emailVerified);
      navigate('/verification');
    } else {
      navigate('/');
    }
  }

  return (
    // Create signup form with email, password, and submit button
    <div style={{ margin: '20px 20px' }}>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="text" name="email" ref={emailRef} />
        <label>Password:</label>
        <input type="password" name="password" ref={passwordRef} />
        <input type="submit" value="Signup" />
      </form>
      <p style={{ margin: '20px 0px' }}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
      <pre>{errors && JSON.stringify(errors, null, 3)}</pre>
    </div>
  );
}
