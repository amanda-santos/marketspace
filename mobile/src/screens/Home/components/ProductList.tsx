import { ReactElement } from "react";
import { Box, HStack, VStack } from "native-base";

import { ProductCard } from "@components/ProductCard";

export const ProductList = (): ReactElement => {
  return (
    <Box mt={4}>
      <HStack justifyContent="space-between">
        <VStack space={4}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </VStack>
        <VStack space={4}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </VStack>
      </HStack>
    </Box>
  );
};
