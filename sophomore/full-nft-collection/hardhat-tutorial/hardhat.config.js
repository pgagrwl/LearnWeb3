require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
