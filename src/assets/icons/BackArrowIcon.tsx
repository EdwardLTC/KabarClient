import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'


export const BackArrowIcon = (props: SvgProps) => (
  <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M3.828 7.00017H16V9.00017H3.828L9.192 14.3642L7.778 15.7782L0 8.00017L7.778 0.222168L9.192 1.63617L3.828 7.00017Z"
      fill="#4E4B66"
    />
  </Svg>
)
