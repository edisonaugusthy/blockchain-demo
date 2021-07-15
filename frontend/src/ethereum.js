import { ethers, Contract } from 'ethers';
import ItemManager from './contracts/ItemManager.json';
import PaymentManager from './contracts/PaymentManager.json';

const getBlockChain = () => {
    return new Promise((resolve, reject) => {
        const load = async (resolve) => {
            if (window.ethereum) {
                await window.ethereum.enable();
                const provider = new ethers.providers.Web3Provider(window.ethereum)
                const signer = provider.getSigner()
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const account = accounts[0];
                const itemManager = new Contract(
                    window.ethereum.selectedAddress,
                    ItemManager.abi,
                    signer);
                const paymentManager = new Contract(
                    window.ethereum.selectedAddress,
                    PaymentManager.abi,
                    signer);
                resolve({ itemManager, paymentManager, account })

            } else {
                ;

                resolve({ itemManager: undefined, paymentManager: undefined, account: undefined })
            }
        }

        load(resolve);
    })
}
export default getBlockChain;