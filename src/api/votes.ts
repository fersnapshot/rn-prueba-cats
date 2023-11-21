import axios from 'axios';

import { Vote, VoteOriginal, VoteResponse } from '#models';
import { consoleTime, sleep } from '#helpers';

export const VotesAPI = {
  getAllVotes: async (): Promise<Vote[]> => {
    consoleTime('getAllVotes');
    await sleep(2);

    const { data } = await axios.get<VoteOriginal[]>('/votes');
    const votes = data.map(
      item =>
        ({
          id: item.id,
          image_id: item.image_id,
          value: item.value,
        } as Vote),
    );
    return votes;
  },

  postVote: async ({
    imageId,
    value,
  }: {
    imageId: string;
    value: number;
  }): Promise<Vote> => {
    consoleTime('postVote', imageId, value);
    // await sleep(2);

    const { data } = await axios.post<VoteResponse>('/votes', {
      image_id: imageId,
      sub_id: 'my-user-1234',
      value,
    });

    if (data.message !== 'SUCCESS') {
      throw new Error(data.message);
    }

    return { id: data.id, image_id: data.image_id, value: data.value };
  },
};
