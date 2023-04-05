export type ActionPayload<T> = { type: string; payload: T }

import { ButtonProps } from '@components/base/Button/types'
import { CommonTextProps } from '@components/base/Text/type'
import { StyleProp, TextStyle } from 'react-native'

export interface AlertPayload {
  /**
   * Id of alert box
   */
  id: string
  title?: string
  message?: string
  titleTextStyle?: StyleProp<TextStyle>
  messageTextStyle?: StyleProp<TextStyle>

  okText?: string
  onOk?: () => void
  okButtonProps?: ButtonProps
  okTextProps?: CommonTextProps

  cancelText?: string
  onCancel?: () => void
  cancelButtonProps?: ButtonProps
  cancelTextProps?: CommonTextProps

  options?: {
    cancelable?: boolean
  }

  onOutSidePress?: () => void
}

export interface AlertType extends AlertPayload {
  isVisible?: boolean
}

export interface ModalType {
  id: string
  isVisible: boolean
  customProps?: { [key: string]: any }
}

export interface CommonState {
  modals: { [id: string]: ModalType }
  alerts: { [id: string]: AlertType }
}

export interface BaseResponse<T> {
  statusCode?: number
  data?: T
}

export interface ListBaseResponse<T> {
  statusCode?: number
  data?: T[]
}
