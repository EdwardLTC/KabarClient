import React, { FC } from 'react'

import { ViewProps } from 'react-native'
import { Edge, SafeAreaView } from 'react-native-safe-area-context'
import { useTheme, makeStyles } from 'themes'

import { StatusBar } from '../StatusBar'

export type ContainerProps = {
  statusColor?: string
  edges?: Edge[]
  backgroundColor?: string
} & ViewProps

export const Container: FC<ContainerProps> = (props) => {
  const { colors } = useTheme()
  const { statusColor, style, edges, children, backgroundColor } = props
  const _statuscolor = statusColor ? statusColor : colors.background
  const _backgroundColor = backgroundColor ? backgroundColor : colors.background
  const styles = useStyles({ backgroundColor: _backgroundColor })

  return (
    <SafeAreaView
      edges={edges ?? ['left', 'right']}
      style={[styles.root, style]}
    >
      <StatusBar statusColor={_statuscolor} />
      {children}
    </SafeAreaView>
  )
}

const useStyles = makeStyles<ContainerProps>()(({ }) => ({
  root: ({ backgroundColor }) => ({
    flex: 1,
    backgroundColor: backgroundColor,
  }),
}))
