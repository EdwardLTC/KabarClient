import { ArticleComponentBig, Container, HeaderTools } from '@components'
import React from 'react'
import { makeStyles } from '@themes'
import { goBack, navigate } from '@navigation/NavigationServices'
import { ListArticles } from '@reduxs'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { routes } from '@navigation'
import { useAppSelector } from '@hooks'
import { Article } from '@reduxs/types'

export const Trending = () => {
  const styles = useStyles()
  const listArticles: Article[] = useAppSelector(ListArticles)

  const navigateToArticleDetail = (idArticle: string) => {
    navigate(routes.articleDetail, { id: idArticle }, 'ArticleDetail')
  }

  return (
    <Container style={styles.root}>
      <HeaderTools onBackPress={goBack} title="Trending"></HeaderTools>
      <FlatList
        style={{ marginTop: 24 }}
        data={listArticles}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              key={item._id}
              onPress={() => {
                navigateToArticleDetail(item._id)
              }}
            >
              <ArticleComponentBig article={item}></ArticleComponentBig>
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
