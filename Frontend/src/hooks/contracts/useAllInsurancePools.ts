import { useEffect } from 'react';

import { IPoolContract } from "constants/contracts";

import {useBlockNumber, useReadContract} from 'wagmi';
import { InsurancePoolType } from "types/main";
import { getIPoolAddressByNetwork } from 'lib/address';

export const useAllInsurancePools = (networkId: number) => {
  const IPoolAddress = getIPoolAddressByNetwork(networkId);
  const {data: blockNumber} = useBlockNumber({watch: true});
  const { data: insurancePools, refetch } = useReadContract({
    abi: IPoolContract.abi,
    address: IPoolAddress as `0x${string}`,
    functionName: "getAllPools",
    args: [],
  });

  console.log('raw insurance pools:', insurancePools)

  useEffect(() => {
    refetch();
  }, [blockNumber]);

  if (!insurancePools) return [];

  try {
    const result = insurancePools as InsurancePoolType[];
    if (!result) return [];

    return result;


  } catch (error) {
    return [];
  }
};
