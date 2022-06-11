import styled from 'styled-components'
import {ButtonThemes} from '../Theme/interface'


const Button = styled.button<{theme: ButtonThemes}>`
  width: 200px;
  height: 50px;
  font-size: 20px;
  border-width: 5px;
  border-style: solid;
  border-radius: 8px;
  color: ${({theme}) => theme.color};
};
  background-color: ${({theme}) => theme.bg};
  border-color: ${({theme}) => theme.border};
  &:hover {
    color: ${({theme}) => theme.colorHover};
    background-color: ${({theme}) => theme.bgHover};
    border-color: ${({theme}) => theme.borderHover};
  }
`

const PrimaryButton = styled(Button).attrs(({theme}) => ({
  theme: theme.button.primary
}))``
const SecondaryButton = styled(Button).attrs(({theme}) => ({
  theme: theme.button.secondary
}))``

export { PrimaryButton, SecondaryButton }