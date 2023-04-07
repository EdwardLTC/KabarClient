import { Block, Button, Container, HeaderTools, Text } from '@components'
import { useTheme } from '@themes'
import { makeStyles } from '@themes'
import React, { useCallback, useState } from 'react'
import { goBack } from '@navigation/NavigationServices'
import {
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native'
import { AddIcon, images } from '@assets'
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker'
import { usePostMediaMutation } from '@reduxs/api/mediaService'
import { usePostArticleMutation } from '@reduxs/api/articlesService'
import { CustomToast } from '@utils/helper'
import { PostArticleRequest } from '@reduxs/types'

export const AddArticle = () => {
  const { colors } = useTheme()
  const styles = useStyles()

  const [image, setImage] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const [postImage] = usePostMediaMutation()
  const [postArticle] = usePostArticleMutation()

  const handlePostArticle = async () => {
    const data: PostArticleRequest = {
      title: title,
      content: content,
      image: image,
    }
    const res: any = await postArticle(data)
    if (res.data) {
      CustomToast('Article has been created')
      goBack()
    }
  }

  const openGallery = useCallback(async () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      includeExtra: true,
      selectionLimit: 1,
    }

    await launchImageLibrary(options, async (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode)
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage)
      } else {
        if (response.assets) {
          const res = response.assets[0]
          const form = new FormData()
          form.append('image', {
            uri: res.uri,
            type: res.type,
            name: res.fileName,
          })
          const img: any = await postImage(form)
          if (img.data) {
            setImage(img.data)
          }
        }
      }
    })
  }, [])

  const _renderImagePicker = () => {
    return (
      <Block marginTop={16}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            openGallery()
          }}
        >
          {!image ? (
            <ImageBackground
              resizeMode="contain"
              style={styles.add_image}
              source={images.plc}
            >
              <AddIcon></AddIcon>
              <Text size={14} color={colors.secondaryText}>
                Add Cover Photo
              </Text>
            </ImageBackground>
          ) : (
            <Image
              style={{ width: '100%', height: 183, borderRadius: 6 }}
              source={{ uri: image }}
            />
          )}
        </TouchableOpacity>
      </Block>
    )
  }

  const _renderTitle = () => {
    return (
      <TextInput
        placeholder="News title"
        style={styles.newsTitle}
        multiline={true}
        onChangeText={(text) => setTitle(text)}
      ></TextInput>
    )
  }

  const _renderContent = () => {
    return (
      <TextInput
        placeholder="Add News/Article"
        style={styles.content}
        multiline={true}
        onChangeText={(text) => setContent(text)}
      ></TextInput>
    )
  }

  const _renderFloatingButton = () => {
    return (
      <Block
        shadow
        absolute
        bottom={0}
        right={0}
        width={'120%'}
        height={78}
        paddingVertical={14}
        alignEnd
      >
        <Block bottom={0} right={0} marginHorizontal={24} marginBottom={25}>
          <Button
            title="Publish"
            titleProps={{ size: 16, color: colors.white }}
            padding={16}
            backgroundColor={
              !title || !content || !image ? colors.border : colors.primary
            }
            disabled={!title || !content || !image}
            width={109}
            height={50}
            onPress={handlePostArticle}
          ></Button>
        </Block>
      </Block>
    )
  }

  return (
    <Container style={styles.root}>
      <HeaderTools title="Create News" onBackPress={goBack} />
      {_renderImagePicker()}
      {_renderTitle()}
      <Block backgroundColor={'#C4C4C4'} height={1}></Block>
      {_renderContent()}
      {_renderFloatingButton()}
    </Container>
  )
}

const useStyles = makeStyles<{}>()(({}) => ({
  root: () => ({
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 25,
  }),
  add_image: {
    height: 183,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  newsTitle: {
    fontSize: 24,
    lineHeight: 36,
    color: '#050505',
    letterSpacing: 0.12,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4E4B66',
  },
}))
