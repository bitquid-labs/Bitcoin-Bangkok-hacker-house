# Pool Contract

- Use of leverage for added max cover value
- Investment arm: A percentage set aside from pool TVL for investing.

## BOB

```javascript
bob: {
      url: "https://bob-sepolia.rpc.gobob.xyz/",
      accounts: ,
    },
```

[Docs](https://docs.gobob.xyz/)

## Rootstock

```
rootstock: {
      url: "https://rpc.testnet.rootstock.io/0xmYpavxwaSj27BhDo1j5rzrLEd8Gt-T",
      accounts: ,
    },
```

[Docs](https://dev.rootstock.io/?_gl=1*19yyk7i*_gcl_au*MjQ1MzcxNzY4LjE3MjY3MzkzMDU.)

# Frontend Integration- Changes made to the contract

## InsurancePool

- **createVault**
  For creating vaults/ strategies

- **poolWithdraw**
  Supports withdrawals from individual pools.

- **poolDeposit**
  Allows deposits into individual pools. Now a payable function that either the deposit amount for ERC20 tokens or the native token’s value for deposits.

- **vaultWithdraw**
  Enables withdrawals from vaults or strategies.

- **vaultDeposit**
  Allows deposits into vaults or strategies. A payable function that takes in either the native token’s value for deposits or an ERC20 token amount.

- **getVault**
  To get a specific vault. It contains all of the pools of the vault.

- **getVaultPools**
  To get all the pools in a specific vault

- **getVaultDeposits**

To get all user deposits into the individual pools in a vault

## InsuranceCover

- **clamPayoutForVault**
  This automates the payout for all the pools within a vault

## Deployed Contracts

- **Rootstock**

  **BQ BTC Address**: 0xa3E2eBB057E4A2AF841cA256e96B12535255aDB5

  **Pool Address**: 0x879Ef54498C0285BeEcA0768f416Ad43c9dbb64A

  **Cover Address**: 0x192828a240CEb9fD878e6ABbA705C456548051F4

- **BOB**

  **BQ BTC Address**: 0x985F96344444971ee56f2c9840960C09C0EF75e3

  **Pool Address**: 0x2893e983AA01627AE759EfCcdeC3b4c4Aaa6bEe8

  **Cover Address**: 0x792da7F16e7fc5bE859e00C0F0ac11E140F1FD99
