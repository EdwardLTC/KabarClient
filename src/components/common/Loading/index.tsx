import { Block, Text } from '@components'
import { useAppSelector } from '@hooks/useRedux'
import { enableLoading } from '@reduxs/selectors'
import { normalize, useTheme } from '@themes'
import { heightScreen, widthScreen } from '@utils/helper'
import AnimatedLottieView from 'lottie-react-native'
import React from 'react'

export const Loading = () => {
  const isShow = useAppSelector(enableLoading)

  if (!isShow) {
    return <Block />
  }

  return (
    <Block
      absolute
      zIndex={9999}
      flex
      width={widthScreen}
      height={heightScreen}
      justifyCenter
      alignCenter
    >
      <AnimatedLottieView
        source={require('./Paperplane.json')}
        autoPlay
        loop
        style={{ width: normalize.h(150), height: normalize.v(150) }}
      />
      <Text size={12}>Đang xử lý...</Text>
    </Block>
  )
}
