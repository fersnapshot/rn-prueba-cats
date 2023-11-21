import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '#models';
import { BreedListScreen, BreedPhotoListScreen } from '#screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BreedList"
        screenOptions={{
          headerShadowVisible: true,
        }}
      >
        <Stack.Screen
          name="BreedList"
          component={BreedListScreen}
          options={{ title: 'Razas' }}
        />
        <Stack.Screen
          name="BreedPhotoList"
          component={BreedPhotoListScreen}
          options={{ title: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
