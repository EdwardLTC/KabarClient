import { BackArrowIcon, ToolsIcon } from '@assets'
import { Block, Text } from '@components/base'
import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'

type HeaderProps = {
  onBackPress?: () => void
  onToolsPress?: () => void
  title?: string
}
export const HeaderTools: FC<HeaderProps> = (props) => {
  const { onBackPress, onToolsPress, title } = props
  return (
    <Block row space="between">
      <TouchableOpacity onPress={onBackPress}>
        <BackArrowIcon></BackArrowIcon>
      </TouchableOpacity>
      <Text fontWeight="400" size={14} lineHeight={24}>
        {title}
      </Text>
      <TouchableOpacity onPress={onToolsPress}>
        <ToolsIcon></ToolsIcon>
      </TouchableOpacity>
    </Block>
  )
}
