import { ReactElement, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Box, ScrollView, Select, Text, VStack, useTheme } from "native-base";
import { CaretDown, Plus } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

import { Header } from "@components/Header";
import { ProductList } from "@components/ProductList";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

export const MyAds = (): ReactElement => {
  const [selectedAds, setSelectedAds] = useState("all");
  const { colors } = useTheme();

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleCreateProductClick = () => {
    navigation.navigate("createProduct");
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <Box px={6}>
          <Header
            showBackButton
            title="Meus anúncios"
            rightSideButton={
              <TouchableOpacity onPress={handleCreateProductClick}>
                <Plus />
              </TouchableOpacity>
            }
          />

          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            mb={4}
          >
            <Text fontSize="sm" color="gray.600">
              8 anúncios
            </Text>

            <Select
              selectedValue={selectedAds}
              onValueChange={(itemValue) => setSelectedAds(itemValue)}
              height={8}
              minWidth={112}
              borderRadius={8}
              fontSize="sm"
              accessibilityLabel="Selecione o tipo de anúncio"
              dropdownIcon={
                <CaretDown
                  size={16}
                  color={colors.gray["500"]}
                  style={{
                    marginRight: 8,
                  }}
                />
              }
            >
              <Select.Item label="Todos" value="all" />
              <Select.Item label="Ativos" value="active" />
              <Select.Item label="Inativos" value="inactive" />
            </Select>
          </Box>

          <ProductList />
        </Box>
      </VStack>
    </ScrollView>
  );
};
