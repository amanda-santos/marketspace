import { Box, Flex, Image, Text } from "native-base";

import defaultAvatar from "@assets/default-avatar.png";
import couch from "@assets/couch.jpg";

export const ProductCard = () => {
  const isNew = true;

  return (
    <Flex>
      <Box position="relative" width={154} mb={1}>
        <Image source={couch} alt="" height={100} borderRadius={6} />

        <Image
          position="absolute"
          top={1}
          left={1}
          source={defaultAvatar}
          defaultSource={defaultAvatar}
          alt=""
          size={6}
        />

        <Text
          position="absolute"
          right="0"
          backgroundColor="blue.700"
          padding={1}
          textTransform="uppercase"
          fontSize="xs"
          fontWeight="bold"
        >
          {isNew ? "Novo" : "Usado"}
        </Text>
      </Box>

      <Text fontSize="sm" color="gray.600">
        Sofá 1,80m
      </Text>

      <Flex direction="row" align="center">
        <Text fontSize="xs" mr={1} fontWeight="bold">
          R$
        </Text>
        <Text fontSize="md" fontWeight="bold">
          1.200,00
        </Text>
      </Flex>
    </Flex>
  );
};
