import { useEffect } from 'react';
import { useBlockNumber, useReadContract } from 'wagmi';
import { IPoolContract } from 'constants/contracts';
import { InsurancePoolType } from 'types/main';

export const useAllInsurancePoolsByAddress = (address: string) => {
  const { data: blockNumber } = useBlockNumber();
  const { data: insurancePools, refetch } = useReadContract({
    abi: IPoolContract.abi,
    address: IPoolContract.address as `0x${string}`,
    functionName: 'getPoolsByAddress',
    args: [address],
  });

  useEffect(() => {
    refetch();
  }, [blockNumber]);

  console.log('insurancePools for mystake : ', insurancePools);
  if (!insurancePools) return [];

  try {
    const result = insurancePools as InsurancePoolType[];
    if (!result) return [];

    return result;
  } catch (error) {
    return [];
  }
};
