import {
  ArticleComponentBig,
  Container,
  Text,
  TopicComponent,
} from '@components'
import { ListArticles, TopicList } from '@reduxs'
import { useTheme, makeStyles } from '@themes'
import { Article, Topic } from '@utils/types'
import React from 'react'
import { SectionList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { navigate } from '@navigation/NavigationServices'
import { routes } from '@navigation'
import { useAppSelector } from '@hooks'

export const Explore = () => {
  const styles = useStyles()
  const { colors } = useTheme()

  const navigateToArticleDetail = (idArticle: string) => {
    navigate(routes.articleDetail, { id: idArticle }, 'ArticleDetail')
  }

  const listArticles: Article[] = useAppSelector(ListArticles)

  const data = [
    { title: 'Topic', data: TopicList, renderType: '0' },
    { title: 'Popular', data: listArticles, renderType: '1' },
  ]

  return (
    <Container style={styles.root}>
      <Text
        fontWeight="700"
        size={32}
        lineHeight={48}
        color={colors.black}
        marginBottom={16}
      >
        Explore
      </Text>
      <SectionList
        showsVerticalScrollIndicator={false}
        sections={data}
        keyExtractor={(item, index) => item._id + index}
        renderItem={({ item, section }) => {
          if (section.renderType === '0') {
            return <TopicComponent topic={item as Topic}></TopicComponent>
          } else {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigateToArticleDetail(item._id)
                }}
              >
                <ArticleComponentBig
                  article={item as Article}
                ></ArticleComponentBig>
              </TouchableOpacity>
            )
          }
        }}
        renderSectionHeader={({ section: { title } }) => (
          <Text fontWeight="700" size={16} lineHeight={22} marginBottom={16}>
            {title}
          </Text>
        )}
      ></SectionList>
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
