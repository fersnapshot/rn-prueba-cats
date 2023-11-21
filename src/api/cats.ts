import axios from 'axios';

import { Breed, ImageBreed } from '#models';
import { consoleTime, sleep } from '#helpers';

interface ImagesBreedProps {
  breedId: string;
  page: number;
  limit: number;
}

export const CatsAPI = {
  getAllBreeds: async (): Promise<Breed[]> => {
    consoleTime('getAllBreeds');
    await sleep(2);

    const { data } = await axios.get<Breed[]>('/breeds');
    return data.filter(d => d.image != null);
  },

  getAllImagesBreed: async ({
    breedId,
    page,
    limit,
  }: ImagesBreedProps): Promise<ImageBreed[]> => {
    consoleTime('getAllImagesBreed', breedId, page, limit);
    await sleep(2);

    const { data } = await axios.get<ImageBreed[]>(
      `/images/search?breed_ids=${breedId}&page=${page}&limit=${limit}&include_breeds=false`,
    );
    return data;
  },
};
