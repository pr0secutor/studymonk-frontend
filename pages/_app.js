import Footer from "@/components/Footer";
import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import '@fontsource/dm-sans';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
