import ms from "ms";

import { useInfiniteQuery } from "@tanstack/react-query";

import Game from "../entities/Game";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((store) => store.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"), // 24hrs
  });
};

export default useGames;
