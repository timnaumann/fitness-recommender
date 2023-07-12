import { getKeycloakToken, initKeyCloak } from '@api/keycloak/keycloak'
import {
  sendAuthenticatedDeleteRequest,
  sendAuthenticatedGetRequest,
  sendAuthenticatedPostRequest,
  sendAuthenticatedPutRequest,
  sendGetRequest,
  sendGetRequestRetrievingHtml,
  sendPostRequest,
} from './api-client'

const recommenderProfileEndpoint = process.env.REACT_APP_RECOMMENDER_API_PROFILE_URL

const entityPrefix = process.env.REACT_APP_RECOMMENDER_API_ENTITY_PREFIX
const diagnosisEndpoint = process.env.REACT_APP_RECOMMENDER_API_DIAGNOSIS_URL
const categoriesEndpoint = process.env.REACT_APP_RECOMMENDER_API_CATEGORIES_URL
const answersEndpoint = process.env.REACT_APP_RECOMMENDER_API_ANSWERS_URL
const questionStagesEndpoint = process.env.REACT_APP_RECOMMENDER_API_STAGES_URL
const questionsEndpoint = process.env.REACT_APP_RECOMMENDER_API_QUESTIONS_URL
const localesEndpoint = process.env.REACT_APP_RECOMMENDER_API_LOCALES_URL
const recommendationsEndpoint = process.env.REACT_APP_RECOMMENDER_API_RECOMMENDATIONS_URL
const settingsEndpoint = process.env.REACT_APP_RECOMMENDER_API_SETTINGS_URL
const answerDiagnosisDetailsEndpoint = process.env.REACT_APP_RECOMMENDER_API_ANSWER_DIAGNOSIS_URL
const blogPageEndpoint = process.env.REACT_APP_RECOMMENDER_API_BLOGPAGE_URL

const userProfilesEndpoint = process.env.REACT_APP_RECOMMENDER_USER_PROFILES_URL

const imageEndpoint = process.env.REACT_APP_RECOMMENDER_API_IMAGE_URL
const legalEndpoint = process.env.REACT_APP_RECOMMENDER_API_LEGAL_URL

export const initSecureLayer = () => initKeyCloak()
export const getBearerToken = () => getKeycloakToken()

// ADMIN_AREA only //
// settings
export const addSetting = (key, value) => sendAuthenticatedPostRequest(`${entityPrefix}${settingsEndpoint}/${key}`, { value })

// diagnosis
export const getAllDiagnosis = () => sendAuthenticatedGetRequest(`${entityPrefix}${diagnosisEndpoint}`)
export const createDiagnosis = (payload) => sendAuthenticatedPostRequest(`${entityPrefix}${diagnosisEndpoint}`, payload)
export const deleteDiagnosis = (diagnosisId) => sendAuthenticatedDeleteRequest(`${entityPrefix}${diagnosisEndpoint}/${diagnosisId}`)

// Categories
export const getAllCategories = () => sendAuthenticatedGetRequest(`${entityPrefix}${categoriesEndpoint}`)
export const createCategory = (payload) => sendAuthenticatedPostRequest(`${entityPrefix}${categoriesEndpoint}`, payload)
export const deleteCategory = (categoryId) => sendAuthenticatedDeleteRequest(`${entityPrefix}${categoriesEndpoint}/${categoryId}`)

// AssignQuestionToCategory
export const createQuestionToCategoryAssignment = (categoryId, questionId) => sendAuthenticatedPostRequest(
  `${entityPrefix}${categoriesEndpoint}/${categoryId}${questionsEndpoint}/${questionId}`,
)
export const deleteQuestionToCategoryAssignment = (categoryId, questionId) => sendAuthenticatedDeleteRequest(
  `${entityPrefix}${categoriesEndpoint}/${categoryId}${questionsEndpoint}/${questionId}`,
)

