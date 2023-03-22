import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

export const LogoutIcon = (props: SvgProps) => (
  <Svg width="19" height="20" viewBox="0 0 19 20" fill="none" {...props}>
    <Path
      d="M1 20C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H15C15.2652 0 15.5196 0.105357 15.7071 0.292893C15.8946 0.48043 16 0.734784 16 1V4H14V2H2V18H14V16H16V19C16 19.2652 15.8946 19.5196 15.7071 19.7071C15.5196 19.8946 15.2652 20 15 20H1ZM14 14V11H7V9H14V6L19 10L14 14Z"
      fill="#050505"
    />
  </Svg>
)
