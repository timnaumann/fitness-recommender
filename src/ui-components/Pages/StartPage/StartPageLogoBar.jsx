import React from 'react'
import * as S from './StartpageLogoBar.style'
import Logo from '@ui-components/Basics/Logo'

export const StartPageLogoBar = () => (
  <S.StartPageLogoBar>
    <S.Wrapper>
      <S.Background/>
      <S.LogoWrapper>
        <S.Logo as={Logo}/>
      </S.LogoWrapper>
    </S.Wrapper>
  </S.StartPageLogoBar>
)
export default StartPageLogoBar
