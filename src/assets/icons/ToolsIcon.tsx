import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

export const ToolsIcon = (props: SvgProps) => (
  <Svg width="4" height="18" viewBox="0 0 4 18" fill="none" {...props}>
    <Path
      d="M2 0C1.175 0 0.5 0.675 0.5 1.5C0.5 2.325 1.175 3 2 3C2.825 3 3.5 2.325 3.5 1.5C3.5 0.675 2.825 0 2 0ZM2 15C1.175 15 0.5 15.675 0.5 16.5C0.5 17.325 1.175 18 2 18C2.825 18 3.5 17.325 3.5 16.5C3.5 15.675 2.825 15 2 15ZM2 7.5C1.175 7.5 0.5 8.175 0.5 9C0.5 9.825 1.175 10.5 2 10.5C2.825 10.5 3.5 9.825 3.5 9C3.5 8.175 2.825 7.5 2 7.5Z"
      fill="#4E4B66"
    />
  </Svg>
)
