import { ArticleComponent, Container, Text } from '@components'
import { useAppSelector } from '@hooks'
import { routes } from '@navigation'
import { navigate } from '@navigation/NavigationServices'
import { ListArticles } from '@reduxs'
import { makeStyles, useTheme } from '@themes'
import { Article } from '@utils/types'
import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'

export const Bookmark = () => {
  const { colors } = useTheme()
  const styles = useStyles()
  const listArticles: Article[] = useAppSelector(ListArticles)
  const navigateToArticleDetail = (idArticle: string) => {
    navigate(routes.articleDetail, { id: idArticle }, 'ArticleDetail')
  }

  return (
    <Container style={styles.root}>
      <Text
        fontWeight="700"
        size={32}
        lineHeight={48}
        color={colors.black}
        marginBottom={16}
      >
        Bookmark
      </Text>
      <FlatList
        data={listArticles}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigateToArticleDetail(item._id)
              }}
            >
              <ArticleComponent article={item}></ArticleComponent>
            </TouchableOpacity>
          )
        }}
      ></FlatList>
    </Container>
  )
}

const useStyles = makeStyles<{}>()(({}) => ({
  root: () => ({
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 25,
  }),
}))
