import { Block, Container, HeaderTools, Image, Button, Text } from '@components'
import { useTheme, makeStyles } from '@themes'
import React, { useEffect } from 'react'
import { goBack } from '@navigation/NavigationServices'
import { images } from '@assets'
import { ScrollView } from 'react-native-gesture-handler'
import { useLazyGetArticleDetailQuery } from '@reduxs/api/articlesService'
import { Route } from 'react-native'
import { Article } from '@reduxs/types'
import { formatDate } from '@utils/helper'

export const ArticleDetail = (props: Route) => {
  const { colors } = useTheme()
  const styles = useStyles()
  const [article, setArticle] = React.useState<Article>()
  const [getDetailsArticle] = useLazyGetArticleDetailQuery()
  const { id } = props.route.params

  const fetchData = async () => {
    const res = await getDetailsArticle(id)
    setArticle(res.data)
  }

  useEffect(() => {
    fetchData()
  }, [id])

  const _renderHeader = () => {
    return (
      <Block row space="between" marginTop={20} alignCenter>
        <Block row>
          <Image
            source={images.placeholder}
            width={50}
            height={50}
            radius={25}
          ></Image>
          <Block marginLeft={4}>
            <Text
              fontWeight="600"
              size={16}
              color={colors.black}
              lineHeight={24}
            >
              {article?.createdBy.name || 'Anonymous'}
            </Text>
            <Text fontWeight="400" size={14} color={colors.secondaryText}>
              {formatDate(article?.createdAt)}
            </Text>
          </Block>
        </Block>
        <Button
          width={105}
          height={44}
          backgroundColor={colors.blue}
          radius={6}
          title="Following"
          titleProps={{
            color: colors.white,
            size: 16,
            fontWeight: '600',
          }}
        ></Button>
      </Block>
    )
  }

  const _renderImage = () => {
    return (
      <Block marginTop={19}>
        <Image source={{ uri: article?.image }} height={248} radius={6}></Image>
      </Block>
    )
  }

  const _renderDetail = () => {
    return (
      <Block marginTop={16}>
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
          size={24}
          lineHeight={24}
          color={colors.black}
        >
          {article?.title}
        </Text>

        <Text marginTop={16}>{article?.content}</Text>
      </Block>
    )
  }

  return (
    <Container style={styles.root}>
      <ScrollView>
        <HeaderTools onBackPress={goBack}></HeaderTools>
        {_renderHeader()}
        <ScrollView showsVerticalScrollIndicator={false}>
          {_renderImage()}
          {_renderDetail()}
        </ScrollView>
      </ScrollView>
    </Container>
  )
}

const useStyles = makeStyles<{}>()(({}) => ({
  root: () => ({
    flex: 1,
    padding: 25,
  }),
}))
