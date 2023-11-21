import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { ButtonIcon } from '#components';

interface Props {
  url: string;
  vote?: number;
  onVote: (val: number) => void;
}
export const ImageCard = ({ url, vote = 0, onVote }: Props) => {
  const handleVote = (value: number) => () => {
    if (vote == null || vote === 0) {
      onVote(value);
    } else if ((vote === 1 && value === 1) || (vote === -1 && value === -1)) {
      onVote(0);
    } else {
      onVote(value + vote);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Image source={{ uri: url }} style={styles.image} />
      <View style={styles.buttons}>
        <ButtonIcon
          icon={vote > 0 ? 'thumb-up-alt' : 'thumb-up-off-alt'}
          onPress={handleVote(1)}
          color="#0336ff"
        />
        <ButtonIcon
          icon={vote < 0 ? 'thumb-down-alt' : 'thumb-down-off-alt'}
          onPress={handleVote(-1)}
          color="#ff0266"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  image: {
    borderRadius: 8,
    width: 180,
    height: 80,
  },
  buttons: {
    marginLeft: 16,
    flexDirection: 'row',
  },
});
