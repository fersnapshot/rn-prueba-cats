import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '#models';
import { AboutScreen, BreedListScreen, BreedPhotoListScreen } from '#screens';
import { ButtonIcon } from '#components';
import { COLORS } from '#config/design';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BreedList"
        screenOptions={{
          headerShadowVisible: true,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
          statusBarColor: COLORS.primaryDark,
          statusBarStyle: 'light',
        }}
      >
        <Stack.Group>
          <Stack.Screen
            name="BreedList"
            component={BreedListScreen}
            // options={{ title: 'Razas' }}
            options={({ navigation }) => ({
              title: 'Razas',
              // eslint-disable-next-line react/no-unstable-nested-components
              headerRight: () => (
                <ButtonIcon
                  icon="info"
                  color={COLORS.white}
                  onPress={() => navigation.navigate('About')}
                />
              ),
            })}
          />
          <Stack.Screen
            name="BreedPhotoList"
            component={BreedPhotoListScreen}
            options={{ title: '' }}
          />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen
            name="About"
            component={AboutScreen}
            options={{ title: 'Acerca de' }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
