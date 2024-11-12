import {getDefaultConfig} from '@rainbow-me/rainbowkit';
import {http} from '@wagmi/core';
import {mainnet, arbitrumSepolia, sepolia,} from '@wagmi/core/chains';
import { bobSepolia } from 'viem/chains';
import { rootstockTestnet } from 'viem/chains';

export const config = getDefaultConfig({
  appName: 'bqlab-staking',
  projectId: 'ce6dae532a54b2279fa33843861685b8',
  chains: [bobSepolia, rootstockTestnet],
  transports: {
    [rootstockTestnet.id]: http(),
    [bobSepolia.id]: http(),
  },
});
