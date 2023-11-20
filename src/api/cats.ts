import axios from 'axios';

import { Breed, ImageBreed } from '#models';

interface ImagesBreedProps {
  breedId: string;
  page: number;
  limit: number;
}

// TODO: pruebas
const sleep = (seconds: number) =>
  new Promise(resolve => setTimeout(resolve, seconds * 1000));

export const CatsAPI = {
  getAllBreeds: async (): Promise<Breed[]> => {
    await sleep(2);

    const { data } = await axios.get<Breed[]>('/breeds');
    return data.filter(d => d.image != null);
  },

  getAllImagesBreed: async ({
    breedId,
    page,
    limit,
  }: ImagesBreedProps): Promise<ImageBreed[]> => {
    console.log('getAllImagesBreed', breedId, page, limit);
    await sleep(2);

    const { data } = await axios.get<ImageBreed[]>(
      `/images/search?breed_ids=${breedId}&page=${page}&limit=${limit}&include_breeds=false`,
    );
    return data;
  },
};
