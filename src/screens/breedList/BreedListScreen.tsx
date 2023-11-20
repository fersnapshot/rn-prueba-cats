import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import { BreedListProps } from '#models';
import { useQueryBreeds } from '#hooks';
import { Label } from '#components';
import { BreedCard } from './components/BreedCard';

export const BreedListScreen = ({ navigation }: BreedListProps) => {
  const { breeds, isLoading, error, isError } = useQueryBreeds();

  const handleSelect = (breedId: string) => () => {
    navigation.navigate('BreedPhotoList', { breedId });
  };

  if (isLoading) {
    return <ActivityIndicator size="large" style={styles.loading} />;
  }
  if (isError && error != null) {
    return <Label type="notification">Error: {error.message}</Label>;
  }

  return (
    <FlashList
      keyExtractor={item => item.id}
      data={breeds}
      renderItem={({ item }) => (
        <BreedCard breed={item} onSelect={handleSelect(item.id)} />
      )}
      estimatedItemSize={200}
      horizontal
    />
  );
};

const styles = StyleSheet.create({
  loading: {
    marginTop: 24,
  },
});
