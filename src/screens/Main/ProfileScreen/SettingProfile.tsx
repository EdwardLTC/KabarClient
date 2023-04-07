import { Block, Container, HeaderTools, Text } from '@components'
import React, { FC, ReactNode } from 'react'
import { goBack } from '@navigation/NavigationServices'
import { makeStyles } from '@themes'
import {
  HelpIcon,
  LogoutIcon,
  NextArrowIcon,
  NotificationIcon,
  SecurityIcon,
} from '@assets'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useLogoutMutation } from '@reduxs'

type ItemSettingProps = {
  icon: ReactNode
  title: string
  disableRightIcon?: boolean
}

export const SettingProfile = () => {
  const styles = useStyles()
  const [Logout] = useLogoutMutation()

  const RenderItemSetting: FC<ItemSettingProps> = (props) => {
    return (
      <Block
        row
        paddingLeft={4}
        paddingRight={8}
        space="between"
        marginTop={16}
        marginBottom={20}
        alignCenter
        justifyCenter
      >
        <Block row alignCenter justifyCenter>
          {props.icon}
          <Text fontWeight="400" size={16} marginLeft={4} fontFamily="regular">
            {props.title}
          </Text>
        </Block>
        {props.disableRightIcon ? null : <NextArrowIcon></NextArrowIcon>}
      </Block>
    )
  }

  const doLogout = async () => {
    await Logout()
  }
  return (
    <Container style={styles.root}>
      <HeaderTools
        title="Settings"
        onBackPress={goBack}
        disabledRightIcon
      ></HeaderTools>

      <RenderItemSetting
        icon={<NotificationIcon></NotificationIcon>}
        title="Notification"
      ></RenderItemSetting>

      <RenderItemSetting
        icon={<SecurityIcon></SecurityIcon>}
        title="Security"
      ></RenderItemSetting>

      <RenderItemSetting
        icon={<HelpIcon></HelpIcon>}
        title="Help"
      ></RenderItemSetting>

      <TouchableOpacity onPress={doLogout}>
        <RenderItemSetting
          icon={<LogoutIcon></LogoutIcon>}
          title="Logout"
          disableRightIcon
        ></RenderItemSetting>
      </TouchableOpacity>
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
