import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import MarketScreen from "./market";
import HomeScreen from "./home";
import DiscoverScreen from "./discover";
import WalletScreen from "./wallet";
import AccountScreen from "./account";
import headerOptions from "../../components/market/header";

const Tab = createBottomTabNavigator();

const MainScreen = () => {
    return (
        <Tab.Navigator initialRouteName={'Market'}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Discover" component={DiscoverScreen} />
            <Tab.Screen options={headerOptions as BottomTabNavigationOptions} name="Market" component={MarketScreen} />
            <Tab.Screen name="Wallet" component={WalletScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
    );
}

export default MainScreen
