import { ReactElement } from "react";
import { Box, HStack, VStack } from "native-base";

import { ProductCard } from "@components/ProductCard";

export const ProductList = (): ReactElement => {
  return (
    <Box mt={2} mr={4}>
      <VStack justifyContent="space-between" space={4}>
        <HStack width="50%" space={4}>
          <ProductCard id="1" isNew isActive />
          <ProductCard id="2" isNew={false} isActive />
        </HStack>

        <HStack width="50%" space={4}>
          <ProductCard id="2" isNew={false} isActive />
          <ProductCard id="1" isNew isActive />
        </HStack>

        <HStack width="50%" space={4}>
          <ProductCard id="1" isNew isActive />
          <ProductCard id="2" isNew={false} isActive={false} />
        </HStack>

        <HStack width="50%" space={4}>
          <ProductCard id="2" isNew={false} isActive={false} />
          <ProductCard id="1" isNew isActive={false} />
        </HStack>
      </VStack>
    </Box>
  );
};
