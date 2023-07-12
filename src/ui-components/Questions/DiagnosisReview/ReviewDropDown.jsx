import React, { useCallback, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import * as S from './ReviewDropDown.style'
import { Dropdown } from 'react-bootstrap'
import { Arrow } from '@ui-components/Basics'
import { ThemeContext } from 'styled-components'

const ReviewDropDown = React.memo((props) => {
    const [selectedItem, setSelectedItem] = useState(null)

    useEffect(() => {
        setSelectedItem(props.items.find(i => i.id === props.selectedAnswerId))
    }, [props.selectedAnswerId])

    const onUserSelection = useCallback((itemId) => {
        props.onSelect(parseInt(itemId))
    }, [props])

    return (
        <S.ReviewDropDown>
            <Dropdown onSelect={onUserSelection}>
                <Dropdown.Toggle as={CustomToggle}>
                    {selectedItem ? selectedItem.label : props.fallbackLabel}
                </Dropdown.Toggle>

                <S.CustomDropDownMenu as={Dropdown.Menu}>
                    <S.CustomDropDownBackground/>
                    {
                        props.items.map(i =>
                            <S.CustomDropDownItem
                                as={Dropdown.Item}
                                key={i.id}
                                eventKey={i.id}
                            >
                                {i.label}
                            </S.CustomDropDownItem>
                        )
                    }
                </S.CustomDropDownMenu>
            </Dropdown>
        </S.ReviewDropDown>
    )
})

const CustomToggle = React.forwardRef(({
                                           children,
                                           onClick
                                       }, ref) => {
    const themeContext = useContext(ThemeContext)
    return (
        <S.CustomToggle
            ref={ref}
            onClick={(e) => {
                e.preventDefault()
                onClick(e)
            }}
        >
            {children}
            <S.ToggleArrow as={Arrow} size="17px" color={themeContext.colors.turquoise}/>
        </S.CustomToggle>
    )
})

ReviewDropDown.propTypes = {
    selectedAnswerId: PropTypes.number,
    onSelect: PropTypes.func,
    fallbackLabel: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        label: PropTypes.string,
    })),
}

ReviewDropDown.defaultProps = {
    selectedAnswerId: null,
    onSelect: null,
    fallbackLabel: null,
    items: []
}

export default ReviewDropDown
