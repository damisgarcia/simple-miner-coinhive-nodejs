const CoinHive = require('coin-hive');

(async () => {
  // Create miner
  const public_key = 'bm7WdaVKjImxKl5XQpKLNQJtIUPMoXDq'
  const miner = await CoinHive(public_key); // Coin-Hive's Site Key

  // Setting Miner
  await miner.rpc('setThrottle', [0.5]);

  // Start miner
  await miner.start();

  // Listen on events
  miner.on('found', () => console.log('Found!'))
  miner.on('accepted', () => console.log('Accepted!'))
  miner.on('update', data => console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `));
})();
