import { ReactElement } from "react";
import { HStack } from "native-base";
import { ArrowLeft, Tag } from "phosphor-react-native";

import { Button } from "@components/Button";

export const PreviewModeFooter = (): ReactElement => {
  return (
    <HStack
      p={6}
      backgroundColor="gray.100"
      justifyContent="space-between"
      alignItems="center"
    >
      <Button
        title="Voltar e editar"
        variant="grey"
        icon={<ArrowLeft size={16} />}
        w={169}
      />
      <Button
        title="Publicar"
        variant="blue"
        icon={<Tag color="white" size={16} />}
        w={169}
      />
    </HStack>
  );
};
