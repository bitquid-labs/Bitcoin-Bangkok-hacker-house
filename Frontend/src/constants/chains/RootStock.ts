import { Chain, defineChain } from 'viem'

export const RootStockTest = defineChain({
  id: 31,
  name: 'Rootstock Testnet',
  nativeCurrency: { name: 'tRBTC ', symbol: 'tRBTC ', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://public-node.testnet.rsk.co/'] },
  },
  blockExplorers: {
    default: { name: 'RootStockTestExplorer', url: 'https://explorer.testnet.rootstock.io/' },
  },
  contracts: {
  },
})