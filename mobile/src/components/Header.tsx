import { ReactElement } from "react";
import { TouchableOpacity } from "react-native";
import { ArrowLeft } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { Box, Text } from "native-base";

type HeaderProps = {
  title?: string;
  showBackButton?: boolean;
  rightSideButton?: ReactElement;
};

export const Header = ({
  title = "",
  showBackButton = false,
  rightSideButton,
}: HeaderProps): ReactElement => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      py={6}
    >
      {showBackButton && (
        <TouchableOpacity onPress={handleGoBack}>
          <ArrowLeft />
        </TouchableOpacity>
      )}

      <Text fontSize="lg" fontWeight="bold">
        {title}
      </Text>

      {rightSideButton ?? <Box />}
    </Box>
  );
};
