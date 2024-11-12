// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BQToken is ERC20, Ownable {
    uint8 private _customDecimals;
    address public poolAddress;
    address public initialOwner;

    constructor(
        string memory name,
        string memory symbol,
        uint8 decimals_,
        uint256 initialSupply,
        address _initialOwner
    ) ERC20(name, symbol) Ownable(_initialOwner) {
        _customDecimals = decimals_;
        _mint(msg.sender, initialSupply);
        initialOwner = _initialOwner;
    }

    function decimals() public view virtual override returns (uint8) {
        return _customDecimals;
    }

    function mint(address account, uint256 amount) external {
        _mint(account, amount);
    }

    function burn(address account, uint256 amount) external {
        require(
            msg.sender == initialOwner || msg.sender == poolAddress,
            "not authorized to call he function"
        );
        _burn(account, amount);
    }

    function balanceOf(
        address account
    ) public view virtual override returns (uint256) {
        return super.balanceOf(account);
    }

    function setPool(address pool) public onlyOwner {
        require(pool != address(0), "Address cant be empty");
        require(poolAddress == address(0), "Pool address already set");

        poolAddress = pool;
    }
}
