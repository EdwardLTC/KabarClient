import { ArticleComponent, Container, Text } from '@components'
import { routes } from '@navigation'
import { navigate } from '@navigation/NavigationServices'
import { ArticleList } from '@reduxs'
import { makeStyles, useTheme } from '@themes'
import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'

export const Bookmark = () => {
  const { colors } = useTheme()
  const styles = useStyles()

  const navigateToArticleDetail = () => {
    navigate(routes.articleDetail)
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
        data={ArticleList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={navigateToArticleDetail}>
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
