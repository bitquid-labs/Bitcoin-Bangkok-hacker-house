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
