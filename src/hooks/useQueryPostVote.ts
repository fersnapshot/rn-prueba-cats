import { useMutation, useQueryClient } from '@tanstack/react-query';

import { VotesAPI } from '#api';
import { Vote } from '#models';

export const useQueryPostVote = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: VotesAPI.postVote,
    onSuccess: vote => {
      queryClient.setQueryData<Vote[]>(['votes'], oldData => {
        if (oldData != null) {
          const filterData = oldData.filter(v => v.image_id !== vote.image_id);
          return [...filterData, vote];
        }
      });
    },
  });

  return mutation;
};
