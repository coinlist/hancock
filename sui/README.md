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

#### If you are signing to be verified as a validator
Remember that you will be signing with the private key whose account counterpart is known to 
[this list](https://suiscan.xyz/mainnet/validators).
