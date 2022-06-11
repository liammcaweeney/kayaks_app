import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { flexbox, space, compose , FlexboxProps,
  SpaceProps } from 'styled-system'

type IFlexBox = HTMLAttributes<HTMLDivElement> &
  FlexboxProps &
  SpaceProps


/**
 * FlexBox Component
 * Default flex-direction is column and can accept multiple useful parameters
 */
const FlexBox = styled.div<IFlexBox>`
  display: flex;
  flex-direction: column;
  ${compose(flexbox, space)}
`

export default FlexBox
