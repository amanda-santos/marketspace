import { Center, Spinner } from "native-base";

export const Loading = () => {
  return (
    <Center flex={1} bg="gray.100">
      <Spinner color="blue.700" />
    </Center>
  );
};
