import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { BreedPhotoListProps } from '#models';
import { useQueryImagesBreed } from '#hooks';
import { Label } from '#components';
import { ImageCard } from './components/ImageCard';

export const BreedPhotoListScreen = ({ route }: BreedPhotoListProps) => {
  const { breedId } = route.params;
  const { images, isLoading, isFetching, error, isError, fetchNextPage } =
    useQueryImagesBreed(breedId);

  const renderFooter = () => (
    <>{isFetching ? <ActivityIndicator size="small" /> : null}</>
  );

  console.log(
    'images.id',
    images.map(im => im.id),
  );

  if (isLoading) {
    return <ActivityIndicator size="large" style={styles.loading} />;
  }
  if (isError && error != null) {
    return <Label type="notification">Error: {error.message}</Label>;
  }
  return (
    <>
      <View style={{ flexDirection: 'row' }}>
        <Icon name="thumb-up" size={36} color="yellow" />
        <Icon name="thumb-up" size={36} />

        <Icon name="thumb-down" size={36} />
        <Icon name="thumb-down-alt" size={36} />
        <Icon name="thumb-down-off-alt" size={36} />
        <Icon name="thumb-up" size={36} />
        <Icon name="thumb-up-alt" size={36} />
        <Icon name="thumb-up-off-alt" size={36} />
        <Icon name="thumbs-up-down" size={36} />
      </View>
      <FlashList
        keyExtractor={(item, index) => `${index}-${item.id}`}
        data={images}
        renderItem={({ item }) => <ImageCard url={item.url} />}
        estimatedItemSize={100}
        onEndReachedThreshold={0.2}
        onEndReached={fetchNextPage}
        ListFooterComponent={renderFooter}
      />
    </>
  );
};

const styles = StyleSheet.create({
  loading: {
    marginTop: 24,
  },
});
