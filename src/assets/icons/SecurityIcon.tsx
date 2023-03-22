import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

export const SecurityIcon = (props: SvgProps) => (
  <Svg width="18" height="21" viewBox="0 0 18 21" fill="none" {...props}>
    <Path
      d="M3 7V6C3 4.4087 3.63214 2.88258 4.75736 1.75736C5.88258 0.632141 7.4087 0 9 0C10.5913 0 12.1174 0.632141 13.2426 1.75736C14.3679 2.88258 15 4.4087 15 6V7H17C17.2652 7 17.5196 7.10536 17.7071 7.29289C17.8946 7.48043 18 7.73478 18 8V20C18 20.2652 17.8946 20.5196 17.7071 20.7071C17.5196 20.8946 17.2652 21 17 21H1C0.734784 21 0.48043 20.8946 0.292893 20.7071C0.105357 20.5196 0 20.2652 0 20V8C0 7.73478 0.105357 7.48043 0.292893 7.29289C0.48043 7.10536 0.734784 7 1 7H3ZM16 9H2V19H16V9ZM8 14.732C7.61872 14.5119 7.32072 14.1721 7.15224 13.7653C6.98376 13.3586 6.9542 12.9076 7.06815 12.4823C7.1821 12.057 7.43319 11.6813 7.78248 11.4132C8.13177 11.1452 8.55973 10.9999 9 10.9999C9.44027 10.9999 9.86823 11.1452 10.2175 11.4132C10.5668 11.6813 10.8179 12.057 10.9319 12.4823C11.0458 12.9076 11.0162 13.3586 10.8478 13.7653C10.6793 14.1721 10.3813 14.5119 10 14.732V17H8V14.732ZM5 7H13V6C13 4.93913 12.5786 3.92172 11.8284 3.17157C11.0783 2.42143 10.0609 2 9 2C7.93913 2 6.92172 2.42143 6.17157 3.17157C5.42143 3.92172 5 4.93913 5 6V7Z"
      fill="#050505"
    />
  </Svg>
)
