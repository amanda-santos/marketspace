import {
  Box,
  Flex,
  HStack,
  Link,
  ScrollView,
  Spacer,
  Text,
  useTheme,
  VStack,
} from "native-base";
import {
  ArrowRight,
  MagnifyingGlass,
  Sliders,
  Tag,
} from "phosphor-react-native";

import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { ProductCard } from "@components/ProductCard";

export const Home = () => {
  const { colors } = useTheme();

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={6} py={8} backgroundColor="gray.200">
        <Header />

        <Text fontSize="md" color="gray.500" mt={8}>
          Seus produtos anunciados para venda
        </Text>

        <Flex
          backgroundColor="blue.100"
          w="full"
          h={20}
          mt={3}
          borderRadius={6}
          px={5}
          direction="row"
          align="center"
          justify="center"
        >
          <Tag color={colors.blue["700"]} size={24} />

          <Spacer />

          <Box>
            <Text fontSize="xl" fontWeight="bold">
              4
            </Text>

            <Text fontSize="sm">anúncios ativos</Text>
          </Box>

          <Spacer />

          <Link alignItems="center">
            <Text
              fontWeight="bold"
              color="blue.700"
              textDecoration="none"
              mr={2}
            >
              Meus anúncios
            </Text>
            <ArrowRight color={colors.blue["700"]} size={16} />
          </Link>
        </Flex>

        <Text fontSize="md" color="gray.500" mt={8} mb={2}>
          Compre produtos variados
        </Text>

        <Input
          placeholder="Buscar anúncio"
          InputRightElement={
            <Flex direction="row" align="center" mr={4}>
              <MagnifyingGlass size={20} color={colors.gray["600"]} />
              <Text fontSize="xl" mx={2} color="gray.300">
                |
              </Text>
              <Sliders size={20} color={colors.gray["600"]} />
            </Flex>
          }
        />

        <Box mt={4}>
          <HStack justifyContent="space-between">
            <VStack space={4}>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </VStack>
            <VStack space={4}>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </VStack>
          </HStack>
        </Box>
      </VStack>
    </ScrollView>
  );
};
