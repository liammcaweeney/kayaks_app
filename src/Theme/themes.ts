import { DefaultTheme } from 'styled-components'


const light: DefaultTheme = {
  button: {
    primary: {
      color: 'blue',
      colorHover: 'white',
      bg: 'white',
      bgHover: 'blue',
      border: 'white',
      borderHover: 'blue'
    },
    secondary: {
      color: 'red',
      colorHover: 'white',
      bg: 'white',
      bgHover: 'red',
      border: 'white',
      borderHover: 'red'
    }
  }
}

export {
  light,
}