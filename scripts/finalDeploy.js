const hre = require("hardhat");
async function main() {
   // const [owner,from1,from2,from3]=await hre.ethers.getSigners();
    const chai =await hre.ethers.getContractFactory("chai");
    const contract=await chai.deploy();//instance of contract
    await contract.deployed();
    console.log("contract address",contract.address);
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });