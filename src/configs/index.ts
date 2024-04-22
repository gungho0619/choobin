export let RPC_ENDPOINT_MAIN = "https://api.mainnet-beta.solana.com";
export let RPC_ENDPOINT_DEV = "https://api.devnet.solana.com";

if (process.env.NEXT_PUBLIC_CUSTOM_DEVNET_RPC)
  RPC_ENDPOINT_DEV = process.env.NEXT_PUBLIC_CUSTOM_DEVNET_RPC;
if (process.env.NEXT_PUBLIC_CUSTOM_MAINNET_RPC)
  RPC_ENDPOINT_MAIN = process.env.NEXT_PUBLIC_CUSTOM_MAINNET_RPC;

const IN_PRODUCTION = process.env.NEXT_PUBLIC_PRODUCTION == "1" ? true : false;

export const ENV = {
  RPC_ENDPOINT: IN_PRODUCTION ? RPC_ENDPOINT_MAIN : RPC_ENDPOINT_DEV,
};
