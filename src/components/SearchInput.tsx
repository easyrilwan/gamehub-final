import { BsSearch } from "react-icons/bs";

import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export default function SearchInput() {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />

      <Input borderRadius={20} placeholder="Search games..." variant="filled" />
    </InputGroup>
  );
}
