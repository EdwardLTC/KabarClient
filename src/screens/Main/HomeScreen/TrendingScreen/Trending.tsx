import { ArticleComponentBig, Container, HeaderTools } from '@components'
import React from 'react'
import { makeStyles } from '@themes'
import { goBack, navigate } from '@navigation/NavigationServices'
import { ArticleList } from '@reduxs'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { routes } from '@navigation'

export const Trending = () => {
  const styles = useStyles()

  const navigateToArticleDetail = () => {
    navigate(routes.articleDetail)
  }

  return (
    <Container style={styles.root}>
      <HeaderTools onBackPress={goBack} title="Trending"></HeaderTools>
      <FlatList
        style={{ marginTop: 24 }}
        data={ArticleList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={navigateToArticleDetail}>
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
