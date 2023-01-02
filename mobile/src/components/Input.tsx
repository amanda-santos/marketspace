import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
} from "native-base";

type InputProps = IInputProps & {
  errorMessage?: string | null;
};

export const Input = ({
  errorMessage = null,
  isInvalid,
  ...rest
}: InputProps) => {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} mb={4}>
      <NativeBaseInput
        bg="gray.100"
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
          borderColor: "gray.500",
        }}
        {...rest}
      />

      <FormControl.ErrorMessage _text={{ color: "red.500" }} mt={1}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};
