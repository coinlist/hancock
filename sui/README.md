# Sui
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

##### Example
```sh
$ node index.js ed25519 <private key> "hey there"

Message: hey there
Public Key: ANDbgRonWWPnC9AjSt1Vw0XC6M7jMdBEAecgAQUmhOgK
Signature: AJ5qGz1h9pjYLCZ2HWQP02IOI8ECU4C64DOHQD5r1wFkrjyU4XbI6T+aHFTe0ElZeniw8WVM9LylqImV3VoLTQTQ24EaJ1lj5wvQI0rdVcNFwujO4zHQRAHnIAEFJoToCg==
Verified (Public Key): ANDbgRonWWPnC9AjSt1Vw0XC6M7jMdBEAecgAQUmhOgK
```

The signature field (`AJ5qGz1h9pjYLCZ2HWQP02IOI8ECU4C64DOHQD5r1wFkrjyU4XbI6T+aHFTe0ElZeniw8WVM9LylqImV3VoLTQTQ24EaJ1lj5wvQI0rdVcNFwujO4zHQRAHnIAEFJoToCg==`)
is the value that should be provided back to us to verify ownership.

#### If you are signing to be verified as a validator
Remember that you will be signing with the private key whose public counterpart is known to 
[this list](https://suiscan.xyz/mainnet/validators).

##### Double Zero Token Sale for Validators
In the `Address` field on the CoinList UI assure that you use the field mentioned above. That is,
use the address for private key you are using to sign the message with.

Also note that only validator accounts who were officially recognized as of March 31, 14:30 UTC will be accepted
