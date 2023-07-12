import React from 'react'
import PropTypes from 'prop-types'
import * as S from './NoRecommendations.style'
import { useI18n } from "@store/store-hooks";
import { useHistory } from "react-router-dom";
import { PATHS } from "../../../routes";
import { startPageChangeAnimation } from "@container-components/container-helper";
import { useLoading } from "@store/app-specific/LoadingContext";

const NoRecommendations = () => {
    const [, dispatch] = useLoading()
    const i18n = useI18n()
    const history = useHistory()

    const backButtonLabel = i18n?.generic?.recommendationBackButton
    const heading = i18n?.generic?.noRecommendationsHeading

    const onClick = () => {
        startPageChangeAnimation(dispatch, NoRecommendations.displayName)
        history.push(PATHS.STAGES)
    }

    return (
        <S.NoRecommendations>
            <S.Heading>{heading}</S.Heading>
            <S.BackButton onClick={onClick} label={backButtonLabel}/>
        </S.NoRecommendations>
    )
}

NoRecommendations.displayName = 'NoRecommendations'

NoRecommendations.propTypes = {
    heading: PropTypes.string,
    recommendations: PropTypes.arrayOf(PropTypes.object),
}

NoRecommendations.defaultProps = {
    heading: '',
    recommendations: [],
}

export default NoRecommendations
