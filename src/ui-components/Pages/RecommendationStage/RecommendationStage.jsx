import React, { useCallback, useEffect } from 'react'

import { Stage, StageHeading } from '@ui-components/Pages/QuestionsStage'
import PropTypes from 'prop-types'
import Carousel from '@ui-components/Basics/Carousel'
import * as S from './RecommendationStage.style'
import RecommendationItem from '@ui-components/Pages/RecommendationStage/RecommendationItem'
import { Footer } from '@ui-components/Footer'
import { trackVideoInView } from '@ga-tracking/googleanalytics-helper'
import NoRecommendations from "@ui-components/Pages/RecommendationStage/NoRecommendations";

const RecommendationStage = (props) => {
    const recommendationItems = props.recommendations.map((recommendation) =>
        <RecommendationComp key={recommendation.id} recommendation={recommendation}/>
    )

    useEffect(() => {
        const currentIndex = 0
        const recommendation = props.recommendations[currentIndex]
        recommendation && trackVideoInView(recommendation.id, recommendation.sourceUrl, currentIndex)
    }, [props.recommendations])

    const onSelectChange = useCallback((currentIndex) => {
        const recommendation = props.recommendations[currentIndex]
        trackVideoInView(recommendation.id, recommendation.sourceUrl, currentIndex)
    }, [props.recommendations])


    return (
        <S.RecommendationStage>
            <S.RecommendationStageHeading
                as={StageHeading}
                heading={props.heading}
            />
            {
                recommendationItems.length ? (
                        <>
                            <S.CarouselWrapper
                                as={Carousel}
                                showNavButtons={true}
                                onSelectChange={onSelectChange}
                            >
                                {recommendationItems}
                            </S.CarouselWrapper>

                            <S.RecommendationStageFooter
                                as={Footer}
                            />
                        </>
                    ) :
                    (
                        <NoRecommendations/>
                    )
            }

        </S.RecommendationStage>
    )
}

const RecommendationComp = React.memo(({
                                           recommendation,
                                           ...rest
                                       }) => (
    <Stage key={recommendation.id}>
        <RecommendationItem key={recommendation.id} recommendation={recommendation} {...rest}/>
    </Stage>
))

RecommendationStage.propTypes = {
    heading: PropTypes.string,
    recommendations: PropTypes.arrayOf(PropTypes.object),
}

RecommendationStage.defaultProps = {
    heading: '',
    recommendations: [],
}

export default RecommendationStage
