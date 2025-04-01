# Celestia
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

#### If you are signing to be verified as a validator
Remember that you will be signing with the consensus private key whose public counterpart is known to 
[this list](https://celestia.explorers.guru/validators).

##### Double Zero Token Sale for Validators
In the `Address` field on the CoinList UI assure that you use the field mentioned above. That is,
use the address for the consensus private key you are using to sign the message with.

Also note that only validator accounts who were officially recognized as of March 31, 14:30 UTC will be accepted
