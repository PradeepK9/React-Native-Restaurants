import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../components/LoginScreen';
import RestaurantList from '../components/RestaurantList';
import ProtectedRoute from './ProtectedRoute';
import Home from '../components/Home'

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
      <Stack.Screen name="Home" options={{ title: 'Home Page' }}>
        {() => (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
