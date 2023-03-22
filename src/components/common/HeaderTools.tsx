import { BackArrowIcon, ToolsIcon } from '@assets'
import { Block, Text } from '@components/base'
import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'

type HeaderProps = {
  disabledLeftIcon?: boolean
  disabledRightIcon?: boolean
  renderRightIcon?: React.ReactNode
  onBackPress?: () => void
  onToolsPress?: () => void
  title?: string
}
export const HeaderTools: FC<HeaderProps> = (props) => {
  const {
    onBackPress,
    onToolsPress,
    title,
    disabledLeftIcon,
    renderRightIcon,
    disabledRightIcon,
  } = props
  return (
    <Block row space="between" paddingHorizontal={4}>
      <TouchableOpacity onPress={onBackPress}>
        {disabledLeftIcon ? null : <BackArrowIcon></BackArrowIcon>}
      </TouchableOpacity>
      <Text fontWeight="600" size={16} lineHeight={24} fontFamily="regular">
        {title}
      </Text>
      <TouchableOpacity onPress={onToolsPress}>
        {disabledRightIcon ? null : renderRightIcon ? (
          renderRightIcon
        ) : (
          <ToolsIcon></ToolsIcon>
        )}
      </TouchableOpacity>
    </Block>
  )
}
