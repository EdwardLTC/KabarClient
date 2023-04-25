import {
  Block,
  Container,
  Text,
  ArticleComponent,
  DynamicArticle,
} from '@components'
import { useTheme, makeStyles, normalize } from '@themes'
import React, { useEffect, useRef, useState } from 'react'
import { GlassIcon, LogoIcon } from '@assets/icons'
import {
  TouchableOpacity,
  Animated,
  ScrollView,
  RefreshControl,
} from 'react-native'
import { navigate } from '@navigation/NavigationServices'
import { routes } from '@navigation'
import { ListArticles } from '@reduxs'
import { useLazyGetArticlesQuery } from '@reduxs/api/articlesService'
import { useAppSelector } from '@hooks'
import { Article } from '@reduxs/types'

const Header_Max_Height = normalize.v(280)
const Header_Min_Height = 0

export const Home = () => {
  const { colors } = useTheme()
  const styles = useStyles()
  const [getArticles] = useLazyGetArticlesQuery()
  const listArticles: Article[] = useAppSelector(ListArticles)
  let scrollOffsetY = useRef(new Animated.Value(0)).current
  const scrollViewRef = useRef<ScrollView>(null)
  const [refreshing, setRefreshing] = useState(false)

  const doGetArticles = async () => {
    await getArticles()
  }

  useEffect(() => {
    doGetArticles()
  }, [])

  const onRefresh = () => {
    setRefreshing(true)
    doGetArticles()
    setRefreshing(false)
  }

  const animateHeaderHeight = scrollOffsetY.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp',
  })

  const navigateToArticleDetail = (idArticle: string) => {
    navigate(routes.articleDetail, { id: idArticle }, 'ArticleDetail')
  }

  const gotoLatest = () => {
    scrollViewRef.current?.scrollTo({
      y: normalize.v(250),
      animated: true,
    })
  }

  const gotoTrending = () => {
    navigate(routes.trending)
  }

  const _renderHeader = () => {
    return (
      <Block row space="between" marginBottom={16} alignCenter>
        <LogoIcon></LogoIcon>
        <TouchableOpacity>
          <GlassIcon></GlassIcon>
        </TouchableOpacity>
      </Block>
    )
  }

  const _renderDynamicArticle = () => {
    return (
      listArticles.length > 0 && (
        <TouchableOpacity
          onPress={() => navigateToArticleDetail(listArticles[0]._id)}
        >
          <Animated.View
            style={[
              {
                height: animateHeaderHeight,
              },
            ]}
          >
            <DynamicArticle
              article={listArticles[0]}
              onPressTrending={gotoTrending}
            ></DynamicArticle>
          </Animated.View>
        </TouchableOpacity>
      )
    )
  }

  const _renderMenuTools = () => {
    return (
      <Block
        row
        space="between"
        backgroundColor={colors.background}
        marginBottom={16}
      >
        <Text color={colors.black} size={16} fontWeight={'600'} lineHeight={24}>
          Latest
        </Text>
        <TouchableOpacity onPress={gotoLatest}>
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
    <Container style={styles.root}>
      {_renderHeader()}
      <Block>
        {_renderDynamicArticle()}
        <Block backgroundColor={colors.background} flex>
          {_renderMenuTools()}
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            ref={scrollViewRef}
            style={{ backgroundColor: colors.background, height: '100%' }}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
              { useNativeDriver: false },
            )}
          >
            {listArticles.map((item) => {
              if (item._id === listArticles[0]._id) return null
              return (
                <TouchableOpacity
                  onPress={() => navigateToArticleDetail(item._id)}
                  key={item._id}
                >
                  <ArticleComponent article={item}></ArticleComponent>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
        </Block>
      </Block>
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
