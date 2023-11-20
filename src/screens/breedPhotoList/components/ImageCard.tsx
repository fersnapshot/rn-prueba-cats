import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface Props {
  url: string;
}
export const ImageCard = ({ url }: Props) => {
  return (
    <View style={styles.wrapper}>
      <Image source={{ uri: url }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 100,
  },
  image: {
    borderRadius: 40,
    width: 80,
    height: 80,
  },
});