// Answers
export const getAllAnswers = () => sendAuthenticatedGetRequest(`${entityPrefix}${answersEndpoint}`)
export const createAnswer = (payload) => sendAuthenticatedPostRequest(`${entityPrefix}${answersEndpoint}`, payload)
export const deleteAnswer = (answerId) => sendAuthenticatedDeleteRequest(`${entityPrefix}${answersEndpoint}/${answerId}`)
export const uploadAnswerImage = (image, answerId, locale) => {
  const imageName = image.name
  const formData = new FormData()
  formData.append('imageName', imageName)
  formData.append('image', image)
  return sendAuthenticatedPutRequest(`${entityPrefix}${answersEndpoint}/${answerId}/${imageEndpoint}${locale ? `?locale=${locale}` : ''}`,
    undefined, {
      headers: {},
      body: formData,
    })
}

// questionstages
export const createQuestionStage = (payload) => sendAuthenticatedPostRequest(`${entityPrefix}${questionStagesEndpoint}`, payload)
export const deleteQuestionStage = (questionStageId) => sendAuthenticatedDeleteRequest(
  `${entityPrefix}${questionStagesEndpoint}/${questionStageId}`,
)

// questions
export const createQuestions = (payload) => sendAuthenticatedPostRequest(`${entityPrefix}${questionsEndpoint}`, payload)
export const deleteQuestion = (questionId) => sendAuthenticatedDeleteRequest(`${entityPrefix}${questionsEndpoint}/${questionId}`)

// Recommendations
export const createRecommendation = (payload) => sendAuthenticatedPostRequest(`${entityPrefix}${recommendationsEndpoint}`, payload)
export const updateRecommendation = (payload, recommendationId) => sendAuthenticatedPostRequest(`${entityPrefix}${recommendationsEndpoint}/${recommendationId}`, payload)
export const getAllRecommendations = (locale) => sendAuthenticatedGetRequest(`${entityPrefix}${recommendationsEndpoint}${locale ? `?locale=${locale}` : ''}`)
export const deleteRecommendation = (recommendationId) => sendAuthenticatedDeleteRequest(
  `${entityPrefix}${recommendationsEndpoint}/${recommendationId}`,
)

// Images
export const getImage = (imageName) => sendAuthenticatedGetRequest(`${imageEndpoint}/${imageName}`)

// Locales
export const getLocales = () => sendAuthenticatedGetRequest(`${entityPrefix}${localesEndpoint}`)
export const updateGenericKeys = (genericKeys, locale) => sendAuthenticatedPostRequest(`${entityPrefix}${localesEndpoint}/${locale}/generic-keys`, genericKeys)

// AnswerDiagnosisDetails

export const createAnswerDiagnosisDetail = (payload) => sendAuthenticatedPostRequest(`${entityPrefix}${answerDiagnosisDetailsEndpoint}`, payload)
export const getAnswerDiagnosisDetails = () => sendAuthenticatedGetRequest(`${entityPrefix}${answerDiagnosisDetailsEndpoint}`)
export const deleteAnswerDiagnosisDetail = (answerDiagnosisDetailId) => sendAuthenticatedDeleteRequest(`${entityPrefix}${answerDiagnosisDetailsEndpoint}/${answerDiagnosisDetailId}`)

// Available throughout the client //
export const getRecommenderProfile = (locale) => sendGetRequest(
  `${recommenderProfileEndpoint}${locale ? `?locale=${locale}` : ''}`,
)

export const setUserProfile = (userId, answerId, value) => sendPostRequest(`${userProfilesEndpoint}/${userId}`, {
  answerId,
  value,
})

export const setSelectedUserCategory = (userId, categoryId) => sendPostRequest(`${userProfilesEndpoint}/${userId}/categories/${categoryId}`)

export const getUserProfileSummary = (userId) => sendGetRequest(`${userProfilesEndpoint}/${userId}/summary`)

export const getUserProfileRecommendations = (userId) => sendGetRequest(`${userProfilesEndpoint}/${userId}/recommendations`)

export const getPrivacyPolicy = (locale) => sendGetRequestRetrievingHtml(`${legalEndpoint}/privacy-policy${locale ? `?locale=${locale}` : ''}`)

export const getLegalNotice = (locale) => sendGetRequestRetrievingHtml(`${legalEndpoint}/legal-notice${locale ? `?locale=${locale}` : ''}`)

export const getBlogPage = () => sendGetRequestRetrievingHtml(`${blogPageEndpoint}/blogpage`)