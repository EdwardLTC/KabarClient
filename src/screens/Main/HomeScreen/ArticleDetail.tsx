import { Block, Container, HeaderTools, Image, Button, Text } from '@components'
import { useTheme, makeStyles } from '@themes'
import React from 'react'
import { goBack } from '@navigation/NavigationServices'
import { images } from '@assets'

export const ArticleDetail = () => {
  const { colors } = useTheme()
  const styles = useStyles()

  const _renderHeader = () => {
    return (
      <Block row space="between" marginTop={20} alignCenter>
        <Block row>
          <Image
            source={images.placeholder}
            width={50}
            height={50}
            radius={25}
          ></Image>
          <Block marginLeft={4}>
            <Text
              fontWeight="600"
              size={16}
              color={colors.black}
              lineHeight={24}
            >
              BBC News
            </Text>
            <Text fontWeight="400" size={14} color={colors.secondaryText}>
              14m ago
            </Text>
          </Block>
        </Block>
        <Button
          width={105}
          height={44}
          backgroundColor={colors.blue}
          radius={6}
          title="Following"
          titleProps={{
            color: colors.white,
            size: 16,
            fontWeight: '600',
          }}
        ></Button>
      </Block>
    )
  }

  return (
    <Container style={styles.root}>
      <HeaderTools onBackPress={goBack}></HeaderTools>
      {_renderHeader()}
    </Container>
  )
}

const useStyles = makeStyles<{}>()(({}) => ({
  root: () => ({
    flex: 1,
    padding: 25,
  }),
}))
