use anyhow::{Context, Result};
use aptos_crypto_derive::{BCSCryptoHash, CryptoHasher};
use aptos_sdk::bcs;
use aptos_sdk::crypto::bls12381::PrivateKey as BlsPrivateKey;
use aptos_sdk::crypto::{PrivateKey, SigningKey};
use clap::Parser;
use serde::{Deserialize, Serialize};

/// A simple program to sign a message using your aptos consensus key
#[derive(Parser, Debug)]
#[command(version, about, long_about = None)]
struct Args {
    #[arg(short, long)]
    private_key: String,
    #[arg(short, long)]
    message: String,
}

#[derive(Debug, Serialize, Deserialize, CryptoHasher, BCSCryptoHash)]
pub struct Message(String);

fn main() -> Result<()> {
    let args = Args::try_parse().context("Failed to parse command line arguments")?;

    let private_key = parse_private_key(args.private_key)?;
    let public_key = private_key.public_key();
    let message = Message(args.message);
    let signature = private_key
        .sign(&message)
        .context("failed to sign message")?;

    println!("public_key: 0x{}", public_key);
    println!("message:    {}", message.0);
    println!("signature:  0x{}", signature);
    println!();
    Ok(())
}

fn parse_private_key(private_key_input: String) -> Result<BlsPrivateKey> {
    let private_key_hex = private_key_input
        .strip_prefix("0x")
        .unwrap_or(private_key_input.as_str());

    let private_key_blob =
        hex::decode(private_key_hex).context("Failed to decode private key bytes")?;

    BlsPrivateKey::try_from(private_key_blob.as_slice())
        .context("Failed to build private key from bytes")
}
