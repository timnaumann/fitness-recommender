import React, { useCallback } from 'react'

import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import Logo from '@ui-components/Basics/Logo'
import { PATHS } from '../../../routes'
import { useLoading } from '@store/app-specific/LoadingContext'
import { startPageChangeAnimation } from '@container-components/container-helper'

import * as S from './StageHeading.style'

const StageHeading = (props) => {
  const [, dispatch] = useLoading()
  const history = useHistory()

  const onClick = useCallback(() => {
    startPageChangeAnimation(dispatch, StageHeading.displayName)
    history.push(PATHS.START_PAGE)
  }, [history])

  return (
    <S.StageHeading className={props.className}>
      <S.StageHeadingContent>

        <S.LogoWrapper onClick={onClick}>
          <S.LogoContent>
            <S.LogoBackground/>
            <S.Logo
              as={Logo}
            />
          </S.LogoContent>
        </S.LogoWrapper>

        {
          props.heading && (
            <S.HeadingWrapper>
              <S.HeadingContent>
                <S.HeadingBackground/>
                <S.Heading>{props.heading}</S.Heading>
              </S.HeadingContent>
            </S.HeadingWrapper>
          )
        }

      </S.StageHeadingContent>
    </S.StageHeading>
  )
}

StageHeading.displayName = 'StageHeading'

StageHeading.propTypes = {
  heading: PropTypes.string,
  className: PropTypes.string,
}

StageHeading.defaultProps = {
  heading: '',
  className: '',
}

export default StageHeading
