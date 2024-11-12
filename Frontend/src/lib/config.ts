import { http, createConfig } from 'wagmi';
import { RootStockTest } from '../constants/chains/RootStockTest';

export const config = createConfig({
  // connectors,
  chains: [RootStockTest],
  transports: {
    [RootStockTest.id]: http(),
  },
  ssr: true,
});