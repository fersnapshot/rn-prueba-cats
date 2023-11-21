import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import { BreedPhotoListProps } from '#models';
import { useQueryImagesBreed, useQueryPostVote, useQueryVotes } from '#hooks';
import { Label } from '#components';
import { ImageCard } from './components/ImageCard';

export const BreedPhotoListScreen = ({
  navigation,
  route,
}: BreedPhotoListProps) => {
  const { breedId, name } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [name, navigation]);

  const { images, isLoading, isFetching, error, isError, fetchNextPage } =
    useQueryImagesBreed(breedId);

  const { votes, votesIsLoading } = useQueryVotes();

  const voteMutation = useQueryPostVote();

  const handleVote = (imageId: string) => (value: number) => {
    voteMutation.mutate({ imageId, value });
  };

  const renderFooter = () => (
    <>{isFetching ? <ActivityIndicator size="small" /> : null}</>
  );

  // console.log(
  //   'images.id',
  //   images.map(im => im.id),
  // );
  // console.log('VOTOS', votes);

  if (isLoading || votesIsLoading) {
    return <ActivityIndicator size="large" style={styles.loading} />;
  }
  if (isError && error != null) {
    return <Label type="notification">Error: {error.message}</Label>;
  }
  return (
    <>
      <FlashList
        keyExtractor={(item, index) => `${index}-${item.id}`}
        data={images}
        renderItem={({ item }) => (
          <ImageCard
            url={item.url}
            vote={votes.find(v => v.image_id === item.id)?.value}
            onVote={handleVote(item.id)}
          />
        )}
        estimatedItemSize={100}
        onEndReachedThreshold={0.2}
        onEndReached={fetchNextPage}
        ListFooterComponent={renderFooter}
      />
      {voteMutation.isPending && <Loading />}
    </>
  );
};

const Loading = () => (
  <View style={styles.modal}>
    <ActivityIndicator size="large" />
  </View>
);

const styles = StyleSheet.create({
  loading: {
    marginTop: 24,
  },
  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    backgroundColor: 'rgba(256,256,256,0.6)',
  },
});
