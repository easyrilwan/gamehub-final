import { Link } from "react-router-dom";

import { HStack, Image } from "@chakra-ui/react";

import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

export default function NavBar() {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" overflow="hidden" />
      </Link>

      <SearchInput />

      <ColorModeSwitch />
    </HStack>
  );
}
