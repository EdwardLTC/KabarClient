import { Block, Text, Image } from '@components/base'
import React, { FC } from 'react'
import { useTheme } from '@themes'
import { TouchableOpacity } from 'react-native'
import { Article } from '@reduxs/types'
import { formatDate } from '@utils/helper'

type ArticleComponentProps = {
  article?: Article
  onPressTrending?: () => void
}

export const DynamicArticle: FC<ArticleComponentProps> = (props) => {
  const { colors } = useTheme()
  const { article, onPressTrending } = props

  const _renderMenuTools = () => {
    return (
      <Block row space="between" marginBottom={16}>
        <Text color={colors.black} size={16} fontWeight={'600'} lineHeight={24}>
          Trending
        </Text>
        <TouchableOpacity onPress={onPressTrending}>
          <Text
            color={colors.secondaryText}
            size={14}
            fontWeight="400"
            lineHeight={21}
          >
            See all
          </Text>
        </TouchableOpacity>
      </Block>
    )
  }

  return (
    <Block marginBottom={24} width={'100%'} flex radius={6}>
      {_renderMenuTools()}
      <Image
        resizeMode="cover"
        height={183}
        width={'100%'}
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
            source={{ uri: article?.createdBy.avatar }}
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
            {article?.createdBy.name || 'Anonymous'}
          </Text>
          <Text
            marginLeft={20}
            fontWeight="600"
            color={colors.secondaryText}
            size={13}
            lineHeight={20}
          >
            {formatDate(article?.createdAt)}
          </Text>
        </Block>
      </Block>
    </Block>
  )
}
