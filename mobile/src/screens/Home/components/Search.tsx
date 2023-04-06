import { ReactElement } from "react";
import { Flex, Text, useTheme } from "native-base";
import { MagnifyingGlass, Sliders } from "phosphor-react-native";

import { Input } from "@components/Input";

export const Search = (): ReactElement => {
  const { colors } = useTheme();

  return (
    <>
      <Text fontSize="md" color="gray.500" mt={8} mb={2}>
        Compre produtos variados
      </Text>

      <Input
        placeholder="Buscar anúncio"
        InputRightElement={
          <Flex direction="row" align="center" mr={4}>
            <MagnifyingGlass size={20} color={colors.gray["600"]} />
            <Text fontSize="xl" mx={2} color="gray.300">
              |
            </Text>
            <Sliders size={20} color={colors.gray["600"]} />
          </Flex>
        }
      />
    </>
  );
};
