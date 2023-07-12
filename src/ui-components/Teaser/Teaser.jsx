import React from 'react'
import PropTypes from 'prop-types'
import * as S from './Teaser.style'

const Teaser = (props) => (
    <S.Teaser>
        <S.TeaserBackground/>
        <S.TeaserSubHeadingLabel>{props.subheading}</S.TeaserSubHeadingLabel>
        <S.TeaserHeadingLabel>{props.heading}</S.TeaserHeadingLabel>
        <S.TeaserStartButton onClick={props.onClick} label={props.buttonLabel}/>
        <S.SeoTag href={props.nextPhase}/>
    </S.Teaser>
)

Teaser.propTypes = {
    onClick: PropTypes.func,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    buttonLabel: PropTypes.string,
    nextPhase: PropTypes.string,
}

Teaser.defaultProps = {
    onClick: null,
    heading: '',
    subheading: '',
    buttonLabel: '',
    nextPhase: ''
}

export default Teaser
