import { SettingIcon } from '@assets'
import {
  ArticleComponent,
  Block,
  Button,
  Container,
  HeaderTools,
  Image,
  Text,
} from '@components'
import { useAppSelector } from '@hooks'
import { routes } from '@navigation'
import { navigate } from '@navigation/NavigationServices'
import { ListArticles, getUserInfo } from '@reduxs'
import { UserInfo } from '@reduxs/types'
import { makeStyles, useTheme } from '@themes'
import { Article } from '@utils/types'
import React from 'react'
import { Linking, ScrollView } from 'react-native'

export const Profile = () => {
  const { colors } = useTheme()
  const styles = useStyles()
  const userInfo: UserInfo = useAppSelector(getUserInfo)
  const listArticles: Article[] = useAppSelector(ListArticles)

  const navigateToSetting = () => {
    navigate(routes.setting)
  }

  const navigateAddArticle = () => {
    navigate(routes.addArticle)
  }

  const doOpenWebsite = () => {
    Linking.openURL('https://edwardltc.github.io/Profile.github.io/')
  }

  const _renderInfoDetails = () => {
    return (
      <Block marginTop={16}>
        <Text fontWeight="600" size={16} fontFamily="bold">
          {userInfo.name || 'Edward'}
        </Text>
        <Text
          fontWeight="400"
          size={16}
          color={colors.secondaryText}
          fontFamily="regular"
        >
          {userInfo.email || 'Edward'}
        </Text>
      </Block>
    )
  }

  const _renderButtonTools = () => {
    return (
      <Block marginTop={16} row space="between" marginBottom={16}>
        <Button title="Edit profile" width="48%"></Button>
        <Button title="Website" width="48%" onPress={doOpenWebsite}></Button>
      </Block>
    )
  }

  const _renderInfo = () => {
    return (
      <Block>
        <Block row alignCenter marginTop={13}>
          <Image
            resizeMode="cover"
            source={{ uri: userInfo.avatar }}
            width={100}
            height={100}
            radius={50}
          ></Image>
          <Block space="between" marginLeft={16} row flex>
            <Block justifyCenter alignCenter>
              <Text fontWeight="600" size={16}>
                2156
              </Text>
              <Text
                marginTop={4}
                color={colors.secondaryText}
                fontWeight="400"
                size={16}
              >
                Followers
              </Text>
            </Block>

            <Block justifyCenter alignCenter>
              <Text fontWeight="600" size={16}>
                567
              </Text>
              <Text
                marginTop={4}
                color={colors.secondaryText}
                fontWeight="400"
                size={16}
              >
                Following
              </Text>
            </Block>
          </Block>
        </Block>
        {_renderInfoDetails()}
        {_renderButtonTools()}
      </Block>
    )
  }

  const _renderMyArticles = () => {
    return (
      <ScrollView
        style={{ backgroundColor: 'white' }}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        {_renderInfo()}
        {listArticles.map((item) => {
          return (
            <ArticleComponent article={item} key={item._id}></ArticleComponent>
          )
        })}
      </ScrollView>
    )
  }

  const _renderFloatingButton = () => {
    return (
      <Block
        absolute
        bottom={0}
        right={0}
        marginRight={25}
        marginBottom={25}
        alignCenter
        justifyCenter
      >
        <Button
          title="+"
          titleProps={{
            marginTop: 6,
            size: 24,
          }}
          justifyCenter
          alignCenter
          width={54}
          height={54}
          radius={27}
          onPress={navigateAddArticle}
        ></Button>
      </Block>
    )
  }

  return (
    <Container style={styles.root}>
      <HeaderTools
        title="Profile"
        disabledLeftIcon={true}
        renderRightIcon={<SettingIcon></SettingIcon>}
        onToolsPress={navigateToSetting}
      ></HeaderTools>
      {_renderMyArticles()}
      {_renderFloatingButton()}
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
