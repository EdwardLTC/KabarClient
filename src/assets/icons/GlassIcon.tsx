import React, { FC } from 'react'

import Svg, { SvgProps, Path } from 'react-native-svg'

export const GlassIcon: FC<SvgProps> = (props) => {
  return (
    <Svg width="21" height="21" viewBox="0 0 21 21" fill="none" {...props}>
      <Path
        d="M9 0C13.968 0 18 4.032 18 9C18 13.968 13.968 18 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0ZM9 16C12.867 16 16 12.867 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16ZM17.485 16.071L20.314 18.899L18.899 20.314L16.071 17.485L17.485 16.071Z"
        fill="#4E4B66"
      />
    </Svg>
  )
}
