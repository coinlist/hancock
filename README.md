# hancock
Sign here please...

## Overview
This repo provides examples on how to sign an arbitrary message on different chains. Chains which support signing will have instructions in this README.

## Chains

### Solana
Solana provides a CLI for signing messages: https://docs.anza.xyz/cli/examples/sign-offchain-message

Sign a message like so:
```sh
solana sign-offchain-message -keypair <KEYPAIR> <MESSAGE>
```

Verify the signature like so:
```sh
solana verify-offchain-signature --pubkey <Pubkey of keypair> <MESSAGE> <SIGNATURE>
```

#### Example
```sh
$ solana sign-offchain-message --keypair <keypair.json> "hey there"                                                                         
3zHMng1qyLHbPTBw1YxBVwJGBWhkqRrX6JipKqmWiT9P4oMEuacqdjvWEbHaG6CbMF6rYL4e22qkP7zcY8FP4Bfr

$ solana verify-offchain-signature --signer 4fwzf5RUcptqpMTYjNhXVuYabeX9bF1patCSYTkMufFN "hey there" 3zHMng1qyLHbPTBw1YxBVwJGBWhkqRrX6JipKqmWiT9P4oMEuacqdjvWEbHaG6CbMF6rYL4e22qkP7zcY8FP4Bfr
Signature is valid
```

### Celestia
The [celestia-app](https://docs.celestia.org/how-to-guides/celestia-app-commands) CLI does not provide a way to sign arbitrary message out of the box. Below, we use the [cosmos-sdk](https://docs.cosmos.network/) to sign and verify a message.

#### Example

##### 1. Ensure Go is Installed

Verify that Go is installed on your system by running:
```sh
go version
```
If Go is not installed, download and install it from golang.org.

##### 2. Clone the Repository

```sh
git clone https://github.com/coinlist/hancock.git
```

##### 3. Navigate to the File Directory

Change into the directory containing the sign_message.go file:
```sh
cd hancock/celestia
```

##### 4. Install Dependencies

Run the following command to download and install any required dependencies:
```sh
go mod tidy
```

##### 5. Prepare the Inputs

* `Private Key`: Obtain a base64-encoded private key from the validator config file. Running a `celestia-appd` validator node will generate the file in `~/.celestia-app/config/priv_validator_key.json`. Use this private key.
* `Message`: Prepare the message you want to sign.

##### 6. Run the Program
Use the go run command to execute the file. Replace <private_key> with your base64-encoded private key and <message> with the message you want to sign:

```sh
go run sign_message.go <private_key> <message>
```

Example:
```sh
go run sign_message.go "cHJpdmF0ZWtleWJhc2U2NA==" "Hello, Celestia!"
```

##### 7. View the Output
The program will output:

* The derived address.
* The public key in base64 format.
* The original message.
* The signature in hexadecimal format.
* A confirmation if the signature is valid.

##### 8. Handle Errors

* If the private key is invalid or not base64-encoded, the program will panic with an error.
* If the signature verification fails, the program will panic with "Invalid signature."

##### Notes

* Ensure the private key is securely stored and not shared publicly.

See [celestia/sign_message.go](celestia/sign_message.go)

### Sui
The example below shows how to sign a message using the Sui SDK

#### Example

##### 1 Ensure Node.js is Installed
Make sure you have Node.js installed on your system. You can check by running the following command in your terminal:

```sh
node -v
```

If Node.js is not installed, download and install it from https://nodejs.org.

##### 2 Navigate to the Script Directory

Open your terminal and navigate to the directory containing the index.js file:

```sh
cd hancock/sui
```

##### 3 Run the Script
Use the following command to run the script, replacing <key-scheme>, <private_key>, and <message> with the appropriate values:

```sh
node index.js <key-scheme> <private_key> <message>
```

* key-scheme: The key scheme to use (ed25519, secp256k1, or secp256r1).
* private_key: The private key in the appropriate format for the chosen key scheme.
* message: The message you want to sign.

See [sui/index.js](/sui/index.js)

### Avalanche
Utilize the signing tools provided by the Core web app to sign a message

#### Important Note About Signing
Remember that you will be signing with the private key whose public key counterpart is known to 
[this list](https://subnets.avax.network/validators/validator-list/) as being associated to a Node ID.

##### 1. Connect to the App
Follow instructions at the [core website](https://core.app) if you are not already connected.

##### 2. Navigate to Signing Tools
Found via the left-nav **Tools -> Signing Tools**. Assure that you are on the **Sign Message** tab.

##### 2. Be sure to select the P-Chain
The drop-down menu to the right of the **Sign Message** header will likely default to the `C-Chain`,
change that here to `P-Chain`.

You may recieve a message that you need to install the core extension in order to support P-Chain signing,
do that now by following the on-screen prompt.

##### 3. Sign
Enter the message given to you verbatim in the **Message** field and click **Sign Message**, the resulting signature
will be printed to screen. You will likely be prompted by the core wallet app when performing this step, click `Approve`

### Note About the Public Key
If you are retrieving your public key from the core app, it may remove the `P-` prefix from the connected account when you
view it. Be sure to **add the `P-` prefix** to your account when entering the data for CoinList 

* if you view the account in the browser extension you will notice that the `P-` prefix is in place
* if you view the account via the **Account** drop down in the core app (the green dot indicating connection status)
  by clicking **veiw details**, the `P-` prefix will not be in place as the browser UI removes it

The TL;DR here is this, your entered account (the payout address associated with a NodeID) must begin `P-avax...`. If yours
begins as `avax...` simply add the prefix.
