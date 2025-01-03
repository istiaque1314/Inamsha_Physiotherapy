import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import keycloak from './keyclock';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [keycloakInstance, setKeycloakInstance] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    keycloak
    .init({
      onLoad: 'check-sso', // Single Sign-On (SSO). user can see the entire application without log in to the application.
      pkceMethod: 'S256',
      redirectUri: 'http://localhost:5173',
      silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html', // facing login issue after refrasing the page, this is how I resolved 
    })
    .then((authenticated) => {
      setIsAuthenticated(authenticated);
      setKeycloakInstance(keycloak);
      setLoading(false);
      if (authenticated) {
        toast.success('Login successful!');
      }
    })
    .catch((error) => {
      console.error('Keycloak initialization failed:', error);
      toast.error('Failed to authenticate. Please try again.');
      setLoading(false);
    });
  
  }, []);

  const logout = () => {
    if (keycloakInstance) {
      // Perform server-side logout
      keycloakInstance.logout({
        redirectUri: 'http://localhost:5173', // Redirect the user to the home page after logout
      });
      keycloakInstance.clearToken(); // Clear the token locally
      setIsAuthenticated(false);
      toast.success('Logged out successfully!');
    }
  };
  
  

  const refreshToken = () => {
    if (keycloakInstance) {
      keycloakInstance
        .updateToken(800) // Refresh token if it's about to expire within 800 seconds
        .catch(() => {
          // toast.error('Session expired. Please log in again.');
          logout();
        });
    }
  };

  useEffect(() => {
    if (keycloakInstance) {
      const interval = setInterval(() => {
        refreshToken();
      }, 60000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        keycloak: keycloakInstance,
        logout,
      }}
    >
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <p>Loading...</p>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
