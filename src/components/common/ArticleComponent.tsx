import { Block, Text, Image } from '@components/base'
import React, { FC } from 'react'
import { images } from '@assets'
import { useTheme } from '@themes'
import { Article } from '@utils/types'

type ArticleComponentProps = {
  article?: Article
}

export const ArticleComponent: FC<ArticleComponentProps> = (props) => {
  const { colors } = useTheme()
  const { article } = props
  return (
    <Block row padding={8} marginBottom={16}>
      <Image
        resizeMode="cover"
        source={{ uri: article?.image }}
        width={96}
        height={96}
        radius={6}
      ></Image>
      <Block marginLeft={4} flex>
        <Text
          fontWeight="400"
          size={13}
          lineHeight={20}
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
          numberOfLines={2}
        >
          {article?.title}
        </Text>
        <Block row>
          <Image
            source={images.placeholder}
            width={20}
            height={20}
            radius={10}
          ></Image>
          <Text
            marginLeft={4}
            fontWeight="600"
            color={colors.secondaryText}
            size={13}
            lineHeight={20}
          >
            BBC News
          </Text>
        </Block>
      </Block>
    </Block>
  )
}
