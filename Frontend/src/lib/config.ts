import {getDefaultConfig} from '@rainbow-me/rainbowkit';
import {http} from '@wagmi/core';
import {mainnet, arbitrumSepolia, sepolia,} from '@wagmi/core/chains';
import { coreDaoTest } from 'constants/chains/coreDaoTest';
import { bevmTest } from 'constants/chains/bevmTest';
import { merlinTest } from 'constants/chains/merlinTest';

export const config = getDefaultConfig({
  appName: 'bqlab-staking',
  projectId: 'ce6dae532a54b2279fa33843861685b8',
  chains: [coreDaoTest, bevmTest, merlinTest],
  transports: {
    [coreDaoTest.id]: http(),
    [bevmTest.id]: http(),
    [merlinTest.id]: http(),
  },
});
