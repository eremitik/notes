## Basics

npx hardhat --- start a new project in empty folder\
npx hardhat --- once hardhat.config.js is made, this will bring up menu of commands\
npx hardhat accounts --- prints list of accounts available\
npx hardhat compile --- compiles project, builds all artifacts (ABIs)\
npx hardhat test --- runs test, no need to spin up local blockchain\
npx hardhat test --network kovan --- runs test on kovan network\
npx hardhat node --- spins up a local node, similar to ganache\


## Unique features of Hardhat 

import "hardhat/console.sol"; --- place in .sol file, you can print to console\
npm i -g hardhat-shorthand --- this replaces 'npx hardhat' with just 'hh' for commands

## Important libraries related to HH
@nomiclabs/hardhat-ethers --- interact with ETH blockchain simply\
@nomiclabs/hardhat-waffle ---integration with waffle and hh\
ethers --- complete ETH wallet implementation and utils in JS\
ethereum-waffle --- framework for testing smart contracts

## Deploying SC to localhost
hh node --- runs blockchain on local network\
hh compile --- compiles the smart contracts, leaves artifacts\
hh run scripts/xxx.js --network localhost --- run deploy script

## Creating new project
npx create-react-app xxx --- create a new react project\
hh --- create sample project within xxx directory\
npm i @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai dotnev --- install packages to use hh and ethers\
config `hardhat.config.js` to the following:\
```
module.exports = {
  solidity: "0.8.3",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten: {
      url: "",
      accounts: [`0x${process.env.REACT_APP_ACCOUNT_KEY}`]
    }
  }
};
```
The `url` can be endpoint from Infura, Alchemy, etc.\

