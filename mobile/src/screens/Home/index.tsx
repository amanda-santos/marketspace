import { ReactElement } from "react";
import { ScrollView, VStack } from "native-base";

import { ActiveAds, Header, Search } from "./components";
import { ProductList } from "@components/ProductList";

export const Home = (): ReactElement => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={6} py={8} backgroundColor="gray.200">
        <Header />
        <ActiveAds />
        <Search />
        <ProductList />
      </VStack>
    </ScrollView>
  );
};
