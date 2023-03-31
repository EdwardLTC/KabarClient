import { Block, Text, Image } from '@components/base'
import React, { FC } from 'react'
import { useTheme } from '@themes'
import { Article } from '@utils/types'
import { images } from '@assets'

type ArticleComponentProps = {
  article?: Article
}

export const ArticleComponentBig: FC<ArticleComponentProps> = (props) => {
  const { colors } = useTheme()
  const { article } = props

  return (
    <Block marginBottom={16} justifyCenter>
      <Image
        resizeMode="cover"
        radius={6}
        width={'100%'}
        height={183}
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
