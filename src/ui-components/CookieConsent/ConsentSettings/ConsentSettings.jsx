import React, { useCallback, useContext, useState } from 'react'
import * as S from './ConsentSettings.style'
import SettingBar from '@ui-components/CookieConsent/ConsentSettings/SettingBar/SettingBar'
import { AcceptAllButton, DenyButton } from '@ui-components/CookieConsent/CookieConsent.style'
import { StandardButton } from '@ui-components/Buttons'
import { useI18n } from '@store/store-hooks'
import { CookiesContext } from '@store/cookies'
import CookieActions from '@store/cookies/CookieActions'

const ConsentSettings = (props) => {
  const [, dispatchCookieAction] = useContext(CookiesContext)
  const i18n = useI18n()

  const cookieI18n = i18n?.generic?.cookieConsent

  const [cookieState] = useState([])

  const handleCookieAdjustment = useCallback(() => {
    props.onStore(cookieState)
  }, [props, cookieState])

  const onClose = useCallback(() => {
    dispatchCookieAction(CookieActions.createSetConsentSettingsToOpenAction(false))
    handleCookieAdjustment()
  }, [dispatchCookieAction, handleCookieAdjustment])

  return (
    <S.ConsentSettings>
      <S.ModalBackground/>
      <S.ModalContent>
        <S.Header>
          <S.Heading>{cookieI18n.cookieSetting}</S.Heading>
          <S.CloseButton onClick={onClose}>X</S.CloseButton>
        </S.Header>
        {props.cookieSettings.map(cookie => {
          return (
            <SettingBar
              key={cookie.cookieName}
              heading={cookie.heading}
              disabled={cookie.hasOwnProperty('selectable') && !cookie.selectable}
              description={cookie.description}
              currentValue={props.cookieSettings.find(c => c.cookieName === cookie.cookieName)?.value}
              onClick={() => props.onCookieSelection(cookie.cookieName)}
            />
          )

        })}
        <AcceptAllButton
          onClick={props.onAcceptAll}
          as={StandardButton}
          label={cookieI18n.accept}
        >{cookieI18n.accept}</AcceptAllButton>
        <S.StoreButton
          as={StandardButton}
          label={cookieI18n.store}
          onClick={handleCookieAdjustment}
        >
          {cookieI18n.store}
        </S.StoreButton>
        <DenyButton
          as={StandardButton}
          label={cookieI18n.deny}
          onClick={props.onDenyAll}
        >
          {cookieI18n.deny}
        </DenyButton>

      </S.ModalContent>

    </S.ConsentSettings>
  )
}

export default ConsentSettings
