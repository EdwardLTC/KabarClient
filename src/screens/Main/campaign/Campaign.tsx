import React from 'react'
import { Text } from 'react-native'
import Config from 'react-native-config'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Campaign = () => {
  console.log({ Config })
  return (
    <SafeAreaView>
      <Text>campaign</Text>
    </SafeAreaView>
  )
}
