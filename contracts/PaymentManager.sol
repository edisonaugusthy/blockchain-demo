pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PaymentManager is ERC20 {
    uint256 public _tokenIds;

    constructor() ERC20("payment", "poc") {}

    function buyItem(
        address to,
        address from,
        uint256 amount
    ) external returns (bool) {
        return transferFrom(from, to, amount);
    }
}
