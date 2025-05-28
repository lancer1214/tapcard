import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Import navigation
import MainNavigator from './src/navigation/MainNavigator';

// Import context
import { UserProvider } from './src/context/UserContext';

// Define theme based on design specifications
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#106B77', // Deep Teal
    accent: '#FF6B5B',  // Coral
    background: '#E5E9ED', // Light Gray
    text: '#2D3438', // Dark Gray
    surface: '#FFFFFF',
    success: '#4CAF50',
    warning: '#FFC107',
    error: '#F44336',
    info: '#2196F3',
  },
  fonts: {
    ...DefaultTheme.fonts,
  },
};

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <UserProvider>
            <NavigationContainer>
              <MainNavigator />
              <StatusBar style="auto" />
            </NavigationContainer>
          </UserProvider>
        </PaperProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
