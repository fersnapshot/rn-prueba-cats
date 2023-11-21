import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

import { Label } from '#components';

interface Props extends PropsWithChildren {
  title: string;
}
export const Section = ({ children, title }: Props) => {
  return (
    <View style={styles.container}>
      <Label type="title">{title}</Label>
      <Label style={styles.description}>{children}</Label>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginBottom: 16,
    paddingHorizontal: 24,
  },
  description: {
    marginTop: 8,
  },
});
