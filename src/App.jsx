import { useState } from 'react'
import { useAccount, useContractWrite, useContractRead } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { parseEther, formatEther } from 'viem'
import './App.css'

const STAKING_CONTRACT_ADDRESS = '0x5f1A8d7bdF6cf8F74A1be627E9cbD6bc1c5F1452'
const RVD_TOKEN_ADDRESS = '0x92C269894Bfc2FcE1d530F1575dEf67945594040'

const stakingABI = [
  {
    "inputs": [],
    "name": "claimReward",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "RewardClaimed",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "stake",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Staked",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "unstake",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Unstaked",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "getReward",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "getStake",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "rewardRate",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "rewards",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "stakes",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalStaked",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]

function fmt(val) {
  if (!val) return '0.0000'
  return parseFloat(formatEther(val)).toFixed(4)
}

export default function App() {
  const { address, isConnected } = useAccount()
  const [stakeAmount, setStakeAmount]   = useState('')
  const [unstakeAmount, setUnstakeAmount] = useState('')

  const { data: stakedBalance, refetch: refetchStake } = useContractRead({
    address: STAKING_CONTRACT_ADDRESS, abi: stakingABI,
    functionName: 'getStake', args: [address],
    enabled: !!address, watch: true,
  })

  const { data: rewardBalance, refetch: refetchReward } = useContractRead({
    address: STAKING_CONTRACT_ADDRESS, abi: stakingABI,
    functionName: 'getReward', args: [address],
    enabled: !!address, watch: true,
  })

  const { data: totalStaked } = useContractRead({
    address: STAKING_CONTRACT_ADDRESS, abi: stakingABI,
    functionName: 'totalStaked', watch: true,
  })

  const refetchAll = () => { refetchStake(); refetchReward() }

  const { write: stake, isLoading: stakeLoading } = useContractWrite({
    address: STAKING_CONTRACT_ADDRESS, abi: stakingABI, functionName: 'stake',
    onSuccess: () => { refetchAll(); setStakeAmount('') },
  })

  const { write: unstake, isLoading: unstakeLoading } = useContractWrite({
    address: STAKING_CONTRACT_ADDRESS, abi: stakingABI, functionName: 'unstake',
    onSuccess: () => { refetchAll(); setUnstakeAmount('') },
  })

  const { write: claimReward, isLoading: claimLoading } = useContractWrite({
    address: STAKING_CONTRACT_ADDRESS, abi: stakingABI, functionName: 'claimReward',
    onSuccess: refetchAll,
  })

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <div className="logo-dot">RV</div>
          ReturnVoid Staking
        </div>
        <ConnectButton />
      </nav>

      <main className="main">
        {!isConnected ? (
          <div className="connect-prompt">
            <i className="icon">◎</i>
            <p>Connect your wallet to start staking</p>
          </div>
        ) : (
          <>
            <div className="hero">
              <span className="badge">● OPN Testnet</span>
              <h1>Stake OPN, Earn RVD</h1>
              <p>Deposit native OPN tokens and receive RVD rewards in real time</p>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-label">Total staked</span>
                <span className="stat-value">{fmt(totalStaked)}</span>
                <span className="stat-sub">OPN</span>
              </div>
              <div className="stat-card">
                <span className="stat-label">Your stake</span>
                <span className="stat-value">{fmt(stakedBalance)}</span>
                <span className="stat-sub">OPN</span>
              </div>
              <div className="stat-card">
                <span className="stat-label">Your rewards</span>
                <span className="stat-value">{fmt(rewardBalance)}</span>
                <span className="stat-sub">RVD</span>
              </div>
            </div>

            <div className="cards-grid">
              <div className="card">
                <h3>Stake OPN</h3>
                <div className="input-wrap">
                  <input type="number" value={stakeAmount}
                    onChange={e => setStakeAmount(e.target.value)}
                    placeholder="0.0" min="0" />
                  <span className="suffix">OPN</span>
                </div>
                <button className="btn-primary"
                  onClick={() => stake({ value: parseEther(stakeAmount || '0') })}
                  disabled={stakeLoading || !stakeAmount}>
                  {stakeLoading ? 'Staking...' : 'Stake OPN'}
                </button>
              </div>

              <div className="card">
                <h3>Unstake OPN</h3>
                <div className="input-wrap">
                  <input type="number" value={unstakeAmount}
                    onChange={e => setUnstakeAmount(e.target.value)}
                    placeholder="0.0" min="0" />
                  <span className="suffix">OPN</span>
                </div>
                <button className="btn-outline"
                  onClick={() => unstake({ args: [parseEther(unstakeAmount || '0')] })}
                  disabled={unstakeLoading || !unstakeAmount}>
                  {unstakeLoading ? 'Unstaking...' : 'Unstake OPN'}
                </button>
              </div>
            </div>

            <div className="reward-card">
              <div>
                <p className="stat-label">Claimable RVD rewards</p>
                <p className="reward-amount">{fmt(rewardBalance)} <span>RVD</span></p>
              </div>
              <button className="btn-claim"
                onClick={() => claimReward()}
                disabled={claimLoading}>
                {claimLoading ? 'Claiming...' : 'Claim Rewards'}
              </button>
            </div>

            <p className="footer">Creator — Returnvoid · OPN Testnet (chain id: 984)</p>
          </>
        )}
      </main>
    </div>
  )
}