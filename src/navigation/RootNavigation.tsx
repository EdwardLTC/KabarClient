import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { Login, Register } from '@screens/auth';
import { Campaign, Certificate, Home, Setting } from '@screens/Main';
import React, { FC } from 'react';
import { BottomBar } from './components';
import { navigationRef } from './NavigationServices';
import { routes } from './utils';

const Auth = createStackNavigator();
const Main = createStackNavigator();
const BottomTabs = createBottomTabNavigator();
const isNotLogin = false;

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
            <BottomTabs.Screen key={routes.home} name={routes.home} component={Home} />
            <BottomTabs.Screen key={routes.campaign} name={routes.campaign} component={Campaign} />
            <BottomTabs.Screen key={routes.setting} name={routes.setting} component={Setting} />
            <BottomTabs.Screen key={routes.certificate} name={routes.certificate} component={Certificate} />
        </BottomTabs.Navigator>
    );
};

export const RootNavigation = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            {isNotLogin ? (
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
                </Main.Navigator>
            )}
        </NavigationContainer>
    );
};
