import { ReactElement, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Center,
  Checkbox,
  Flex,
  HStack,
  Heading,
  Radio,
  ScrollView,
  Stack,
  Switch,
  Text,
  TextArea,
  VStack,
  View,
  useTheme,
} from "native-base";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "@components/Input";
import { Plus } from "phosphor-react-native";

export const ProductForm = (): ReactElement => {
  const { colors } = useTheme();

  return (
    <VStack space={4} alignItems="flex-start">
      <VStack space={2}>
        <Text fontSize="md" fontWeight="bold">
          Imagens
        </Text>
        <Text fontSize="sm">
          Escolha até 3 imagens para mostrar o quando o seu produto é incrível!
        </Text>

        <Box
          w={100}
          h={100}
          backgroundColor="gray.300"
          borderRadius={6}
          alignItems="center"
          justifyContent="center"
        >
          <Plus color={colors.gray["400"]} />
        </Box>
      </VStack>

      <VStack space={2}>
        <Text fontSize="md" fontWeight="bold">
          Sobre o produto
        </Text>

        <Input placeholder="Título do anúncio" />

        <TextArea
          placeholder="Descrição do produto"
          bg="gray.100"
          h={160}
          px={4}
          borderWidth={0}
          fontSize="md"
          color="gray.700"
          fontFamily="body"
          placeholderTextColor="gray.400"
          autoCompleteType=""
          _focus={{
            bgColor: "gray.100",
            borderWidth: 1,
            borderColor: "gray.500",
          }}
        />

        <Radio.Group
          name="myRadioGroup"
          accessibilityLabel="favorite number"
          colorScheme="blue"
        >
          <Flex direction="row" alignItems="center">
            <Radio value="one" my={1}>
              Produto novo
            </Radio>
            <Radio value="two" my={1} ml={4}>
              Produto usado
            </Radio>
          </Flex>
        </Radio.Group>
      </VStack>

      <VStack space={2} alignItems="flex-start">
        <Text fontSize="md" fontWeight="bold">
          Venda
        </Text>

        <Input placeholder="Valor do produto" />

        <Text fontSize="sm" fontWeight="bold">
          Aceita troca?
        </Text>

        <Switch size="lg" mt={-2} onTrackColor="blue.500" />

        <Text fontSize="sm" fontWeight="bold">
          Meios de pagamento aceitos
        </Text>

        <VStack space={2} alignItems="flex-start" mb={8}>
          {/* <Checkbox.Group accessibilityLabel="Escolha os meios de pagamento aceitos"> */}
          <Checkbox isChecked={true} colorScheme="blue" value="boleto">
            Boleto
          </Checkbox>
          <Checkbox value="pix" colorScheme="blue">
            Pix
          </Checkbox>
          <Checkbox value="money" colorScheme="blue">
            Dinheiro
          </Checkbox>
          <Checkbox value="creditCard" colorScheme="blue">
            Cartão de Crédito
          </Checkbox>
          <Checkbox value="bankDeposit" colorScheme="blue">
            Depósito Bancário
          </Checkbox>
          {/* </Checkbox.Group> */}
        </VStack>
      </VStack>
    </VStack>
  );
};
