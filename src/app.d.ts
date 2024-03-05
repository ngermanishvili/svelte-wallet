
import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
	interface Window {
		ethereum: MetaMaskInpageProvider?;
	}
	namespace App {

	}
}

export { };