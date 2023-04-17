import { ReactElement } from "react";
import { HStack, Text } from "native-base";
import { WhatsappLogo } from "phosphor-react-native";

import { Button } from "@components/Button";

export const RegularFooter = (): ReactElement => {
  return (
    <HStack
      p={6}
      backgroundColor="gray.100"
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
      />
    </HStack>
  );
};
