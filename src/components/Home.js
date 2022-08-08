import { useNavigate } from 'react-router';
import { useAuth } from '../contexts/Auth';
import { altogic } from '../helpers/altogic';

export function Home() {
  // Get current user and signOut function from context
  const { user, setUser, setSession } = useAuth();

  const navigate = useNavigate();

  async function handleSignOut() {
    // Ends user session
    await altogic.auth.signOut();
    setUser(null);
    setSession(null);

    // Redirects the user to Login page
    navigate('/login');
  }

  return (
    <>
      <div style={{ margin: '20px 20px' }}>
        {/* Displays the user ID */}
        <p>Welcome, {user?._id} !</p>

        <span>
          <p>
            Your email verification status:{' '}
            {user?.emailVerified ? 'Verified' : 'Not Verified'}
          </p>
        </span>

        <pre>{user && JSON.stringify(user, null, 3)}</pre>

        <button style={{ margin: '20px 20px' }} onClick={handleSignOut}>
          Sign out
        </button>
      </div>
    </>
  );
}
