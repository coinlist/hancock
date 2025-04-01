# Solana
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

#### If you are signing to be verified as a validator
Remember that you will be signing with the private key whose Address counterpart is known to 
[this list](https://solscan.io/validator).

##### Double Zero Token Sale for Validators
In the `Address` field on the CoinList UI assure that you use the field mentioned above. That is,
use the public key counterpart of the private key you are using to sign the message with.

Also note that only validator accounts who were officially recognized as of March 31, 14:30 UTC will be accepted
