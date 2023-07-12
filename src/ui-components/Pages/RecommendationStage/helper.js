export const getThumbnailUrlOfYoutubeVideo = (videoURL) => {
  if (!videoURL) {
    // eslint-disable-next-line no-console
    console.warn('videoUrl should not be null')
    return null
  }

  if (!videoURL.includes('youtube.com')) {
    // eslint-disable-next-line no-console
    console.error(
      `The given url ${videoURL} is not a youtube url, so no thumbnail can be found`,
    )
    return null
  }

  const youtubeVideoId = videoURL
    .match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)
    .pop()
  return `https://img.youtube.com/vi/${youtubeVideoId}/sddefault.jpg`
}

export const throttle = (func, delay) => {
  let inProgress = false
  return (...args) => {
    if (inProgress) {
      return
    }
    inProgress = true
    setTimeout(() => {
      func(...args)
      inProgress = false
    }, delay)
  }
}
