import React from 'react'
import ReactDOM from 'react-dom/client'
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit'
import { defineChain } from 'viem'
import App from './App'
import '@rainbow-me/rainbowkit/styles.css'
import './App.css'

const iopnTestnet = defineChain({
  id: 984,
  name: 'OPN Testnet',
  network: 'OPN Testnet',
  nativeCurrency: { decimals: 18, name: 'OPN', symbol: 'OPN' },
  rpcUrls: {
    default: { http: ['https://testnet-rpc.iopn.tech'] },
    public:  { http: ['https://testnet-rpc.iopn.tech'] },
  },
})

const { chains, publicClient } = configureChains(
  [iopnTestnet],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'ReturnVoid Staking',
  projectId: 'ISI_WALLETCONNECT_PROJECT_ID', // dari cloud.walletconnect.com
  chains,
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
)