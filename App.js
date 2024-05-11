import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from 'react';
import BottomTabNavigation from '../Furniture/src/navigation/BottomTabNavigation';
import { CartScreen, ProductDetailsScreen, NewRivalsScreen, LoginScreen , FavoritesScreen, OrdersScreen, SignUpScreen } from '../Furniture/src/screens';
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

export default function App() {
  

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Bottom Navigation'
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='CartScreen'
          component={CartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ProductDetailsScreen'
          component={ProductDetailsScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='ProductList'
          component={NewRivalsScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='LoginScreen'
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='OrdersScreen'
          component={OrdersScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='FavoritesScreen'
          component={FavoritesScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='SignUp'
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}

