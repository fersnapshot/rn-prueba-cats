import axios from 'axios';

import { Breed } from '#models';

export const CatsAPI = {
  getAllBreeds: async (): Promise<Breed[]> => {
    const { data } = await axios.get<Breed[]>('/breeds');
    return data.filter(d => d.image != null);
  },
};
