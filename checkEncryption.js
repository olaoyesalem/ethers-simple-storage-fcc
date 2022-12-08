const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
	const wallet = new ethers.Wallet(process.env.PRIVATE_KEY_1);
	const encryptedKey = await wallet.encrypt(
		process.env.PRIVATE_KEY_PASSWORD_1,
		process.env.PRIVATE_KEY_1
	);
	fs.writeFileSync("./.checkEncryptedKey.json", encryptedKey);
}

main()
	.then(() => process.exit(0)) // This is for waiting for the function to finsh and printing any error
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
