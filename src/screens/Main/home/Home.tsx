import {
  Block,
  Container,
  Image,
  Text,
  StatusBar,
  Button,
  TextInput,
} from '@components'
import { useTheme } from '@themes'
import React from 'react'
import { Alert } from 'react-native'
//en_US
export const Home = () => {
  const { colors } = useTheme()
  const [name, setName] = React.useState('')
  const [password, setPassword] = React.useState('')

  const createAlert = (title: string) => {
    Alert.alert('Alert', title, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ])
  }

  const validate = () => {
    if (name === '') {
      createAlert('name is required')
    } else if (password === '') {
      createAlert('password is required')
    } else {
      createAlert('success')
    }
  }
  return (
    <Container>
      <StatusBar statusColor="#fbf0ed" />
      <Image
        source={require('@assets/images/imgBackGround.png')}
        width={'100%'}
        height={'100%'}
        flex={1}
      ></Image>
      <Block
        flex={1}
        backgroundColor={colors.background}
        paddingHorizontal={28}
      >
        <Text
          fontWeight="700"
          size={24}
          lineHeight={29}
          color={colors.white}
          center
          marginTop={13}
        >
          lets get started
        </Text>
        <Text fontWeight="500" size={22} lineHeight={27} color={colors.white}>
          create an account
        </Text>
        
        <TextInput
          containerStyle={{
            marginTop: 27,
            backgroundColor: colors.white,
            borderRadius: 8,
          }}
          required={true}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        ></TextInput>

        <TextInput
          containerStyle={{
            marginTop: 27,
            backgroundColor: colors.white,
            borderRadius: 8,
          }}
          required={true}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        ></TextInput>

        <Button
          onPress={validate}
          backgroundColor={'#FF8B6A'}
          height={59}
          radius={20}
          marginTop={27}
          marginHorizontal={74}
          justifyCenter
          title=" create account"
          titleProps={{
            fontWeight: '500',
            color: colors.white,
            fontFamily: 'bold',
            size: 16,
            lineHeight: 24,
            flex: 1,
            numberOfLines: 2,
          }}
        ></Button>
      </Block>
    </Container>
  )
}
