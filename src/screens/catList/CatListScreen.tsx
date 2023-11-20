import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { CatListProps } from '#models';

export const CatListScreen = ({ navigation }: CatListProps) => {
  return (
    <View style={styles.container}>
      <Text>CatListScreen</Text>
      <Button
        title="Ir a CatPhotoList"
        onPress={() => navigation.navigate('CatPhotoList')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
