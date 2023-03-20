import {
  Block,
  Container,
  Text,
  ArticleComponent,
  DynamicArticle,
} from '@components'
import { useTheme, makeStyles, normalize } from '@themes'
import React, { useRef } from 'react'
import { GlassIcon, LogoIcon } from '@assets/icons'
import { TouchableOpacity, Animated, ScrollView } from 'react-native'
import { navigate } from '@navigation/NavigationServices'
import { routes } from '@navigation'
import { ArticleList } from '@reduxs'

const Header_Max_Height = normalize.v(260)
const Header_Min_Height = 0

export const Home = () => {
  const { colors } = useTheme()
  const styles = useStyles()

  const scrollViewRef = useRef<ScrollView>(null)

  let scrollOffsetY = useRef(new Animated.Value(0)).current

  const animateHeaderHeight = scrollOffsetY.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp',
  })

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
      <TouchableOpacity onPress={navigateToArticleDetail}>
        <Animated.View
          style={[
            {
              height: animateHeaderHeight,
            },
          ]}
        >
          <DynamicArticle
            article={ArticleList[0]}
            onPressTrending={gotoTrending}
          ></DynamicArticle>
        </Animated.View>
      </TouchableOpacity>
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
      {_renderDynamicArticle()}
      <Block backgroundColor={colors.background} flex>
        {_renderMenuTools()}
        <ScrollView
          ref={scrollViewRef}
          style={{ backgroundColor: colors.background, height: '100%' }}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
            { useNativeDriver: false },
          )}
        >
          {ArticleList.map((item) => {
            return (
              <TouchableOpacity
                onPress={navigateToArticleDetail}
                key={item._id}
              >
                <ArticleComponent article={item}></ArticleComponent>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
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
