import 'styled-components';
import { ButtonThemes } from './Theme/interface'

export interface Theme {
  button: {
    primary: ButtonThemes
    secondary: ButtonThemes
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}