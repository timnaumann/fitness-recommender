import React from 'react'
import { useLoading } from '@store/app-specific/LoadingContext'
import LoadingAnimation from '@ui-components/Loading/LoadingAnimation'

export const LoadingAnimationContainer = () => {
  const [{ isLoading },] = useLoading()
  return isLoading ? (<LoadingAnimation/>) : null
}
