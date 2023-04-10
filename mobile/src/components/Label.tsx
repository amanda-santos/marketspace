import { ReactElement } from "react";
import { Box, Text } from "native-base";
import { InterfaceBoxProps } from "native-base/lib/typescript/components/primitives/Box";

type LabelProps = InterfaceBoxProps & {
  text: string;
  variant?: "gray" | "dark-gray" | "blue";
};

const theme = {
  gray: {
    backgroundColor: "gray.300",
    textColor: "gray.500",
  },
  "dark-gray": {
    backgroundColor: "gray.600",
    textColor: "white",
  },
  blue: {
    backgroundColor: "blue.700",
    textColor: "white",
  },
};

export const Label = ({
  text,
  variant = "gray",
  ...rest
}: LabelProps): ReactElement => {
  const { backgroundColor, textColor } = theme[variant];

  return (
    <Box
      backgroundColor={backgroundColor}
      borderRadius={16}
      py={1}
      px={2}
      {...rest}
    >
      <Text
        textTransform="uppercase"
        fontSize="xxs"
        fontWeight="bold"
        color={textColor}
      >
        {text}
      </Text>
    </Box>
  );
};
