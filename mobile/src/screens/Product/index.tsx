import { Box, Flex, HStack, Image, Text, VStack } from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeft,
  Bank,
  Barcode,
  CreditCard,
  Money,
  QrCode,
  WhatsappLogo,
} from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

import defaultAvatar from "@assets/default-avatar.png";
import couch from "@assets/couch.jpg";
import { Button } from "@components/Button";
import { Label } from "@components/Label";

type RouteParamsProps = {
  productId: string;
};

export const Product = () => {
  const route = useRoute();
  const { productId } = route.params as RouteParamsProps;
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <VStack flex={1} backgroundColor="gray.200">
        <Box py={6} px={6}>
          <TouchableOpacity onPress={handleGoBack}>
            <ArrowLeft />
          </TouchableOpacity>
        </Box>

        <Image source={couch} alt="" width="100%" height={280} />

        <Box
          py={4}
          px={6}
          flexDirection="column"
          flexWrap="wrap"
          alignItems="flex-start"
        >
          <Flex direction="row" align="center" justify="flex-start">
            <Image
              source={defaultAvatar}
              defaultSource={defaultAvatar}
              alt=""
              size={6}
              mr={2}
            />

            <Text>Makenna Baptista</Text>
          </Flex>

          <Label text="Novo" mt={6} />

          <Text fontSize="lg" fontWeight="bold" color="gray.700" mt={2}>
            Sofá
          </Text>

          <Text mt={2}>
            Cras congue cursus in tortor sagittis placerat nunc, tellus arcu.
            Vitae ante leo eget maecenas urna mattis cursus. Mauris metus amet
            nibh mauris mauris accumsan, euismod. Aenean leo nunc, purus iaculis
            in aliquam.
          </Text>

          <Text mt={4}>
            <Text fontWeight="bold">Aceita troca?</Text> Sim
          </Text>

          <Text mt={4} mb={2} fontWeight="bold">
            Meios de pagamento:
          </Text>

          <Flex direction="row" align="center" justify="center">
            <Barcode size={16} /> <Text color="gray.600">Boleto</Text>
          </Flex>

          <Flex direction="row" align="center" justify="center">
            <QrCode size={16} /> <Text color="gray.600">Pix</Text>
          </Flex>

          <Flex direction="row" align="center" justify="center">
            <Money size={16} /> <Text color="gray.600">Dinheiro</Text>
          </Flex>

          <Flex direction="row" align="center" justify="center">
            <CreditCard size={16} />{" "}
            <Text color="gray.600">Cartão de Crédito</Text>
          </Flex>

          <Flex direction="row" align="center" justify="center">
            <Bank size={16} /> <Text color="gray.600">Depósito Bancário</Text>
          </Flex>
        </Box>
      </VStack>

      <HStack
        backgroundColor="gray.100"
        py={8}
        px={6}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize="xl" fontWeight="bold" color="blue.700">
          <Text fontSize="sm">R$</Text> 120,00
        </Text>

        <Button
          title="Entrar em contato"
          variant="blue"
          icon={<WhatsappLogo color="white" weight="fill" size={16} />}
          w={169}
        ></Button>
      </HStack>
    </>
  );
};
