require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const GOERLI_URL= "https://eth-goerli.g.alchemy.com/v2/mVeBSnsbGesBu9hLHnAqctdu8zReHEQ_";
//process.env.GOERLI_URL;
const PRIVATE_KEY= "5a8f17f2deef57a2ae0748dd72e298041b50c6a21ce55c63cab9b8160d84d6c6";
//process.env.PRIVATE_KEY;




module.exports = {
  solidity: "0.8.17",
  networks:{
    goerli:{
      url: GOERLI_URL,
      accounts:[PRIVATE_KEY],
    },
  },
};
