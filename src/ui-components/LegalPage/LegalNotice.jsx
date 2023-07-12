import React, { useEffect, useState } from 'react'
import { getLegalNotice } from '@api/api-service'
import { useI18n } from '@store/store-hooks'
import ArbitraryLegalPage from '@ui-components/LegalPage/ArbitraryLegalPage'

const LegalNotice = () => {
  const i18n = useI18n()
  const [content, setContent] = useState(null)

  useEffect(() => {
    // TODO add locale handling
    const getLegalNoticeFromApi = async () => {
      const content = await getLegalNotice()
      setContent(content)
    }
    getLegalNoticeFromApi()
  }, [])

  return <ArbitraryLegalPage content={content} heading={i18n?.generic?.legalNotice}/>
}

export default LegalNotice
