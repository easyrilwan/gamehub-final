import { BsChevronDown } from "react-icons/bs";

import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

export default function PlatformSelector() {
  const { data, error } = usePlatforms();

  const setSelectedPlatformId = useGameQueryStore(
    (store) => store.setPlatformId
  );

  const selectedPlatformId = useGameQueryStore(
    (store) => store.gameQuery.platformId
  );

  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>

      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setSelectedPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
