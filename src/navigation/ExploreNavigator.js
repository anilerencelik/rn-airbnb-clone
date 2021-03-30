import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchResultsScreen from '../navigation/SearchResultsTabNavigator';
import HomeScreen from '../screens/Home';
import SearchResultsTabNavigator from './SearchResultsTabNavigator'

const Stack = createStackNavigator();

const Router = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name={'Welcome'}
                component={HomeScreen}
                options={{
                    headerShown: false 
                }}
            />
            <Stack.Screen 
                name={'SearchResults'}
                component={SearchResultsTabNavigator}
                options={{
                    title: 'Search your destination'
                }}
            />
        </Stack.Navigator>
    );
};

export default Router;