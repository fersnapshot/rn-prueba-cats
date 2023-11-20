import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '#models';
import { CatListScreen, CatPhotoListScreen } from '#screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CatList">
        <Stack.Screen
          name="CatList"
          component={CatListScreen}
          options={{ title: 'Razas' }}
        />
        <Stack.Screen
          name="CatPhotoList"
          component={CatPhotoListScreen}
          options={{ title: 'Fotos' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
