import keycloakConfig from './keycloak.json'

let keycloakClient
export const initKeyCloak = async () => {
  const { Keycloak } = window
  keycloakClient = new Keycloak(keycloakConfig)
  try {
    return keycloakClient.init({ onLoad: 'login-required' })
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
    throw e
  }
}

export const getKeycloakToken = () => {
  return `Bearer ${keycloakClient.token}`
}
