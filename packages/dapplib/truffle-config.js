require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remind artwork guess cloth fresh spread'; 
let testAccounts = [
"0xdacad717439f725aa5cbe098a45832d5361e69ee323a1228f939d71f114a8d64",
"0x788fae2f7c6676e0bf29c66bcdf95740055fb6022b2909008adcdf918cfdf0e6",
"0x4cebb98a18430c745056889c85b357e6dc0f194ea8c6788364160326c0c76ce6",
"0x8c14a9dd219ace46e7d5da2166e6c5227a9af3418f272d04c78807237b25891b",
"0x9c1b6f84d9d00a185bd969dff580931d57e74cea6324afb6fbf3cbc4badfeb48",
"0x250043c56c7d6263467d15d99999985d3b8ac9930347b74697a0932347a45f76",
"0x1f6fe6c0dbfd8c4e2c8aaffe60af9638c53599f217c5f330ea8f8f073cf7141b",
"0xe858ca5ffbd57ca84af268045d4ab5929ad570d38f687b77b6f24912bdd580c7",
"0xd669e4fc9694f21b054601adb7a90f7dc5866cd40e1ee34896bc4b8cec05db32",
"0xdb43bc2a424cf29f10ccf8603aadb07ca15c9cd00bd9a7a925c2ef27e8972768"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

