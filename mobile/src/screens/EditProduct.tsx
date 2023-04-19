import { Box, HStack, ScrollView } from "native-base";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { ProductForm } from "@components/ProductForm";
import { ReactElement } from "react";

type FormDataProps = {
  email: string;
  password: string;
};

const signInSchema = yup.object({
  email: yup.string().required("Informe seu e-mail").email("E-mail inválido"),
  password: yup.string().required("Informe sua senha"),
});

export const EditProduct = (): ReactElement => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema),
  });

  return (
    <>
      <Box flex={1} backgroundColor="gray.200" px={6}>
        <Header showBackButton title="Editar anúncio" />
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <ProductForm />
        </ScrollView>
      </Box>
      <HStack
        px={6}
        py={4}
        backgroundColor="gray.100"
        justifyContent="space-between"
        alignItems="center"
      >
        <Button title="Cancelar" variant="grey" size={176} />
        <Button title="Avançar" variant="black" size={176} />
      </HStack>
    </>
  );
};
