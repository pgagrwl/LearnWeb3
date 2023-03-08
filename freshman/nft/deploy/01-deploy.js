const { ethers } = require("hardhat");

async function main() {
  const contract = await ethers.getContractFactory("NFT");

  const deployedContract = await contract.deploy();
  await deployedContract.deployed();

  console.log("NFT contact deployed to: ", deployedContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
  });
