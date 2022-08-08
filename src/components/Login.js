import { Link } from 'react-router-dom';
export function Login() {
  return (
    // Create login form with email, password, and submit button
    <div style={{ margin: '20px 20px' }}>
      <h1>Login</h1>
      <form>
        <label>Email:</label>
        <input type="text" name="email" />
        <label>Password:</label>
        <input type="password" name="password" />
        <input type="submit" value="Signup" />
      </form>
      <p>
        {' '}
        Don't you have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}
