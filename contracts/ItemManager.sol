pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./PaymentManager.sol";

contract ItemManager is ERC721 {
    constructor() ERC721("MyCollectible", "MCO") {}

    function addItemToUser(uint256 newItemId, address user) external {
        _mint(user, newItemId);
    }

    function buyItem(
        address from,
        uint256 itemId,
        address to
    ) external returns (address) {
        transferFrom(from, to, itemId);
        return from;
    }
}
