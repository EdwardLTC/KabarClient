import { Block, Container, HeaderTools, Image, Button, Text } from '@components'
import { useTheme, makeStyles } from '@themes'
import React from 'react'
import { goBack } from '@navigation/NavigationServices'
import { images } from '@assets'
import { ScrollView } from 'react-native-gesture-handler'

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

  const _renderImage = () => {
    return (
      <Block marginTop={19}>
        <Image source={images.placeholder} height={248} radius={6}></Image>
      </Block>
    )
  }

  const _renderDetail = () => {
    return (
      <Block marginTop={16}>
        <Text
          fontWeight="400"
          size={13}
          lineHeight={20}
          color={colors.secondaryText}
        >
          Europe
        </Text>
        <Text
          marginTop={4}
          fontWeight="400"
          size={24}
          lineHeight={24}
          color={colors.black}
        >
          Ukraine's President Zelensky to BBC: Blood money being paid for
          Russian oil
        </Text>

        <Text marginTop={16}>
          Ukrainian President Volodymyr Zelensky has accused European countries
          that continue to buy Russian oil of "earning their money in other
          people's blood". In an interview with the BBC, President Zelensky
          singled out Germany and Hungary, accusing them of blocking efforts to
          embargo energy sales, from which Russia stands to make up to £250bn
          ($326bn) this year. There has been a growing frustration among
          Ukraine's leadership with Berlin, which has backed some sanctions
          against Russia but so far resisted calls to back tougher action on oil
          sales.
        </Text>
      </Block>
    )
  }

  return (
    <Container style={styles.root}>
      <HeaderTools onBackPress={goBack}></HeaderTools>
      {_renderHeader()}
      <ScrollView showsVerticalScrollIndicator={false}>
        {_renderImage()}
        {_renderDetail()}
      </ScrollView>
    </Container>
  )
}

const useStyles = makeStyles<{}>()(({}) => ({
  root: () => ({
    flex: 1,
    padding: 25,
  }),
}))
