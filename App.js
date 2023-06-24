import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Settings from './src/pages/Settings';
import Reports from './src/pages/Reports';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigate = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={TabNavigate}
        options={{
          headerStyle: {
            backgroundColor: 'green',
          },
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerStyle: {
            backgroundColor: '#FF5722',
          },
        }}
      />
      <Stack.Screen
        name="Reports"
        component={Reports}
        options={{
          headerStyle: {
            backgroundColor: 'green',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const TabNavigate = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Reports" component={Reports} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigate />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
