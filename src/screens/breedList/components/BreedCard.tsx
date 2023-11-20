import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';

import { Breed } from '#models';
import { Label } from '#components';
import { COLORS } from '#config/design';

interface Props {
  breed: Breed;
}
export const BreedCard = ({ breed }: Props) => {
  return (
    <View style={styles.breed}>
      <Image source={{ uri: breed.image.url }} style={styles.image} />
      <Label type="title" style={styles.marginTop}>
        {breed.name}
      </Label>
      <Label type="caption" style={styles.marginTop}>
        {breed.origin}
      </Label>
      <ScrollView
        style={styles.descriptionScroll}
        contentContainerStyle={styles.descriptionContainerScroll}
      >
        <Label>{breed.description}</Label>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  breed: {
    width: 200,
    height: 300,
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: COLORS.border,
    backgroundColor: COLORS.white,
    borderRightWidth: 1,
    padding: 10,
  },
  image: {
    borderRadius: 40,
    width: 80,
    height: 80,
  },
  nameContainer: {
    flexDirection: 'column',
    marginLeft: 16,
  },
  marginTop: {
    marginTop: 8,
  },
  descriptionScroll: {
    marginTop: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  descriptionContainerScroll: {
    padding: 4,
    paddingBottom: 8,
  },
});
