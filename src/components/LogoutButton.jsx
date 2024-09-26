// Import necessary modules from React and Auth0
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  // Destructure Auth0 methods and states
  const { logout, isAuthenticated } = useAuth0();

  // Render the sign-out button only if the user is authenticated
  return (
    isAuthenticated && (
      <button
        onClick={() => logout({ returnTo: window.location.origin })}
        style={{
          backgroundColor: '#404c4a',
          color: '#FFFFFF',
          padding: '5px 15px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        Sign Out
      </button>
    )
  );
};

export default LogoutButton;
