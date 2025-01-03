import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url:'http://localhost:9192', // Keycloak server URL
    realm:'ansi-dev', // Realm name
    clientId:'auth-client', // Client ID
    pkceMethod:'S256', // PKCE method (ensure this is configured in Keycloak client settings)
  });

export default keycloak;
