import React from 'react';
import {
  ColorValue,
  Pressable,
  PressableProps,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconsGlyphs from 'react-native-vector-icons/glyphmaps/MaterialIcons.json';

interface Props extends PressableProps {
  icon: keyof typeof IconsGlyphs;
  iconSize?: number;
  onPress: () => void;
  color?: ColorValue;
}
export const ButtonIcon = ({
  icon,
  iconSize = 24,
  onPress,
  color,
  ...props
}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.icon, { opacity: pressed ? 0.2 : 1 }]}
      onPress={onPress}
      {...props}
    >
      <Icon name={icon} size={iconSize} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
  },
});
