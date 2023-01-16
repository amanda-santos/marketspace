import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Center,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack,
  Button as NativeBaseButton,
  Box,
} from "native-base";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { PencilSimpleLine } from "phosphor-react-native";

import LogoSvg from "@assets/logo.svg";
import defaultAvatar from "@assets/default-avatar.png";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import { PHONE_REGEX } from "../constants";

type FormDataProps = {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

const signUpSchema = yup.object({
  name: yup
    .string()
    .required("Informe seu nome.")
    .min(3, "Informe um nome válido."),
  email: yup.string().required("Informe seu e-mail.").email("E-mail inválido."),
  phone: yup
    .string()
    .required("Informe seu telefone.")
    .matches(PHONE_REGEX, "Telefone inválido."),
  password: yup
    .string()
    .required("Informe sua senha.")
    .min(6, "A senha deve ter no mínimo 6 caracteres."),
  confirmPassword: yup
    .string()
    .required("Confirme sua senha.")
    .oneOf([yup.ref("password"), null], "As senhas não são iguais."),
});

export const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const handleClickSignIn = () => {
    navigation.navigate("signIn");
  };

  const handleSignIn = async ({
    name,
    email,
    phone,
    password,
    confirmPassword,
  }: FormDataProps) => {
    try {
      setIsLoading(true);
      console.log(name, email, phone, password, confirmPassword);
    } catch (error) {
      // const isAppError = error instanceof AppError;

      // const title = isAppError
      //   ? error.message
      //   : "Não foi possível entrar. Tente novamente mais tarde.";

      // toast.show({
      //   title,
      //   placement: "top",
      //   bgColor: "red.500",
      // });

      setIsLoading(false);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <Center
          backgroundColor="gray.200"
          px={12}
          py={8}
          flex={1}
          borderBottomRadius={20}
        >
          <Center mb={16}>
            <LogoSvg />

            <Heading fontSize="lg" mt={4} mb={3}>
              Boas vindas!
            </Heading>
            <Text textAlign="center">
              Crie sua conta e use o espaço para comprar itens variados e vender
              seus produtos
            </Text>
          </Center>

          <Center width="100%">
            <Box position="relative" mb={6}>
              <Image
                source={defaultAvatar}
                defaultSource={defaultAvatar}
                alt=""
              />

              <NativeBaseButton
                borderRadius="full"
                w={10}
                h={10}
                bg="blue.500"
                position="absolute"
                bottom="-6"
                right="-8"
                _pressed={{
                  bg: "blue.500",
                  opacity: 0.8,
                }}
              >
                <PencilSimpleLine color="white" size={16} />
              </NativeBaseButton>
            </Box>

            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Nome"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.name?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.email?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="phone"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Telefone"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.phone?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Senha"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.password?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Confirmar senha"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.confirmPassword?.message}
                  onSubmitEditing={handleSubmit(handleSignIn)}
                  returnKeyType="send"
                />
              )}
            />

            <Button
              title="Criar"
              variant="black"
              mt="4"
              onPress={handleSubmit(handleSignIn)}
              isLoading={isLoading}
            />
          </Center>
        </Center>

        <Center backgroundColor="gray.200" px={12} pt={8} pb={16}>
          <Text mb={4}>Já tem uma conta?</Text>
          <Button title="Ir para o login" onPress={handleClickSignIn} />
        </Center>
      </VStack>
    </ScrollView>
  );
};
