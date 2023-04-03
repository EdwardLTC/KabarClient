import { Block, Text, Button } from '@components/base'
import { useBackHandler } from '@hooks'
import { closeAlert, dismissAlert } from '@reduxs'
import { AlertType } from '@reduxs/types'
import { makeStyles, useTheme } from '@themes'

import React, { useCallback, useEffect, useRef } from 'react'
import { Animated, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { useDispatch } from 'react-redux'

const Alert: React.FC<AlertType> = (props) => {
  const {
    isVisible,
    title,
    titleTextStyle,
    message,
    messageTextStyle,
    options,
    id,
    onCancel,
    cancelText,
    cancelTextProps,
    cancelButtonProps,
    onOk,
    okText,
    okTextProps,
    okButtonProps,
  } = props
  const dispatch = useDispatch()
  const progress = useRef(new Animated.Value(0)).current
  const { colors } = useTheme()
  const styles = useStyle()

  useEffect(() => {
    Animated.timing(progress, {
      toValue: isVisible ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      if (!isVisible) {
        dispatch(dismissAlert({ id }))
      }
    })
  }, [dispatch, id, isVisible, progress])

  useBackHandler({
    enabled: isVisible,
    callback: () => {
      if (options?.cancelable) {
        dispatch(closeAlert({ id }))
      }
    },
  })

  const _onBackdropPress = useCallback(() => {
    if (options?.cancelable) {
      dispatch(closeAlert({ id }))
    }
  }, [dispatch, id, options?.cancelable])

  const _renderCancelButton = () => {
    if (!onCancel) {
      return
    }
    return (
      <Button
        flex
        // type="text"
        margin={16}
        padding={10}
        radius={0}
        backgroundColor={colors.secondaryText}
        {...cancelButtonProps}
        onPress={() => {
          dispatch(closeAlert({ id }))
          onCancel()
        }}
        title={cancelText || 'Huỷ'}
        titleProps={{
          color: colors.white,
          ...cancelTextProps,
        }}
      />
    )
  }

  const _renderOkButton = () => {
    return (
      <Button
        flex
        // type="text"
        padding={10}
        margin={16}
        radius={0}
        {...okButtonProps}
        onPress={() => (onOk ? onOk() : dispatch(closeAlert({ id })))}
        title={okText || 'Đồng ý'}
        titleProps={{ color: colors.white, ...okTextProps }}
      />
    )
  }

  const opacity = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.5],
    extrapolate: 'clamp',
  })

  const scale = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  })

  return (
    <Block
      style={StyleSheet.absoluteFill}
      pointerEvents="box-none"
      alignCenter
      justifyCenter
    >
      <TouchableWithoutFeedback onPress={_onBackdropPress}>
        <Animated.View style={[styles.backdrop, { opacity }]} />
      </TouchableWithoutFeedback>
      <Animated.View
        style={[styles.modalContainer, { transform: [{ scale }] }]}
      >
        <Block padding={16}>
          {!!title && (
            <Text
              center
              size={22}
              lineHeight={28}
              fontFamily="bold"
              marginBottom={16}
              style={titleTextStyle}
            >
              {title}
            </Text>
          )}
          {!!message && (
            <Text
              size={14}
              lineHeight={20}
              center
              style={messageTextStyle}
              fontFamily="regular"
            >
              {message}
            </Text>
          )}
        </Block>
        <Block height={1} backgroundColor="border" />
        <Block row>
          {_renderCancelButton()}
          {_renderOkButton()}
        </Block>
      </Animated.View>
    </Block>
  )
}

const useStyle = makeStyles<AlertType>()(({ colors }) => ({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.black,
  },
  modalContainer: {
    width: '72%',
    borderRadius: 10,
    backgroundColor: colors.white,
  },
}))

export default Alert
