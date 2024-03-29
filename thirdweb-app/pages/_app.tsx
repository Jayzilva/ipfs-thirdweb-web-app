import type { AppProps } from "next/app";
import {ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
require('dotenv').config()


// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = ChainId.Mumbai ;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
    clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID} // You can get a client id from dashboard settings
    activeChain={activeChain}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
