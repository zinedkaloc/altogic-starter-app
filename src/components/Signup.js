import { Link } from 'react-router-dom';
export function Signup() {
  return (
    // Create signup form with email, password, and submit button
    <div style={{ margin: '20px 20px' }}>
      <h1>Signup</h1>
      <form>
        <label>Email:</label>
        <input type="text" name="email" />
        <label>Password:</label>
        <input type="password" name="password" />
        <input type="submit" value="Signup" />
      </form>
      <p>
        {' '}
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
