import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Box, Flex, Image, Text } from "native-base";

import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Label } from "./Label";

import defaultAvatar from "@assets/default-avatar.png";
import couch from "@assets/couch.jpg";

type ProductCardProps = Pick<Product, "id" | "isNew" | "isActive">;

export const ProductCard = ({ id, isNew, isActive }: ProductCardProps) => {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleOpenProductDetails = () => {
    navigation.navigate("product", {
      productId: id,
    });
  };

  return (
    <TouchableOpacity onPress={handleOpenProductDetails}>
      <Box position="relative" mb={1}>
        <Box opacity={isActive ? 1 : 0.5}>
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

          <Label
            text={isNew ? "Novo" : "Usado"}
            variant={isNew ? "blue" : "dark-gray"}
            position="absolute"
            right={1}
            top={1}
          />
        </Box>

        {!isActive && (
          <Text
            textTransform="uppercase"
            fontSize="xxs"
            fontWeight="bold"
            color="gray.700"
            position="absolute"
            bottom={1}
            left={1}
          >
            Anúncio desativado
          </Text>
        )}
      </Box>

      <Text fontSize="sm" color={isActive ? "gray.600" : "gray.400"}>
        Sofá 1,80m
      </Text>

      <Flex direction="row" align="center">
        <Text
          fontSize="xs"
          mr={1}
          fontWeight="bold"
          color={isActive ? "gray.600" : "gray.400"}
        >
          R$
        </Text>
        <Text
          fontSize="md"
          fontWeight="bold"
          color={isActive ? "gray.600" : "gray.400"}
        >
          1.200,00
        </Text>
      </Flex>
    </TouchableOpacity>
  );
};
