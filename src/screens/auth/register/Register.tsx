import { Block, Container, Text, TextInput, Button } from '@components'
import React from 'react'
import { makeStyles, useTheme } from '@themes'
import { navigate } from '@navigation/NavigationServices'
import { routes } from '@navigation'
import { useRegisterMutation } from '@reduxs/api/userService'
import { useDispatch } from 'react-redux'
import { closeAlert, showAlert } from '@reduxs'

export const Register = () => {
  const styles = useStyles()
  const { colors } = useTheme()
  const dispatch = useDispatch()

  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')

  const navigateTologin = () => {
    navigate(routes.login)
  }

  const [register] = useRegisterMutation()

  const doRegistert = async () => {
    const res: any = await register({ email, password })
    if (res.data) {
      dispatch(
        showAlert({
          id: 'register',
          title: `Success`,
          message: 'Create account success',
          okText: 'Đóng',
          onOk: () => {
            navigateTologin()
            dispatch(closeAlert({ id: 'register' }))
          },
          onOutSidePress: () => {
            dispatch(closeAlert({ id: 'register' }))
          },
          options: { cancelable: true },
        }),
      )
    }
  }

  const _renderHeader = () => {
    return (
      <Block>
        <Text color={colors.black} fontWeight="700" size={48} lineHeight={72}>
          Hello
        </Text>
        <Text color={colors.blue} fontWeight="700" size={48} lineHeight={72}>
          Again!
        </Text>
        <Text
          marginTop={4}
          size={20}
          lineHeight={30}
          fontWeight="400"
          color={colors.secondaryText}
        >
          Welcome back you’ve been missed
        </Text>
      </Block>
    )
  }

  const _renderForm = () => {
    return (
      <Block>
        <Text
          marginTop={48}
          fontWeight="400"
          size={14}
          lineHeight={21}
          color={colors.secondaryText}
        >
          Username*
        </Text>
        <TextInput required value={email} onChangeText={setEmail} />
        <Text
          marginTop={16}
          fontWeight="400"
          size={14}
          lineHeight={21}
          color={colors.secondaryText}
        >
          Password*
        </Text>
        <TextInput
          required
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </Block>
    )
  }

  const _renderButtonDoLogin = () => {
    return (
      <Button
        onPress={doRegistert}
        title="Register"
        height={50}
        marginTop={28}
        titleProps={{
          fontWeight: '600',
          size: 16,
          color: colors.white,
          marginTop: 2,
        }}
      />
    )
  }

  const _renderFooter = () => {
    return (
      <Block row marginTop={16} alignCenter justifyCenter>
        <Text
          fontWeight="400"
          size={14}
          lineHeight={21}
          color={colors.secondaryText}
        >
          Already have an account ?{' '}
        </Text>
        <Button onPress={navigateTologin}>
          <Text fontWeight="400" size={14} lineHeight={21} color={colors.blue}>
            Login
          </Text>
        </Button>
      </Block>
    )
  }

  return (
    <Container
      style={styles.root}
      statusColor={colors.background}
      backgroundColor={colors.background}
    >
      {_renderHeader()}
      {_renderForm()}
      {_renderButtonDoLogin()}
      {_renderFooter()}
    </Container>
  )
}

const useStyles = makeStyles<{}>()(({}) => ({
  root: () => ({
    flex: 1,
    padding: 25,
  }),
}))
