import {
  GOOGLE_ANALYTICS_CUSTOM_EVENTS,
  GOOGLE_ANALYTICS_PREDEFINED_EVENTS
} from '@ga-tracking/googleanalytics-events'

const GOOGLE_ANALYTICS_MEASUREMENT_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_MEASUREMENT_ID

export const initialiseGA = (trackingEnabled, userId) => {
  window[`ga-disable-${GOOGLE_ANALYTICS_MEASUREMENT_ID}`] = !trackingEnabled
  gtag('config', GOOGLE_ANALYTICS_MEASUREMENT_ID, {
    user_id: userId
  })
  gtag('set', 'user_properties', { 'crm_id': userId })
}

export const trackSelectedCategory = (categoryName) => {
  gtag('event', GOOGLE_ANALYTICS_PREDEFINED_EVENTS.JOIN_GROUP, {
    group_id: categoryName
  })
}

export const trackTeaserClick = () => {
  gtag('event', GOOGLE_ANALYTICS_PREDEFINED_EVENTS.SELECT_CONTENT, {
    item_id: 'teaser'
  })
}

export const trackAnswerSelection = (questionName, answerName, label, value) => {
  gtag('event', GOOGLE_ANALYTICS_CUSTOM_EVENTS.ANSWER_SELECTION, {
    questionName,
    answerName,
    label,
    value
  })
}

export const trackVideoInView = (recommendationId, videoURL, position) => {
  gtag('event', GOOGLE_ANALYTICS_CUSTOM_EVENTS.VIDEO, {
    interaction: 'shownInViewport',
    recommendationId,
    videoURL,
    position
  })
}

export const trackVideoPlayed = (videoURL, additionalProps) => {
  gtag('event', GOOGLE_ANALYTICS_CUSTOM_EVENTS.VIDEO, {
    interaction: 'played',
    videoURL,
    ...additionalProps
  })
}
