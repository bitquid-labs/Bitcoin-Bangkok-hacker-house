import { JsonFragment } from "@ethersproject/abi";
import GovABI from "./abi/Gov.json";
import IPoolABI from "./abi/InsurancePool.json"
import BqBTCABI from "./abi/BQBTC.json"

export type ContractType = {
  abi: JsonFragment[];
  address: `0x${string}`;
};

export const GovContract: ContractType = {
  abi: GovABI,
  address: "0xF9ad317C2E6d3B2836258489383363c76b2DBdaA",
};

export const IPoolContract: ContractType = {
  abi: IPoolABI,
  address: "0x09e63421b068E3c50083fE4AAA3c11bBB260A1BF",
};

export const BqBTCContract: ContractType = {
  abi: BqBTCABI,
  address: "0x8872D630769288D4773933A434185605769127F5",
}
