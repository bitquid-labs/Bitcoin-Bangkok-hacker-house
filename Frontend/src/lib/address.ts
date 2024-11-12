export enum CustomNetworks {
  COREDAO = 1115,
  BEVM = 11503,
  MERLIN = 686868,  
}

const BqBTCAddresses = [
  "0xd4d6D32774267870CB38dd00af8B7edB96eBEfC7",   //CoreDao
  "0xf3617C7AAfe6b2e6e8eCabB942cd67144a66E624", //BEVM
  "0x41d4E0605002D4dbe450A42f8e89ae5Ed5f9bE7a",   //Merlin address
]

export const getBQBTCAddressByNetwork = (network: CustomNetworks): string => {
  switch (network) {
    case CustomNetworks.COREDAO:
      return BqBTCAddresses[0];
    case CustomNetworks.BEVM:
      return BqBTCAddresses[1];
    case CustomNetworks.MERLIN:
      return BqBTCAddresses[2];
    default:
      return '';
  }
}


const IPoolAddresses = [
  "0x09e63421b068E3c50083fE4AAA3c11bBB260A1BF", //CoreDao
  "0xf3617C7AAfe6b2e6e8eCabB942cd67144a66E624", //BEVM
  "0xe9fC80e448c71dF32bc27b5564Fd0DE4D3672e9e", //Merlin address
];

export const getIPoolAddressByNetwork = (network: CustomNetworks): string => {
  switch (network) {
    case CustomNetworks.COREDAO:
      return IPoolAddresses[0];
    case CustomNetworks.BEVM:
      return IPoolAddresses[1];
    case CustomNetworks.MERLIN:
      return IPoolAddresses[2];
    default:
      return "";
  }
};


