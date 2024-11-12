import { useEffect } from 'react';

import { IPoolContract } from "constants/contracts";

import {useBlockNumber, useReadContract} from 'wagmi';
import { Deposits } from "types/main";
import BqBTCABI from "../../constants/abi/BQBTC.json"
import { CustomNetworks, getBQBTCAddressByNetwork } from 'lib/address';
import { formatEther } from 'viem';

export const useBQBTCBalance = (address: string, networkId: number) => {
  const btcAddress = getBQBTCAddressByNetwork(networkId);
  const {data: blockNumber} = useBlockNumber({watch: true});
  const {data: userTokenBalance, refetch} = useReadContract({
    abi: BqBTCABI,
    address: btcAddress as `0x${string}`,
    functionName: 'balanceOf',
    args: [address],
  })

  useEffect(() => {
    refetch();
  }, [blockNumber]);

  if (!userTokenBalance) return '0';

  try {
    const result = userTokenBalance as bigint;
    if (!result) return undefined;

    return formatEther(result);
  } catch (error) {
    return '0';
  }
};
