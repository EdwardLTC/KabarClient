import { Block, Text } from '@components/base'
import React, { FC } from 'react'
import { normalize, useTheme } from '@themes'
import { Article } from '@utils/types'
import { Animated, Image } from 'react-native'

type ArticleComponentProps = {
  article?: Article
  animHeaderValue?: any
}

const Header_Max_Height = normalize.v(260)
const Header_Min_Height = 0

export const DinamicArticle: FC<ArticleComponentProps> = (props) => {
  const { colors } = useTheme()
  const { article, animHeaderValue } = props

  const animateHeaderHeight = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp',
  })

  const _renderComponent = () => {
    return (
      <Block
        marginBottom={16}
        alignCenter
        justifyCenter
        width={'100%'}
        flex
        radius={6}
      >
        <Image
          style={{ width: '100%', height: '65%', borderRadius: 6 }}
          source={{ uri: article?.image }}
        ></Image>
        <Block>
          <Text
            marginTop={8}
            fontWeight="400"
            size={13}
            color={colors.secondaryText}
          >
            Europe
          </Text>
          <Text
            marginTop={4}
            fontWeight="400"
            size={16}
            lineHeight={24}
            color={colors.black}
            numberOfLines={1}
          >
            {article?.title}
          </Text>

          <Text
            fontWeight="600"
            color={colors.secondaryText}
            size={13}
            marginTop={4}
          >
            BBC News
          </Text>
        </Block>
      </Block>
    )
  }

  return (
    <Animated.View
      style={[
        {
          height: animateHeaderHeight,
        },
      ]}
    >
      {_renderComponent()}
    </Animated.View>
  )
}
