package main

import (
	"encoding/base64"
	"encoding/hex"
	"fmt"
	"os"

	sdk "github.com/cosmos/cosmos-sdk/types"
	tmEd25519 "github.com/tendermint/tendermint/crypto/ed25519"
)

// This program signs a message using the provided private key and verifies the signature using the provided public key.
// Usage: go run sign_message.go <private_key> <message>
func main() {
	if len(os.Args) != 3 {
		fmt.Println("Usage: sign_message <private_key> <message>")
		os.Exit(1)
	}

	privateKey := os.Args[1]
	message := []byte(os.Args[2])

	// 1. Configure cosmos-sdk prefix for Celestia consensus node
	sdk.GetConfig().SetBech32PrefixForConsensusNode("celestiavalcons", "celestiavalconspub")

	// 2. Decode the private key
	pk, err := base64.StdEncoding.DecodeString(privateKey)
	if err != nil {
		panic(err)
	}
	privKey := tmEd25519.PrivKey(pk)

	// 3. Sign a message
	signature, err := privKey.Sign(message)
	if err != nil {
		panic(err)
	}

	// 4. Derive the address
	pubKey := privKey.PubKey()
	address := sdk.ConsAddress(pubKey.Address()).String()

	// 5. Output results
	fmt.Println("Address:", address)
	fmt.Println("Public Key (base64):", base64.StdEncoding.EncodeToString(pubKey.Bytes()))
	fmt.Println("Message:", string(message))
	fmt.Println("Signature:", hex.EncodeToString(signature))

	if !pubKey.VerifySignature(message, signature) {
		panic("Invalid signature")
	}
	fmt.Println("Signature valid")
}
