import { cookieStorage, createStorage } from 'wagmi';

import { Chain } from 'viem';
import { RootStockTest } from '../constants/chains/RootStockTest';

export type ChainType = Chain & {
  logo?: string;
  chainNickName?: string;
  faucet?: string;
};

export const chains = [RootStockTest] as const;
