# Zokrates React Demo

## Setup


### Pre-Existing dependencies
Before you start, make sure you have installed the following
`nvm install 11.9.0`
`npm install -g truffle`
Install MetaMask in your browser (or probably any other Web3 client). 

Download Ganache for running a local blockchain
https://www.trufflesuite.com/ganache
https://github.com/trufflesuite/ganache

### How to get going
`nvm use 11.9.0`
Open Ganache and run quickstart
Have a quick look at what is running on ganache (make sure it is running on port 7545)

Run `truffle migrate` which will look for contracts in `./contracts` directory and compile them into JSON objects.
These will then be deployed onto the local blockchain, and new JSON files will be created under `src/contracts`

#### Set up the front end client and MetaMask
Run `npm install` in `./client` folder
Run `npm start` in `./client` folder
Then you should be able to see the front end in your browser by navigating to `localhost:3000` 

Make sure MetaMask is running on the same RPC as Ganache.
* Click add `Custom RPC`
* Give it a name and add the same URL on as shown on Ganache (likely port 7545)
* Open Ganache and copy the private key from the first account (click the key button)
* Paste into Metamask (click the top right circle and then click Import and paste private key)
