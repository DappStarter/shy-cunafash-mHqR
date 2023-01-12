require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict duck ensure shoulder finger cost office common habit light army gentle'; 
let testAccounts = [
"0xab8e405e725fcf9af291fcb2b7a55ae683627d711803a330e57905fbd6b993d8",
"0x529c7be07e9b9ef9ce296c75e7cdf3be1f6ae51d56a83d5dabe2365c775e0400",
"0xa6190c24a7e9c201fbd6384dcbcd677bb86c2e58f784457d8771db9b2c3d3eb8",
"0xb2d507faa7c71a3e1cc47bfee563398887633ddb6965e0995877b60c4ae8768d",
"0x4de28076d7fc691de7e8b8c43d41bce1e40d438f2b93921fa1088f9fa82662e0",
"0x28ce3981680bae911a59022e77f0c2d4ee76d45d5144a8c42c90c69461890a1a",
"0xf8fd9dc27c50d517f01ea319ec1372e7f9655dc760fa85b532639f57b79cfadd",
"0x36d99f92a2347317053665b5bb5b5136ac200cd9d5a6c4220ab7019d8ae78488",
"0x8c435123ad3f6a5fd9e83ab64e5c1e2affe975a2ce676a71be205007270efda9",
"0x0c082fa33b6cb1a01d028725dbfa5924826b280fdc1851ec7ac61f11c42adea3"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

