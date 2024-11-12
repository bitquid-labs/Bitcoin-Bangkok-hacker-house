import React, { PropsWithChildren } from "react";
import { WagmiProvider, createConfig, http } from "wagmi";
import { mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

import { config } from "lib/config";

// const config = createConfig(
//   getDefaultConfig({
//     // Your dApps chains
//     chains: [mainnet],
//     transports: {
//       // RPC URL for each chain
//       [mainnet.id]: http(
//         `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}`,
//       ),
//     },

//     // Required API Keys
//     walletConnectProjectId: "e0702c8a098d75694e60020ccafab10b",

//     // Required App Info
//     appName: "BQLabs",

//     // Optional App Info
//     appDescription: "Your App Description",
//     appUrl: "https://family.co", // your app's url
//     appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
//   }),
// );

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: PropsWithChildren) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>
          {children}
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};