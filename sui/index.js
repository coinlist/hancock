import { Ed25519Keypair } from '@mysten/sui/keypairs/ed25519';
import { Secp256k1Keypair } from '@mysten/sui/keypairs/secp256k1';
import { Secp256r1Keypair } from '@mysten/sui/keypairs/secp256r1';
import {sha256} from '@noble/hashes/sha256';
import { verifyPersonalMessageSignature } from '@mysten/sui/verify';

const getKeyPair = (keyScheme, privateKey) => {
    switch (keyScheme) {
        case 'ed25519':
            return Ed25519Keypair.fromPrivateKey(privateKey);
        case 'secp256k1':
            return Secp256k1Keypair.fromSecretKey(privateKey);
        case 'secp256r1':
            return Secp256r1Keypair.fromSecretKey(privateKey);
        default:
            throw new Error(`Unsupported key scheme: ${keyScheme}`);
    }
};

async function signMessage() {
    // 1. Parse command line arguments
    const args = process.argv.slice(2);
    if (args.length != 3) {
        console.error('Usage: node index.js <key-scheme> <private_key> <message>');
        process.exit(1);
    }

    // 2. Create keypair
    const keypair = getKeyPair(args[0], args[1]);

    // 3. Sign message
    const message = args[2];
    const messageBytes = new TextEncoder().encode(message);

    const { signature } = await keypair.signPersonalMessage(messageBytes);

    console.log('Message:', message)
    console.log('Public Key:', keypair.getPublicKey().toBase64());
    console.log('Signature:', signature);

    // 4. Verify signature
    const verifiedPubKey = await verifyPersonalMessageSignature(messageBytes, signature);
    console.log('Verified (Public Key):', verifiedPubKey.toBase64());
}

signMessage().catch(console.error);
