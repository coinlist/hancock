# Avalanche
Utilize the signing tools provided by the Core web app to sign a message

### Important Note About Signing
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
