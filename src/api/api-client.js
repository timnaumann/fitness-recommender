import ky from 'ky'
import { getBearerToken } from '@api/api-service'

let requestInstance = ky.create({
  prefixUrl: process.env.REACT_APP_RECOMMENDER_API,
  credentials: 'include'
})

const authenticatedRequestInstance = requestInstance.extend({
  hooks: {
    beforeRequest: [
      request => {
        request.headers.set('Authorization', getBearerToken())
      }
    ]
  },
})

const wrapCallInErrorHandler = async (request) => {
  try {
    const result = await request()
    return result
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Error while sending request to API: ', e)
  }
  return null
}

export const sendGetRequestRetrievingHtml = (endpoint) => wrapCallInErrorHandler(async () => {
  const response = await requestInstance.get(endpoint)
  return response.text()
})

export const sendGetRequest = (endpoint) => wrapCallInErrorHandler(
  () => requestInstance.get(endpoint)
    .json()
)

export const sendAuthenticatedGetRequest = (endpoint) => wrapCallInErrorHandler(
  () => authenticatedRequestInstance.get(endpoint)
    .json(),
)

export const sendPostRequest = (endpoint, payload) => wrapCallInErrorHandler(
  () => requestInstance.post(endpoint, { json: payload })
    .json(),
)

export const sendAuthenticatedPostRequest = (endpoint, payload) => wrapCallInErrorHandler(
  () => authenticatedRequestInstance.post(endpoint, { json: payload })
    .json(),
)

export const sendAuthenticatedPutRequest = (endpoint, payload, options = {}) => wrapCallInErrorHandler(
  () => authenticatedRequestInstance.put(endpoint, { json: payload, ...options })
    .json(),
)

export const sendAuthenticatedDeleteRequest = (endpoint) => wrapCallInErrorHandler(
  () => authenticatedRequestInstance.delete(endpoint),
)
