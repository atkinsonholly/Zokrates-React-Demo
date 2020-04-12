
# Zokrates React Demo

## Setup


### Prerequisites and dependencies
Before you start, make sure you have the following:
* Node.js version 11.9.0 (just use NVM - Node Version Manager: `nvm install 11.9.0`)
* Truffle: `npm install -g truffle`
* Ganache for running a local blockchain: https://github.com/trufflesuite/ganache
* MetaMask installed your browser (or probably any other Web3 client)


### Getting started

1. Clone the repository and, from the project's root directory in your terminal, set your Node version to 11.9.0 using 
`nvm use 11.9.0`
2. Open Ganache and run quickstart to spin a blockchain locally. Have a quick look at what is running on ganache (make sure it is running on port 7545)
3. From the root directory, run `truffle migrate` which will look for contracts in `./contracts` directory and compile them into JSON objects. These will then be deployed onto the local blockchain, and new JSON files will be created under `src/contracts`

#### Setting up the front-end client and MetaMask
1. Run `npm install` from the `./client` folder
2. Run `npm start` in `./client` folder
3. Navigate to `localhost:3000` on your browser - you should see the application's front-end

#### Connecting the front-end to the blockchain

First, you need to make sure MetaMask is running on the same RPC port as Ganache:
* Open Metamask and, from the Networks drop-down, select "Custom RPC"
* Give your connection a name and add the same URL on as shown on Ganache (defaults to port 7545)
Then, you need to import the Ganache ETH account into Metamask:
* On your Ganache dashboard, copy the private key from the first account (click the key icon on the right of the account)
* On Metamask, click on the coloured sphere that represents your accounts and select "Import account"
* Paste the private key you've just copied and you're set!
