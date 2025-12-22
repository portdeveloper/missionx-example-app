import { RandomNumber } from "@/components/RandomNumber";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-950 dark:to-black">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Monad Random Number Generator
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Generate verifiable random numbers on Monad Testnet using Pyth
            Entropy. Connect your wallet to get started.
          </p>
        </div>

        <RandomNumber />

        <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-500">
          <p>Powered by Pyth Entropy on Monad Testnet</p>
        </div>
      </main>
    </div>
  );
}
