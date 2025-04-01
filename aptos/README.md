# APTOS
## Prerequisites
- Cargo and the rust tool chain needs to be setup to compile and run this package
  - https://www.rust-lang.org/learn/get-started
  - This is due to using [aptos-core](https://github.com/aptos-labs/aptos-core), the official sdk
    for aptos. The rust sdk is the only one with support for handling the consensus key so it must
    be used.

## Steps
1. From your `private-keys.yaml` get the consensus private key that is used by your node. And copy it to your clip board.
   ```yaml
                 account_address: deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef
                 account_private_key: "0xcafebabecafebabecafebabecafebabecafebabecafebabecafebabecafebabe"
      THIS ONE ➤ consensus_private_key: "0xfa1s1f1ab1efa1s1f1ab1efa1s1f1ab1efa1s1f1ab1efa1s1f1ab1e1d01babe5"
                 full_node_network_private_key: "0xbaaaaaadb0bababebaaaaaadb0bababebaaaaaadb0bababebaaaaaadb0bababe"
                 validator_network_private_key: "0x0d15ea5e0d15ea5e0d15ea5e0d15ea5e0d15ea5e0d15ea5e0d15ea5e0d15ea5e"
      ```
   In the above example the private key we want is
      `0xfa1s1f1ab1efa1s1f1ab1efa1s1f1ab1efa1s1f1ab1efa1s1f1ab1e1d01babe5`
1. Save it as a variable for ease of use later
   
   `private_key="<private key value from step 1>"`
1. Clone this git repo, and navigate to this directory
   ```bash
   git clone git@github.com:coinlist/hancock.git
   cd hancock/aptos
   ```
1. Use cargo to build and run the application
   ```bash
   cargo run -- -p $private_key -m "<Message You Need to sign>"
   ```

## Example
```bash
➜ cargo run -- -p "0x1399e611f8a6e45f503b86fadbeffa0cdd71f8f13dd846c8300d0cec370e16f9" -m "coinlist"
   Compiling aptos v0.1.0 (/Volumes/workspace/hancock/aptos)
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 3.65s
     Running `target/debug/aptos -p 0x1399e611f8a6e45f503b86fadbeffa0cdd71f8f13dd846c8300d0cec370e16f9 -m coinlist`
public_key: 0xa6016a47f772c8554e96605bbf5f3e3cd4298ad73133f087221e464bb12f546f4fb135acfa7dcc68e0503842ae3f1f5c
message:    coinlist
signature:  0x95093a0ac7fe99198c12882bc8240480b832c4bf12da2391e47c313c7028a2a1e46429a9c396d98ae7456c0fcbcd25090adb16bf47eabf7a4fae0b39bd344f60f197a1dfaad73199a478ec15faf6d1de5e940ef0206e47bee36dbca0d9ac69c6
```
The signature field (`0x95093a0ac7fe99198c12882bc8240480b832c4bf12da2391e47c313c7028a2a1e46429a9c396d98ae7456c0fcbcd25090adb16bf47eabf7a4fae0b39bd344f60f197a1dfaad73199a478ec15faf6d1de5e940ef0206e47bee36dbca0d9ac69c6`)
is the value that should be provided back to us to verify ownership.

#### If you are signing to be verified as a validator
Remember that you will be signing with the private key whose operator account counterpart is known to 
[this list](https://explorer.aptoslabs.com/validators?network=mainnet).
