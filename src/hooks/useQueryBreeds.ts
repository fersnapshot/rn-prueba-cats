import { useQuery } from '@tanstack/react-query';

import { CatsAPI } from '#api';

export const useQueryBreeds = () => {
  const {
    data: breeds = [],
    error,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['breeds'],
    queryFn: CatsAPI.getAllBreeds,
    // refetchOnWindowFocus: false,
    // staleTime: 1000 * 60 * 60,
  });

  return {
    breeds,
    isLoading,
    error,
    isError,
  };
};
