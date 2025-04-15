import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export default function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="teal"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>Dark mode</Text>
    </HStack>
  );
}
