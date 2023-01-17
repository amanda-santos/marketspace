import { Box, Flex, Link, Spacer, Text, useTheme, VStack } from "native-base";
import { ArrowRight, Tag } from "phosphor-react-native";

import { Header } from "@components/Header";

export const Home = () => {
  const { colors } = useTheme();

  return (
    <VStack px={6} py={8}>
      <Header />

      <Text fontSize="md" color="gray.500">
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
          <Text fontWeight="bold" color="blue.700" textDecoration="none" mr={2}>
            Meus anúncios
          </Text>
          <ArrowRight color={colors.blue["700"]} size={16} />
        </Link>
      </Flex>
    </VStack>
  );
};
