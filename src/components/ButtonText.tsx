/* eslint-disable react-native/no-inline-styles */
import React, { ReactNode } from 'react';
import { Pressable, PressableProps } from 'react-native';

import { Label } from './Label';
import { COLORS } from '#config/design';

interface Props extends PressableProps {
  children: ReactNode;
  onPress: () => void;
}
export const ButtonText = ({ children, onPress, ...props }: Props) => {
  return (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.2 : 1 }]}
      onPress={onPress}
      {...props}
    >
      <Label color={COLORS.primary} style={{ fontWeight: 'bold' }}>
        {children}
      </Label>
    </Pressable>
  );
};
