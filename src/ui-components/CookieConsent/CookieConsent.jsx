import React from 'react'
import * as S from './CookieConsent.style'
import { StandardButton } from '@ui-components/Buttons'
import { useI18n } from '@store/store-hooks'
import PropTypes from 'prop-types'

const CookieConsent = (props) => {
  const i18n = useI18n()
  const cookieI18n = i18n?.generic?.cookieConsent || {}

  return (
    <S.CookieConsent>
      <S.Background/>
      <S.TextWrapper>
        <S.Heading>{cookieI18n.heading}</S.Heading>
        <S.Explanation>{cookieI18n.explanation}</S.Explanation>
      </S.TextWrapper>

      <S.ButtonWrapper>
        <S.AcceptAllButton
          onClick={props.onAcceptAll}
          as={StandardButton}
          label={cookieI18n.accept}
        >
          {cookieI18n.accept}
        </S.AcceptAllButton>

        <S.DeclineWrapper>
          <S.DenyButton
            as={StandardButton}
            label={cookieI18n.deny}
            onClick={props.onDeny}
          >
            {cookieI18n.deny}
          </S.DenyButton>
          <S.AdjustButton
            as={StandardButton}
            label={cookieI18n.adjust}
            onClick={props.onAdjust}
          >

            {cookieI18n.adjust}

          </S.AdjustButton>
        </S.DeclineWrapper>
      </S.ButtonWrapper>

    </S.CookieConsent>
  )
}

CookieConsent.propTypes = {
  onAcceptAll: PropTypes.func,
  onDeny: PropTypes.func,
  onAdjust: PropTypes.func,
}

CookieConsent.defaultProps = {
  onAcceptAll: () => {},
  onDeny: () => {},
  onAdjust: () => {}
}

export default CookieConsent
