import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import dotenv from 'dotenv'
import '@nomicfoundation/hardhat-ethers'
import '@openzeppelin/hardhat-upgrades'

dotenv.config()

const config: HardhatUserConfig = {
  defaultNetwork: 'swisstronik',
  solidity: '0.8.20',
  networks: {
    swisstronik: {
      url: 'https://json-rpc.testnet.swisstronik.com/',
      accounts: [`0xe2e454a20964edda277f45922340e03b426780e37a3e6be5b430623b7115a466`],
    },
  },
}

export default config
