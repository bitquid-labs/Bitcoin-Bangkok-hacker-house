import { Chain, defineChain } from 'viem'

export const BOBSepolia = defineChain({
  id: 808813,
  name: 'BOB Sepolia',
  nativeCurrency: { name: 'ETH ', symbol: 'ETH ', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://bob-sepolia.rpc.gobob.xyz/'] },
  },
  blockExplorers: {
    default: { name: 'BobSepoliaExplorer', url: 'https://bob-sepolia.explorer.gobob.xyz/' },
  },
  contracts: {
  },
})