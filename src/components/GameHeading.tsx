import { Heading } from "@chakra-ui/react";

import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

export default function GameHeading() {
  const genreId = useGameQueryStore((store) => store.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((store) => store.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
}
