import { images } from '@assets/images'
import { Block } from '@components/base/Block'
import React, { useMemo, useState } from 'react'
import { StyleSheet } from 'react-native'
import FastImage from 'react-native-fast-image'
import { createDefaultStyle, handleGutter } from '../utils'
import { ImageProps } from './types'

export const Image: React.FC<ImageProps> = (props) => {
  const {
    style,
    width,
    height,
    padding,
    margin,
    backgroundColor,
    ImageComponent = FastImage,
    source,
    placeholderImage,
    placeholderImageProps,
    ...rest
  } = props

  const [isError, setIsError] = useState(false)

  const containerImageStyle = StyleSheet.flatten([
    createDefaultStyle(props),
    width && { width },
    height && { height },
    padding && handleGutter('padding', padding),
    margin && handleGutter('margin', margin),
    backgroundColor && { backgroundColor },
    { overflow: 'hidden' },
    style,
  ])

  const imageStyle = StyleSheet.flatten([
    { width: containerImageStyle.width, height: containerImageStyle.height },
    style,
  ])

  const CachedImageMemoized = useMemo(() => {
    return (
      <ImageComponent
        {...rest}
        source={source}
        onError={() => {
          setIsError(true)
          rest.onError && rest.onError()
        }}
        onLoadStart={() => {
          setIsError(false)
          props.onLoadStart && props.onLoadStart()
        }}
        style={imageStyle}
      />
    )
  }, [ImageComponent, imageStyle, props, rest, source])

  const PlaceholderImage = useMemo(() => {
    const placeHolderBg = { backgroundColor: '#FFF' }
    return (
      <ImageComponent
        source={placeholderImage || images.placeholder}
        resizeMode="contain"
        {...placeholderImageProps}
        style={[
          imageStyle,
          StyleSheet.absoluteFillObject,
          placeHolderBg,
          placeholderImageProps?.style,
        ]}
      />
    )
  }, [ImageComponent, imageStyle, placeholderImage, placeholderImageProps])

  return (
    <Block style={containerImageStyle}>
      {CachedImageMemoized}
      {((typeof source !== 'number' && !source?.uri) || isError) &&
        PlaceholderImage}
    </Block>
  )
}
