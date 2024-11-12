require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.27",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true,
    },
  },
  networks: {
    bob: {
      url: "https://bob-sepolia.rpc.gobob.xyz/",
      accounts: [PRIVATE_KEY],
    },
    rootstock: {
      url: "https://rpc.testnet.rootstock.io/0xmYpavxwaSj27BhDo1j5rzrLEd8Gt-T",
      accounts: [PRIVATE_KEY],
    },
    citrea: {
      url: "rpc.testnet.citrea.xyz",
      accounts: [PRIVATE_KEY],
    },
    merlin: {
      url: "https://testnet-rpc.merlinchain.io",
      accounts: [PRIVATE_KEY],
    },
  },
};
