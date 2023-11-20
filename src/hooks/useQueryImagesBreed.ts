import { useInfiniteQuery } from '@tanstack/react-query';

import { CatsAPI } from '#api';

const PER_PAGE = 5;

export const useQueryImagesBreed = (breedId: string) => {
  const { data, error, isLoading, isError, isFetching, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ['breed', 'images', { breedId }],
      queryFn: ({ pageParam }) =>
        CatsAPI.getAllImagesBreed({
          breedId,
          page: pageParam,
          limit: PER_PAGE,
        }),
      initialPageParam: 1,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length < PER_PAGE) {
          return;
        }
        return pages.length + 1;
      },
    });

  return {
    images: data?.pages.flat() ?? [],
    isLoading,
    isFetching,
    error,
    isError,
    fetchNextPage,
  };
};
