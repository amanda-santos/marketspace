import { ReactElement } from "react";
import { VStack } from "native-base";
import { Power, TrashSimple } from "phosphor-react-native";

import { Button } from "@components/Button";

type EditModeFooterProps = {
  isProductActive: boolean;
};

export const EditModeFooter = ({
  isProductActive = true,
}: EditModeFooterProps): ReactElement => {
  return (
    <VStack backgroundColor="gray.100" p={6}>
      <Button
        title={isProductActive ? "Desativar anúncio" : "Reativar anúncio"}
        variant={isProductActive ? "black" : "blue"}
        icon={<Power color="white" size={16} />}
        w="full"
        mb={2}
      />

      <Button
        title="Excluir anúncio"
        variant="grey"
        icon={<TrashSimple size={16} />}
        w="full"
      />
    </VStack>
  );
};
