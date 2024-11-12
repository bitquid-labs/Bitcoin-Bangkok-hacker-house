import { Chain, defineChain } from 'viem'

export const bevmTest = defineChain({
  id: 11503,
  name: 'BEVM Testnet',
  nativeCurrency: { name: 'BTC ', symbol: 'BTC ', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://testnet.bevm.io/'] },
  },
  blockExplorers: {
    default: { name: 'BemExplorer', url: 'https://scan-testnet.bevm.io/' },
  },
  contracts: {
  },
})