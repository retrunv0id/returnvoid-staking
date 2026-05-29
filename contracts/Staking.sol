// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    function transfer(address to, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract Staking {
    IERC20 public immutable rvdToken;

    mapping(address => uint256) public stakes;
    mapping(address => uint256) public rewards;
    mapping(address => uint256) public lastStakeTime; 
    uint256 public totalStaked;


    uint256 public rewardRate = 1e14; // 0.0001 RVD per detik per OPN

    event Staked(address indexed user, uint256 amount);
    event Unstaked(address indexed user, uint256 amount);
    event RewardClaimed(address indexed user, uint256 amount);

    constructor(address _rvdToken) {
        rvdToken = IERC20(_rvdToken);
    }


    function _updateReward(address user) internal {
        if (stakes[user] > 0 && lastStakeTime[user] > 0) {
            uint256 elapsed = block.timestamp - lastStakeTime[user];
            rewards[user] += (stakes[user] * rewardRate * elapsed) / 1e18;
        }
        lastStakeTime[user] = block.timestamp;
    }

    function stake() external payable {
        require(msg.value > 0, "Cannot stake 0");
        _updateReward(msg.sender); 
        stakes[msg.sender] += msg.value;
        totalStaked += msg.value;
        emit Staked(msg.sender, msg.value);
    }

    function unstake(uint256 amount) external {
        require(amount > 0, "Cannot unstake 0");
        require(stakes[msg.sender] >= amount, "Insufficient stake");
        _updateReward(msg.sender);
        stakes[msg.sender] -= amount;
        totalStaked -= amount;
        payable(msg.sender).transfer(amount);
        emit Unstaked(msg.sender, amount);
    }

    function claimReward() external {
        _updateReward(msg.sender);
        uint256 reward = rewards[msg.sender];
        require(reward > 0, "No rewards available");
        require(
            rvdToken.balanceOf(address(this)) >= reward,
            "Insufficient RVD in contract"
        );
        rewards[msg.sender] = 0;
        rvdToken.transfer(msg.sender, reward);
        emit RewardClaimed(msg.sender, reward);
    }

    function getStake(address user) external view returns (uint256) {
        return stakes[user];
    }

    function getReward(address user) external view returns (uint256) {
        uint256 pending = 0;
        if (stakes[user] > 0 && lastStakeTime[user] > 0) {
            uint256 elapsed = block.timestamp - lastStakeTime[user];
            pending = (stakes[user] * rewardRate * elapsed) / 1e18;
        }
        return rewards[user] + pending;
    }
}