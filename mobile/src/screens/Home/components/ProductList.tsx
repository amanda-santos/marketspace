import { ReactElement } from "react";
import { Box, HStack, VStack } from "native-base";

import { ProductCard } from "@components/ProductCard";

export const ProductList = (): ReactElement => {
  return (
    <Box mt={2} mr={4}>
      <VStack justifyContent="space-between" space={4}>
        <HStack width="50%" space={4}>
          <ProductCard id="1" isNew />
          <ProductCard id="2" isNew={false} />
        </HStack>

        <HStack width="50%" space={4}>
          <ProductCard id="2" isNew={false} />
          <ProductCard id="1" isNew />
        </HStack>

        <HStack width="50%" space={4}>
          <ProductCard id="1" isNew />
          <ProductCard id="2" isNew={false} />
        </HStack>

        <HStack width="50%" space={4}>
          <ProductCard id="2" isNew={false} />
          <ProductCard id="1" isNew />
        </HStack>
      </VStack>
    </Box>
  );
};
