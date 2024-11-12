import { Address } from 'viem';
import { JsonFragment } from '@ethersproject/abi';
import bqBTCJSON from './abis/bqBTC.json'
import ICoverJSON from './abis/bqBTC.json'
import IPoolJSON from './abis/bqBTC.json'

export type AddressesType = {
  [key: string]: Address;
};

export type ContractType = {
  abi: JsonFragment[];
  addresses: AddressesType;
};

export const bqBTCContract: ContractType = {
  abi: bqBTCJSON,
  addresses: {
    rootstock: '0x62F7B0030bb0827a2B685eDC028a021168e9eEF7',
  },
};


export const ICoverContract: ContractType = {
  abi: ICoverJSON,
  addresses: {
    rootstock: '0x2047885da51F7f1B24C9186189B6e4bbE902d382',
  },
};


export const IPollContract: ContractType = {
  abi: IPoolJSON,
  addresses: {
    rootstock: '0xC0015ace24aa369A842fc89855e03bdEB94b965f',
  },
};