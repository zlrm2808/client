import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { View, Text } from 'react-native'
import React from 'react'
import RestaurantScreen from './screens/RestaurantScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import OrderPrepairing from './screens/OrderPrepairingScreen';
import DeliveryScreen from './screens/DeliveryScreen';

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Cart" screenOptions={{ presentation: "Modal" }} component={CartScreen} />
        <Stack.Screen name="OrderPrepairing" screenOptions={{ presentation: "fullScreenModal" }} component={OrderPrepairing} />
        <Stack.Screen name="Delivery" screenOptions={{ presentation: "fullScreenModal" }} component={DeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}