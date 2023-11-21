import { useQuery } from '@tanstack/react-query';

import { VotesAPI } from '#api';

export const useQueryVotes = () => {
  const { data: votes = [], isLoading: votesIsLoading } = useQuery({
    queryKey: ['votes'],
    queryFn: VotesAPI.getAllVotes,
  });

  return {
    votes,
    votesIsLoading,
  };
};
