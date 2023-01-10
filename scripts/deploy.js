// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");


   async function getBalances(address){
 const balanceBigInt = await hre.ethers.provider.getBalance(address);
 return hre.ethers.utils.formatEther(balanceBigInt);
   }
async function consoleBal(addresses){
  let conter=0;
  for(const address of addresses){
    console.log(`Address ${conter} balance`,await getBalances(address));
    conter++;
  }
}
async  function ConsoleMemos(memos)
{ for( const memo of memos ){
  const timeStamp=memo.timestamp;
  const name=memo.name;
  const from=memo.from;
  const message = memo.message;
  const teaname=memo.Tea_Name;
  const snacks=memo.Snacks;
  console.log( timeStamp,name,from,message,teaname,snacks);

}}
async function main() {
  const [owner,from1,from2,from3]=await hre.ethers.getSigners();
  const chai =await hre.ethers.getContractFactory("chai");
  const contract=await chai.deploy();//instance of contract
  await contract.deployed();
  console.log("contract address",contract.address);
  const addresses=[owner.address,from1.address,from2.address,from3.address];
 console.log("before buying chai")
  await consoleBal(addresses);
const amount={value:hre.ethers.utils.parseEther("7")}
await contract.connect(from1).buyChai("from1","Masala Chai","it should be hot","nothing",amount);
await contract.connect(from2).buyChai("from2","Noon Tea","too good","nothing",amount);
await contract.connect(from3).buyChai("from3","Assam Tea","Nice","nothing",amount);
console.log("After buying chai")
  await consoleBal(addresses);
  const memos=await contract.getMemo();
ConsoleMemos(memos);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
