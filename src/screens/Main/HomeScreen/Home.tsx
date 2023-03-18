import { Block, Container, Text, ArticleComponent } from '@components'
import { useTheme, makeStyles } from '@themes'
import React, { useRef } from 'react'
import { BellIcon, LogoIcon } from '@assets/icons'
import { TouchableOpacity, Animated, ScrollView } from 'react-native'
import { navigate } from '@navigation/NavigationServices'
import { routes } from '@navigation'
import { DinamicArticle } from '@components/common/DynamicArticle'
import { ArticleList } from '@reduxs'

//en_US
export const Home = () => {
  const { colors } = useTheme()
  const styles = useStyles()

  let scrollOffsetY = useRef(new Animated.Value(0)).current

  const navigateToArticleDetail = () => {
    navigate(routes.articleDetail)
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
        <Text
          color={colors.secondaryText}
          size={14}
          fontWeight="400"
          lineHeight={21}
        >
          See all
        </Text>
      </Block>
    )
  }

  return (
    <Container style={styles.root}>
      {_renderHeader()}
      {_renderDynamicArticle()}
      {_renderMenuTools()}
      <ScrollView
        style={{ backgroundColor: 'white' }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false },
        )}
        showsVerticalScrollIndicator={false}
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
