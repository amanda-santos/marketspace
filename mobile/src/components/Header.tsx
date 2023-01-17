import { Flex, Image, Spacer, Text } from "native-base";

import defaultAvatar from "@assets/default-avatar.png";
import { Plus } from "phosphor-react-native";

import { Button } from "./Button";

export const Header = () => {
  return (
    <Flex direction="row" align="center">
      <Image
        source={defaultAvatar}
        defaultSource={defaultAvatar}
        alt=""
        size={45}
      />

      <Spacer />

      <Text fontSize="lg">
        Boas vindas, {"\n"}
        <Text fontWeight="bold">Maria</Text>!
      </Text>

      <Spacer />

      <Button
        title="Criar anúncio"
        icon={<Plus color="white" size={16} />}
        variant="black"
        w="144"
      />
    </Flex>
  );
};
