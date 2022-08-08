import React, { useEffect, useState } from 'react';
import { altogic } from '../helpers/altogic';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';

export function Redirect() {
  const navigate = useNavigate();
  const { session, setSession, setUser } = useAuth();
  const [errors, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let { session, user, errors } = await altogic.auth.getAuthGrant();
      setSession(session);
      setUser(user);
      // If error occurs, set error state
      if (errors) return setError(errors);

      navigate('/');
      console.log('session', session);
    }
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return !session ? (
    <div style={{ margin: '20px 20px' }}>
      You are redirecting to the profile page...
    </div>
  ) : (
    <div style={{ margin: '20px 20px' }}>
      Not verified...
      <pre>{errors && JSON.stringify(errors, null, 3)}</pre>
    </div>
  );
}
