import React from 'react';
import { ColorValue, StyleSheet, Text, TextProps } from 'react-native';

import { COLORS } from '#config/design';

interface Props extends TextProps {
  type?: 'title' | 'normal' | 'button' | 'caption' | 'notification';
  color?: ColorValue;
}
export const Label = ({
  type = 'normal',
  color = COLORS.textNormal,
  style,
  children,
  ...props
}: Props) => {
  return (
    <Text
      style={[styles[type], { color }, style]}
      suppressHighlighting={type === 'normal'}
      ellipsizeMode="tail"
      numberOfLines={type === 'button' ? 1 : undefined}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
    color: COLORS.textTitle,
    fontSize: 18,
  },
  normal: {
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.textNormal,
  },
  button: {
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 1.25,
    textTransform: 'uppercase',
  },
  caption: {
    fontWeight: '300',
    color: COLORS.textCaption,
    fontSize: 12,
  },
  notification: {
    fontSize: 16,
    lineHeight: 20,
    alignSelf: 'center',
    marginTop: 32,
    marginHorizontal: 16,
    fontWeight: 'bold',
  },
});
