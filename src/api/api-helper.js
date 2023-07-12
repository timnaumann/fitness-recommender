const recommenderAPIURL = process.env.REACT_APP_RECOMMENDER_API
const imageEndpoint = process.env.REACT_APP_RECOMMENDER_API_IMAGE_URL

export const joinUrl = (...args) => args.join('/')

export const getImageURL = (imageName) => `${recommenderAPIURL}/${imageEndpoint}/${imageName}`
