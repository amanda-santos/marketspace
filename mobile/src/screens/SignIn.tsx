import { useState } from "react";
import { Center, Heading, ScrollView, Text, VStack } from "native-base";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import LogoSvg from "@assets/logo.svg";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

type FormDataProps = {
  email: string;
  password: string;
};

const signInSchema = yup.object({
  email: yup.string().required("Informe seu e-mail").email("E-mail inválido"),
  password: yup.string().required("Informe sua senha"),
});

export const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async ({ email, password }: FormDataProps) => {
    try {
      setIsLoading(true);
      console.log(email, password);
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
          flex={1}
          borderBottomRadius={20}
        >
          <Center mb={16}>
            <LogoSvg />

            <Heading fontSize="4xl" mt={4}>
              marketspace
            </Heading>
            <Text>Seu espaço de compra e venda</Text>
          </Center>

          <Center width="100%">
            <Text mb="4">Acesse sua conta</Text>

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
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Senha"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.password?.message}
                  onSubmitEditing={handleSubmit(handleSignIn)}
                  returnKeyType="send"
                />
              )}
            />

            <Button
              title="Entrar"
              variant="blue"
              mt="4"
              onPress={handleSubmit(handleSignIn)}
              isLoading={isLoading}
            />
          </Center>
        </Center>

        <Center px={12} py={16}>
          <Text mb={4}>Ainda não tem acesso?</Text>
          <Button title="Criar uma conta" />
        </Center>
      </VStack>
    </ScrollView>
  );
};
