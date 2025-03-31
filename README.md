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