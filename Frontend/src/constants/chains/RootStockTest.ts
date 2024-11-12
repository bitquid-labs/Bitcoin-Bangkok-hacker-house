import { defineChain } from 'viem';

import { ChainType } from 'lib/wagmi';

export const RootStockTest: ChainType = defineChain({
  id: 31,
  chainNickName: 'Rootstock Testnet',
  name: 'Rootstock Testnet',
  nativeCurrency: { name: 'tRBTC', symbol: 'tRBTC', decimals: 8 },
  rpcUrls: {
    default: { http: ['https://public-node.testnet.rsk.co'] },
  },
  blockExplorers: {
    default: {
      name: 'RootStock',
      url: 'https://explorer.testnet.rootstock.io/',
    },
  },
  contracts: {},
});
