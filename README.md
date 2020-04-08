# Zokrates React Demo

## Setup


### Pre-Existing dependencies
Before you start, make sure you have installed the following
`nvm install 11.9.0`
`npm install -g truffle`

Download Ganache for running a local blockchain
https://www.trufflesuite.com/ganache
https://github.com/trufflesuite/ganache

### How to get going
`nvm use 11.9.0`
Open Ganache and run quickstart
Have a quick look at what is running on ganache (make sure it is running on port 7545)

Run `truffle migrate` which will look for contracts in `./contracts` directory and compile them into JSON objects.
These will then be deployed onto the local blockchain, and new JSON files will be created under `src/contracts`
