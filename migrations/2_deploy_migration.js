const ItemManager = artifacts.require("ItemManager.sol");
const PaymentManager = artifacts.require("PaymentManager.sol")
module.exports = function (deployer) {
    deployer.deploy(ItemManager);
    deployer.deploy(PaymentManager);
};
