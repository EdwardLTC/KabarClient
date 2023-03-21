export const colors = {
  dark: {
    //default don't delete
    primaryText: '#000000',
    secondaryText: '#898989',
    error: '#f02849',
    inputBG: '#edf4f4',
    primary: '#1877f2',
    focus: '#1850f2',
    background: '#FFFFFF',
    border: '#e4e6eb',
    white: '#FFFFFF',
    disabled: '#a2ccf2',
    oceanBlue: '#0077b6',
    veryLightPink: '#bcbcbc',
    lightBlue: '#96d3f2',
    trackColor: '#96d3f2',
    placeholder: '#bcbcbc',
    blue: '#1877F2',
    // add color below....
    // bottom menu
    bottomMenu: '#f4f5f2',
    transparent: 'rgba(0, 0, 0, 0.4)',
  },
  light: {
    //default don't delete
    primaryText: '#000000',
    secondaryText: '#4E4B66',
    error: '#f02849',
    inputBG: '#edf4f4',
    primary: '#1877f2',
    focus: '#1850f2',
    background: '#FFFFFF',
    border: '#e4e6eb',
    white: '#FFFFFF',
    disabled: '#a2ccf2',
    oceanBlue: '#0077b6',
    veryLightPink: '#bcbcbc',
    lightBlue: '#96d3f2',
    trackColor: '#96d3f2',
    placeholder: '#bcbcbc',
    black: '#000000',
    blue: '#1877F2',
    // add color below...
    // bottom menu
    bottomMenu: '#f4f5f2',
    transparent: 'rgba(0, 0, 0, 0.4)',
  },
}

export type Color =
  | 'primaryText'
  | 'secondaryText'
  | 'error'
  | 'inputBG'
  | 'primary'
  | 'focus'
  | 'background'
  | 'border'
  | 'white'
  | 'disabled'
  | 'oceanBlue'
  | 'veryLightPink'
  | 'lightBlue'
  | 'trackColor'
  | 'placeholder'
  | 'black'
  | 'blue'
  | 'bottomMenu'
  | 'transparent'

export type ThemeColor = typeof colors
