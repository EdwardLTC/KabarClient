import { Block, Text } from '@components'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { HomeDappIcon } from '@assets'
import React, { FC } from 'react'
import { TouchableHighlight, Dimensions } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme } from '@themes'

export const BottomBar: FC<BottomTabBarProps> = (props) => {
  const { bottom } = useSafeAreaInsets()
  const { colors } = useTheme()
  return (
    <>
      <Block
        shadowColor={colors.black}
        elevation={20}
        height={64}
        width={'100%'}
        row
        backgroundColor={colors.bottomMenu}
        bottom={0}
        space={'evenly'}
        zIndex={10000}
      >
        {props.state.routes.map((item, index) => {
          const isFocused = props.state.index === index
          const widthItemBottomMenu = (Dimensions.get('window').width - 96) / 4 // chiều rộng mỗi block trong bottom menu

          let icon;
          switch (index) {
            case 0:
              icon = <HomeDappIcon></HomeDappIcon>;
              break;
            case 1:
              icon = <HomeDappIcon></HomeDappIcon>;
              break;
            case 2:
              icon = <HomeDappIcon></HomeDappIcon>;
              break;
            default:
              icon = <HomeDappIcon></HomeDappIcon>;
              break;
          }

          return (
            <TouchableHighlight
              underlayColor={colors.bottomMenu}
              key={index}
              onPress={() => {
                props.navigation.navigate(item.name)
              }}
            >
              <Block alignCenter justifyCenter width={widthItemBottomMenu} flex>
                {icon}
                {isFocused ? (
                  <Text size={10} color={colors.black}>
                    {item.name}
                  </Text>
                ) : (
                  <></>
                )}
              </Block>
            </TouchableHighlight>
          )
        })}
      </Block>
      <Block
        backgroundColor={colors.bottomMenu}
        height={bottom}
        zIndex={9999}
      />
    </>
  )
}
