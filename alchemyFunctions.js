// Setup
import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
    apiKey: "n2i1pQ8KXDIMH5U4G4jEs9e5s2C55DEL",
    network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(settings);  
  
// Get the latest block
const latestBlock = alchemy.core.getBlockNumber();
    
// Get all outbound transfers for a provided address
alchemy.core
    .getTokenBalances('0x994b342dd87fc825f66e51ffa3ef71ad818b6893')
    .then(console.log);

// Get all the NFTs owned by an address
const nfts = alchemy.nft.getNftsForOwner("0xshah.eth");
    
// Listen to all new pending transactions
alchemy.ws.on(
    { method: "alchemy_pendingTransactions",
    fromAddress: "0xshah.eth" },
    (res) => console.log(res)
);