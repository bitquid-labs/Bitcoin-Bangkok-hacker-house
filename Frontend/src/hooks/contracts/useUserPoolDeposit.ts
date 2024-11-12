import { useEffect } from 'react';

import { IPoolContract } from "constants/contracts";

import {useBlockNumber, useReadContract} from 'wagmi';
import { Deposits } from "types/main";

export const useUserPoolDeposit = (poolId: number, address: string) => {
  const {data: blockNumber} = useBlockNumber({watch: true});
  const {data: userDeposit, refetch} = useReadContract({
    abi: IPoolContract.abi,
    address: IPoolContract.address as `0x${string}`,
    functionName: 'getUserDeposit',
    args: [poolId, address],
  })

  useEffect(() => {
    refetch();
  }, [blockNumber]);

  if (!userDeposit) return undefined;

  try {
    const result = userDeposit as Deposits;
    if (!result) return undefined;

    return result;


  } catch (error) {
    return undefined;
  }
};
