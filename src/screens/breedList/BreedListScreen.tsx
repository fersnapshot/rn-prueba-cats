import React from 'react';
import { FlashList } from '@shopify/flash-list';

import { BreedListProps } from '#models';
import { useQueryBreeds } from '#hooks';
import { Label } from '#components';
import { BreedCard } from './components/BreedCard';

export const BreedListScreen = ({ navigation }: BreedListProps) => {
  const { breeds, error, isLoading, isError, isFetching } = useQueryBreeds();

  if (isLoading) {
    return <Label type="notification">Cargando...</Label>;
  }
  if (isError && error != null) {
    return <Label type="notification">Error: {error.message}</Label>;
  }

  return (
    <FlashList
      keyExtractor={item => item.id}
      data={breeds}
      renderItem={({ item }) => <BreedCard breed={item} />}
      estimatedItemSize={200}
      horizontal
    />
  );
};
