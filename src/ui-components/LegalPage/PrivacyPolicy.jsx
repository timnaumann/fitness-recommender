import React, { useEffect, useState } from 'react'
import { getPrivacyPolicy } from '@api/api-service'
import { useI18n } from '@store/store-hooks'
import ArbitraryLegalPage from '@ui-components/LegalPage/ArbitraryLegalPage'

const PrivacyPolicy = () => {
  const i18n = useI18n()
  const [content, setContent] = useState(null)

  useEffect(() => {
    // TODO add locale handling
    const getPrivacyPolicyFromApi = async () => {
      const content = await getPrivacyPolicy()
      setContent(content)
    }
    getPrivacyPolicyFromApi()
  }, [])

  return <ArbitraryLegalPage content={content} heading={i18n?.generic?.privacyPolicyHeading}/>
}

export default PrivacyPolicy
