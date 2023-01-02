import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

type ButtonProps = IButtonProps & {
  title: string;
  variant?: "black" | "blue" | "grey";
};

export const Button = ({ title, variant = "grey", ...rest }: ButtonProps) => {
  const getBackgroundColor = (variant: string) => {
    switch (variant) {
      case "black":
        return "gray.700";
      case "blue":
        return "blue.500";
      case "grey":
      default:
        return "gray.300";
    }
  };

  const backgroundColor = getBackgroundColor(variant);

  return (
    <ButtonNativeBase
      w="full"
      h={12}
      bg={backgroundColor}
      borderWidth={0}
      borderColor="green.500"
      rounded="sm"
      _pressed={{
        bg: backgroundColor,
        opacity: 0.8,
      }}
      {...rest}
    >
      <Text
        color={variant === "grey" ? "gray.700" : "gray.100"}
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
};
