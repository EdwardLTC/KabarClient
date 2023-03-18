import { useAppSelector } from '@hooks'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'
import { getStatusLogin } from '@reduxs'
import { Login, Register } from '@screens/auth'
import { ArticleDetail, Bookmark, Explore, Home, Profile } from '@screens/Main'
import React, { FC } from 'react'
import { BottomBar } from './components'
import { navigationRef } from './NavigationServices'
import { routes } from './utils'

const Auth = createStackNavigator()
const Main = createStackNavigator()
const BottomTabs = createBottomTabNavigator()

const BottomTabsNavigation: FC<{}> = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName={routes.home}
      detachInactiveScreens={true}
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <BottomBar {...props} />}
    >
      <BottomTabs.Screen
        key={routes.home}
        name={routes.home}
        component={Home}
      />
      <BottomTabs.Screen
        key={routes.explore}
        name={routes.explore}
        component={Explore}
      />
      <BottomTabs.Screen
        key={routes.bookmark}
        name={routes.bookmark}
        component={Bookmark}
      />
      <BottomTabs.Screen
        key={routes.profile}
        name={routes.profile}
        component={Profile}
      />
    </BottomTabs.Navigator>
  )
}

export const RootNavigation = () => {
  const enableLogin = useAppSelector(getStatusLogin)
  return (
    <NavigationContainer ref={navigationRef}>
      {enableLogin ? (
        <Auth.Navigator
          initialRouteName={routes.login}
          detachInactiveScreens={true}
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        >
          <Auth.Screen name={routes.login} component={Login} />
          <Auth.Screen name={routes.register} component={Register} />
        </Auth.Navigator>
      ) : (
        <Main.Navigator
          initialRouteName={routes.main}
          detachInactiveScreens={true}
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        >
          <Main.Screen name={routes.main} component={BottomTabsNavigation} />
          <Main.Screen name={routes.articleDetail} component={ArticleDetail} />
        </Main.Navigator>
      )}
    </NavigationContainer>
  )
}
