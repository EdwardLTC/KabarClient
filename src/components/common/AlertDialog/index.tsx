import { getAlertState } from '@reduxs'
import React from 'react'
import { StyleSheet } from 'react-native'

import { useAppSelector } from '@hooks'
import Alert from './Alert'
import { Block } from '@components/base'

export const AlertDialog = () => {
  const alerts = useAppSelector(getAlertState)

  if (alerts.length === 0) {
    return <Block />
  }

  return (
    <Block
      style={StyleSheet.absoluteFill}
      pointerEvents="box-none"
      alignCenter
      justifyCenter
    >
      {alerts.map((item) => (
        <Alert key={item.id} {...item} />
      ))}
    </Block>
  )
}
