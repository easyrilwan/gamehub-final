import InfiniteScroll from "react-infinite-scroll-component";
import { Fragment } from "react/jsx-runtime";

import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";

import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

export default function GameGrid() {
  const {
    data,
    error,
    isLoading,
    // isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return error && <Text>{error.message}</Text>;

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <Box padding="10px">
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={fetchNextPage}
        loader={<Spinner />}
      >
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}

          {data?.pages.map((page, index) => (
            <Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>

      {/* {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )} */}
    </Box>
  );
}
