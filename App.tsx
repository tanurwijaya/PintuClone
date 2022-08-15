import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from "./src/screens/main";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

import {SafeAreaView} from "react-native";

export default function App() {
    const Stack = createNativeStackNavigator();
    const queryClient = new QueryClient()

    return (
        <SafeAreaView style={{flex: 1}}>
            <QueryClientProvider client={queryClient}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen options={{header: () => null}} name="MainScreen" component={MainScreen}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </QueryClientProvider>
        </SafeAreaView>
    );
}


