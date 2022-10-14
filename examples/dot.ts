import { Kiln } from "../src/kiln";
const fs = require('fs');

const apiSecret = fs.readFileSync(__dirname + '/fireblocks_secret.key', 'utf8');

const f = async () => {
  const k = new Kiln({
    testnet: true,
    apiToken: 'kiln_dTkxUTFRdHBMZm9vNFFycFhDSTZCdlJsbjJZang5VnY6ejJoV3FCSTlyZlBtM2ZIM0RFRVVaM3NwTkZReHJXTDZWZUxJMWtWWlVrb3VNYUVzcE9Lakt4ZVplOG9vd1oyVw',
    integrations: [
      {
        name: 'vault1',
        provider: 'fireblocks',
        fireblocksApiKey: '53aee35e-04b7-9314-8f28-135a66c8af2c',
        fireblocksSecretKey: apiSecret,
        vaultAccountId: '7'
      }
    ],
  });

  try {
    const tx = await k.dot.craftBondTx(
      '376acfff-e35d-4b7c-90da-c6acb8ea7197',
      '5DK8ShqtyuVk2w4qrF9HwaBJoiZV1byQs5ARZ3df2Pt8V6Vj',
      1,
      {
        controllerAccountAddress: '5CU93jHcRgEuGx3GXdJFunCL6AfwyKaRxBChcfHyZQdaSNLg'
      }
    );

    const txJson: any = tx.submittableExtrinsic.toHuman();

    console.log(txJson['method']['args']);
    // const signedTx = await k.dot.sign('vault1', tx);
    // console.log(signedTx);
    // const hash = await k.dot.broadcast(signedTx);
    // console.log(hash);
  } catch (err){
    console.log(err);
  }
};

f();