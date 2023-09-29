import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import RestaurantList from './RestaurantList';
import ProtectedRoute from './ProtectedRoute';

const Stack = createStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="RestaurantList" options={{ title: 'Restaurant List' }}>
        {() => (
          <ProtectedRoute>
            <RestaurantList />
          </ProtectedRoute>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
