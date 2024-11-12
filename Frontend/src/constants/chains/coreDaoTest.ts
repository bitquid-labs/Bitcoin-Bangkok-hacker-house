import { Chain, defineChain } from 'viem'

export const coreDaoTest = defineChain({
  id: 1115,
  name: 'Core Blockchain Testnet',
  nativeCurrency: { name: 'tCORE', symbol: 'tCORE', decimals: 8 },
  rpcUrls: {
    default: { http: ['https://rpc.test.btcs.network/'] },
  },
  blockExplorers: {
    default: { name: 'CoreExplorer', url: 'https://scan.test.btcs.network/' },
  },
  contracts: {
  },
})