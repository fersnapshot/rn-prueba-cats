import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Navigation

export type RootStackParamList = {
  BreedList: undefined;
  BreedPhotoList: { breedId: string; name: string };
  About: undefined;
};

export type BreedListProps = NativeStackScreenProps<
  RootStackParamList,
  'BreedList'
>;
export type BreedPhotoListProps = NativeStackScreenProps<
  RootStackParamList,
  'BreedPhotoList'
>;

// Models

interface BreedOriginal {
  weight: Weight;
  id: string;
  name: string;
  cfa_url?: string;
  vetstreet_url?: string;
  vcahospitals_url?: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  lap?: number;
  alt_names?: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url?: string;
  hypoallergenic: number;
  reference_image_id?: string;
  image?: ImageBreed;
  cat_friendly?: number;
  bidability?: number;
}

export interface Breed extends BreedOriginal {
  image: ImageBreed;
}

export interface ImageBreed {
  id: string;
  width: number;
  height: number;
  url: string;
}

interface Weight {
  imperial: string;
  metric: string;
}

export interface Vote {
  id: number;
  image_id: string;
  value: number;
}

export interface VoteOriginal {
  id: number;
  image_id: string;
  value: number;
  sub_id: string;
  created_at: Date;
  country_code: string;
  image: {
    id: string;
    url: string;
  };
}

export interface VoteResponse {
  message: string;
  id: number;
  image_id: string;
  sub_id: string;
  value: number;
  country_code: string;
}
