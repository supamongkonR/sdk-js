export const ADDRESSES = {
  eth: {
    abi: '[{"inputs":[{"internalType":"address","name":"deposit_contract_address","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogDepositLeftover","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes","name":"pubkey","type":"bytes"},{"indexed":false,"internalType":"bytes","name":"withdrawal","type":"bytes"}],"name":"LogDepositSent","type":"event"},{"inputs":[],"name":"kDepositAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"bytes[]","name":"pubkeys","type":"bytes[]"},{"internalType":"bytes[]","name":"withdrawal_credentials","type":"bytes[]"},{"internalType":"bytes[]","name":"signatures","type":"bytes[]"},{"internalType":"bytes32[]","name":"deposit_data_roots","type":"bytes32[]"}],"name":"batchDeposit","outputs":[],"stateMutability":"payable","type":"function","payable":true}]',
    testnet: {
      depositContract: '0x5FaDfdb7eFffd3B4AA03f0F29d9200Cf5F191F31',
    },
    mainnet: {
      depositContract: '0x9b8c989FF27e948F55B53Bb19B3cC1947852E394',
    }
  },
  sol: {
    devnet: {
      voteAccountAddress: 'FwR3PbjS5iyqzLiLugrBqKSa5EKZ4vK9SKs7eQXtT59f'
    },
    mainnet: {
      voteAccountAddress: 'DdCNGDpP7qMgoAy6paFzhhak2EeyCZcgjH7ak5u5v28m'
    }
  },
  atom: {
    testnet: {
      validatorAddress: 'cosmosvaloper178h4s6at5v9cd8m9n7ew3hg7k9eh0s6wptxpcn' // random validator
    },
    mainnet: {
      validatorAddress: 'cosmosvaloper1uxlf7mvr8nep3gm7udf2u9remms2jyjqvwdul2'
    }
  },
  ada: {
    preprod: {
      poolId: 'pool1u4x4ly6qyx9fs9k2lt7f9hpa2gftd52fee67jcmuhnt7qqae3x0'
    },
    mainnet: {
      poolId: 'pool10rdglgh4pzvkf936p2m669qzarr9dusrhmmz9nultm3uvq4eh5k'
    }
  },
  near: {
    testnet: {
      poolId: 'kiln.pool.f863973.m0'
    },
    mainnet: {
      poolId: 'kiln.poolv1.near'
    }
  },
  dot: {
    testnet: {
      validatorAddress: '5GR6UNoUW3VsXTqwDuMzRpZpeA7pmH3VtZNCaSGp2RGz8p6g'
    },
    mainnet: {
      validatorAddress: '' // todo: add address once we have setup our mainnet validator
    }
  }
};
