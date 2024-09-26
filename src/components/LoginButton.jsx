// Import necessary modules from React and Auth0
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  // Destructure Auth0 methods and states
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  // Render the sign-in button only if the user is not authenticated
  return (
    !isAuthenticated && (
      <button
        onClick={() => loginWithRedirect()}
        style={{
          backgroundColor: '#404c4a',
          color: '#ffff', // Assuming `primary_accent_color` is a dark color
          padding: '5px 15px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        Sign In
      </button>
    )
  );
};

export default LoginButton;
