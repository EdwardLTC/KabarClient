import {
  Block,
  Container,
  Text,
  ArticleComponent,
  DinamicArticle,
} from '@components'
import { useTheme, makeStyles, normalize } from '@themes'
import React, { useRef } from 'react'
import { BellIcon, LogoIcon } from '@assets/icons'
import { TouchableOpacity, Animated, ScrollView } from 'react-native'
import { navigate } from '@navigation/NavigationServices'
import { routes } from '@navigation'
import { ArticleList } from '@reduxs'

export const Home = () => {
  const { colors } = useTheme()
  const styles = useStyles()

  const scrollViewRef = useRef<ScrollView>(null)

  let scrollOffsetY = useRef(new Animated.Value(0)).current

  const navigateToArticleDetail = () => {
    navigate(routes.articleDetail)
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
      <Block row space="between" marginBottom={16}>
        <LogoIcon></LogoIcon>
        <BellIcon></BellIcon>
      </Block>
    )
  }

  const _renderDynamicArticle = () => {
    return (
      <TouchableOpacity onPress={navigateToArticleDetail}>
        <DinamicArticle
          onPressTrending={gotoTrending}
          animHeaderValue={scrollOffsetY}
          article={ArticleList[0]}
        ></DinamicArticle>
      </TouchableOpacity>
    )
  }

  const _renderMenuTools = () => {
    return (
      <Block row space="between" marginBottom={16}>
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
      {_renderDynamicArticle()}
      {_renderMenuTools()}
      <ScrollView
        ref={scrollViewRef}
        style={{ backgroundColor: 'white' }}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false },
        )}
      >
        {ArticleList.map((item) => {
          return (
            <TouchableOpacity onPress={navigateToArticleDetail} key={item._id}>
              <ArticleComponent article={item}></ArticleComponent>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
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
