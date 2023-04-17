import { TouchableOpacity } from "react-native";
import {
  Box,
  Flex,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
  View,
} from "native-base";
import { useRoute } from "@react-navigation/native";
import {
  ArrowLeft,
  Bank,
  Barcode,
  CreditCard,
  Money,
  PencilSimpleLine,
  QrCode,
} from "phosphor-react-native";

import { Label } from "@components/Label";
import { Header } from "@components/Header";
import { Footer } from "./components/Footer";

import couch from "@assets/couch.jpg";
import defaultAvatar from "@assets/default-avatar.png";
import { FooterMode } from "./constants";

type RouteParamsProps = {
  productId: string;
  isInPreviewMode?: boolean;
  canEdit?: boolean;
};

export const Product = () => {
  const route = useRoute();
  const {
    productId,
    // isInPreviewMode,
    // canEdit,
  } = route.params as RouteParamsProps;

  const isActive = false;

  const isInPreviewMode = false;
  const canEdit = true;

  const getFooterMode = (): FooterMode => {
    if (isInPreviewMode) return FooterMode.PREVIEW;
    if (canEdit) return FooterMode.EDIT;
    return FooterMode.DEFAULT;
  };

  return (
    <>
      {isInPreviewMode ? (
        <Box
          p={6}
          flexDirection="column"
          alignItems="center"
          backgroundColor="blue.500"
        >
          <Text fontWeight="bold" fontSize="md" color="white">
            Pré visualização do anúncio
          </Text>
          <Text fontSize="sm" color="white">
            É assim que seu produto vai aparecer!
          </Text>
        </Box>
      ) : (
        <Box px={6}>
          <Header
            showBackButton
            rightSideButton={
              canEdit ? (
                <TouchableOpacity>
                  <PencilSimpleLine />
                </TouchableOpacity>
              ) : (
                <></>
              )
            }
          />
        </Box>
      )}

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <VStack flex={1} backgroundColor="gray.200">
          <Box position="relative">
            <Image
              source={couch}
              alt=""
              width="100%"
              height={280}
              opacity={isActive ? 1 : 0.3}
            />

            {!isActive && (
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                justifyContent="center"
                alignItems="center"
              >
                <Text
                  textTransform="uppercase"
                  fontSize="sm"
                  fontWeight="bold"
                  color="gray.700"
                >
                  Anúncio desativado
                </Text>
              </Box>
            )}
          </Box>

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

            <Box
              flexDirection="row"
              alignItems="flex-end"
              justifyContent="space-between"
              width="100%"
            >
              <Text fontSize="lg" fontWeight="bold" color="gray.700" mt={2}>
                Sofá
              </Text>

              {(isInPreviewMode || canEdit) && (
                <Text fontSize="lg" fontWeight="bold" color="blue.500">
                  <Text fontSize="sm">R$</Text> 120,00
                </Text>
              )}
            </Box>

            <Text mt={2}>
              Cras congue cursus in tortor sagittis placerat nunc, tellus arcu.
              Vitae ante leo eget maecenas urna mattis cursus. Mauris metus amet
              nibh mauris mauris accumsan, euismod. Aenean leo nunc, purus
              iaculis in aliquam. Cras congue cursus in tortor sagittis placerat
              nunc, tellus arcu. Vitae ante leo eget maecenas urna mattis
              cursus. Mauris metus amet nibh mauris mauris accumsan, euismod.
              Aenean leo nunc, purus iaculis in aliquam.
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
      </ScrollView>

      <Footer mode={getFooterMode()} isProductActive={isActive} />
    </>
  );
};
