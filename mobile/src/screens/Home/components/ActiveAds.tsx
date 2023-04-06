import { ReactElement } from "react";
import { Box, Flex, Link, Spacer, Text, useTheme } from "native-base";
import { ArrowRight, Tag } from "phosphor-react-native";

export const ActiveAds = (): ReactElement => {
  const { colors } = useTheme();

  return (
    <>
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
          <Text fontWeight="bold" color="blue.700" textDecoration="none" mr={2}>
            Meus anúncios
          </Text>
          <ArrowRight color={colors.blue["700"]} size={16} />
        </Link>
      </Flex>
    </>
  );
};
