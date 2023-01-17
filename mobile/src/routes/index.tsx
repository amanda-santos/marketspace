import { useTheme, Box } from "native-base";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export const Routes = () => {
  const { colors } = useTheme();

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[100];

  return (
    <Box flex={1} bg="gray.100">
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </Box>
  );
};
