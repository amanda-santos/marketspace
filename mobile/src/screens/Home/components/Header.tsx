import { ReactElement } from "react";
import { Flex, Image, Spacer, Text } from "native-base";
import { Plus } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import defaultAvatar from "@assets/default-avatar.png";

export const Header = (): ReactElement => {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleCreateProductClick = () => {
    navigation.navigate("createProduct");
  };

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
        onPress={handleCreateProductClick}
      />
    </Flex>
  );
};
