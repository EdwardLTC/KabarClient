import { Block, Text, Image } from '@components/base'
import React, { FC } from 'react'
import { useTheme } from '@themes'
import { Topic } from '@utils/types'

type ArticleComponentProps = {
  topic?: Topic
}

export const TopicComponent: FC<ArticleComponentProps> = (props) => {
  const { colors } = useTheme()
  const { topic } = props
  return (
    <Block row paddingVertical={2} marginBottom={16}>
      <Image
        source={{ uri: topic?.image }}
        width={70}
        height={70}
        radius={6}
      ></Image>
      <Block marginLeft={8} flex>
        <Text fontWeight="400" size={16} lineHeight={24} color={colors.black}>
          {topic?.title}
        </Text>
        <Text
          fontWeight="400"
          size={14}
          lineHeight={21}
          color={colors.secondaryText}
          marginTop={4}
          numberOfLines={2}
        >
          {topic?.content}
        </Text>
      </Block>
    </Block>
  )
}
