import { Block, Container, Text, ArticleComponent } from '@components'
import { useTheme, makeStyles } from '@themes'
import React from 'react'
import { BellIcon, LogoIcon } from '@assets/icons'
import { FlatList } from 'react-native-gesture-handler'
import { TouchableOpacity } from 'react-native'
import { Article } from '@utils/types'
import { navigate } from '@navigation/NavigationServices'
import { routes } from '@navigation'

const data: Article[] = Array.from({ length: 10 }).map(
  (_, index) =>
    ({
      _id: index.toString(),
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: 'https://picsum.photos/200/300',
      createdAt: new Date(),
      createdBy: {
        _id: index.toString(),
        name: 'John Doe',
        avatar: 'https://picsum.photos/200/300',
      },
    } as unknown as Article),
)

//en_US
export const Home = () => {
  const { colors } = useTheme()
  const styles = useStyles()

  const navigateToArticleDetail = () => {
    navigate(routes.articleDetail)
  }
  const _renderHeader = () => {
    return (
      <Block row space="between">
        <LogoIcon></LogoIcon>
        <BellIcon></BellIcon>
      </Block>
    )
  }

  const _renderMenuTools = () => {
    return (
      <Block row space="between" marginTop={32}>
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

  const _renderBody = () => {
    return (
      <Block flex>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={navigateToArticleDetail}>
                <ArticleComponent article={item}></ArticleComponent>
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
        ></FlatList>
      </Block>
    )
  }

  return (
    <Container style={styles.root}>
      {_renderHeader()}
      {_renderMenuTools()}
      {_renderBody()}
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
