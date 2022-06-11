import styled from 'styled-components'
import { color, space, typography, flexbox, compose } from 'styled-system'
import { FlexProps, SpaceProps, TypographyProps } from 'styled-system'

type ITypography = TypographyProps & SpaceProps & FlexProps

/**
 * Typography component
 */
const Typography = styled.div<ITypography>`
  line-height: normal;
  ${compose(typography, color, space, flexbox)}
`

export default Typography
