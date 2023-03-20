import { Container, Text } from '@components'
import { makeStyles, useTheme } from '@themes'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

export const Bookmark = () => {
  const { colors } = useTheme()
  const styles = useStyles()
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
      <FlatList data={undefined} renderItem={undefined}></FlatList>
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
