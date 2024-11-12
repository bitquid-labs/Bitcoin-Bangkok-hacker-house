import { http, createConfig } from 'wagmi'
import { base, mainnet, optimism } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'
import { RootStockTest } from '../constants/chains/RootStockTest';

const projectId = '<WALLETCONNECT_PROJECT_ID>'

export const config = createConfig({
  chains: [RootStockTest, base],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask(),
    safe(),
  ],
  transports: {
    [RootStockTest.id]: http(),
    [base.id]: http(),
  },
})