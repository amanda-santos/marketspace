import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
  Box,
  Text,
} from "native-base";
import { useState } from "react";

type InputProps = IInputProps & {
  errorMessage?: string | null;
  prefix?: string;
};

export const Input = ({
  errorMessage = null,
  isInvalid,
  prefix,
  ...rest
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} mb={4}>
      <Box
        flexDirection="row"
        alignItems="center"
        bg="gray.100"
        borderRadius={2}
      >
        {prefix && (
          <Box
            borderWidth={isFocused ? 1 : 0}
            borderRadius={2}
            borderRightWidth={0}
            h="full"
            textAlign="center"
            flexDirection="row"
            alignItems="center"
            pl={4}
          >
            <Text>{prefix}</Text>
          </Box>
        )}
        <NativeBaseInput
          w="100%"
          borderRadius={2}
          h={12}
          px={4}
          borderWidth={0}
          fontSize="md"
          color="gray.700"
          fontFamily="body"
          placeholderTextColor="gray.400"
          isInvalid={invalid}
          _invalid={{
            borderWidth: 1,
            borderColor: "red.300",
          }}
          _focus={{
            bgColor: "gray.100",
            borderWidth: 1,
            borderLeftWidth: prefix ? 0 : 1,
            borderColor: "gray.500",
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
        />
      </Box>

      <FormControl.ErrorMessage _text={{ color: "red.500" }} mt={1}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};
