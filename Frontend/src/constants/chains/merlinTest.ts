import { Chain, defineChain } from 'viem'

export const merlinTest = defineChain({
  id: 686868,
  name: 'Merlin Testnet',
  nativeCurrency: { name: 'BTC ', symbol: 'BTC ', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://testnet-rpc.merlinchain.io/'] },
  },
  blockExplorers: {
    default: { name: 'MerlinExplorer', url: 'https://testnet-scan.merlinchain.io' },
  },
  contracts: {
  },
})