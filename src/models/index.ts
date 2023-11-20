import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Navigation

export type RootStackParamList = {
  CatList: undefined;
  CatPhotoList: undefined;
};

export type CatListProps = NativeStackScreenProps<
  RootStackParamList,
  'CatList'
>;
export type CatPhotoListProps = NativeStackScreenProps<
  RootStackParamList,
  'CatPhotoList'
>;
