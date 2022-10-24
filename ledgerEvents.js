// Ledger Events Processing events: Smart Wallet Deployment for enterprise
ledgerEvent = {
  "ResponseMetadata": {
    "RequestId": "L9YYJ440FA38XVKS2WTMFIUWMPBYQJLEJ5TTDQ5E90TCR3QBWWI7"
  },
  "Messages": [
    {
      "MessageId": "aa42675d-24cc-422d-b41e-cb3f0bc9dadd",
      "ReceiptHandle": "MGJiMTY1N2QtMzU5ZS00YTBjLWE0ZWYtMjYyYzEyMmM1YzFlIGFybjphd3M6c3FzOnVzLWVhc3QtMTowMDAwMDAwMDAwMDA6dGVzdCBjOTgxMDFmZS0zNGE3LTRlMjctYjY0MS0wMzM2OTg3NThjZWQgMTY1ODIxNjc2OC4xODI1OTc0",
      "MD5OfBody": "41537cb61e0ba3a80e795703313f501b",
      "Body": {
        "version": "0",
        "id": "ab3ac9c6-8ff8-43d5-8dd6-7527c92a3abd",
        "detail-type": "deploySmartWallet",
        "source": "original-works.evm-transaction-sender",
        "account": "000000000000",
        "time": "2022-07-19T07:28:08Z",
        "region": "us-east-1",
        "resources": [],
        "detail": {
          "transactionHash": "0x6db1c485cec4e0f52fb3f0788828c86ae79a4c261e77ee0c8c8b50600891b830",
          "networkName": "test",
          "origin": "Revelator",
          "transactionTimestamp": 1666609669,
          "isTestnet": true,
          "eventRawData": {
            "blockchain_event": {
              "to": "0x2d56F284e83fdf3808e3891889EF683ae9F2CCA1",
              "from": "0xFCA8B8eADbc7302a240541f6E1921a24c604D9B6",
              "contractAddress": null,
              "transactionIndex": 0,
              "gasUsed": {
                "type": "BigNumber",
                "hex": "0x028e01"
              },
              "logsBloom": "0x00000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101000000000000000000000000000000000002000000000000000000000000080000000000200000000000000000000000000000000000000080000020000000020000000000000020000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000080000000002000000000000000000080000000000000000000080000400000000010000000100000000000000000000000000000000000000",
              "blockHash": "0xae8d4873bfd94e7d498dc4d4ad2935e5f79a4500748a2704f737dbb09042dfb9",
              "transactionHash": "0x6db1c485cec4e0f52fb3f0788828c86ae79a4c261e77ee0c8c8b50600891b830",
              "logs": [
                {
                  "transactionIndex": 0,
                  "blockNumber": 64,
                  "transactionHash": "0x6db1c485cec4e0f52fb3f0788828c86ae79a4c261e77ee0c8c8b50600891b830",
                  "address": "0xfd9248E66Cb99228d1a8BdDc65Ed71A7879E13e5",
                  "topics": [
                    "0xbdb658fbebcb4884950df11335d9177f3b8c7fb1b1f5290202b9715198d7e105"
                  ],
                  "data": "0x0100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000062ccb8ca0169bfc47874b427db105821bd3e7c96",
                  "logIndex": 0,
                  "blockHash": "0xae8d4873bfd94e7d498dc4d4ad2935e5f79a4500748a2704f737dbb09042dfb9"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 64,
                  "transactionHash": "0x6db1c485cec4e0f52fb3f0788828c86ae79a4c261e77ee0c8c8b50600891b830",
                  "address": "0xbBd45701803adA8714D967947F90F707B276090f",
                  "topics": [
                    "0xa850ae9193f515cbae8d35e8925bd2be26627fc91bce650b8652ed254e9cab03"
                  ],
                  "data": "0x000000000000000000000000fd9248e66cb99228d1a8bddc65ed71a7879e13e5",
                  "logIndex": 1,
                  "blockHash": "0xae8d4873bfd94e7d498dc4d4ad2935e5f79a4500748a2704f737dbb09042dfb9"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 64,
                  "transactionHash": "0x6db1c485cec4e0f52fb3f0788828c86ae79a4c261e77ee0c8c8b50600891b830",
                  "address": "0x2d56F284e83fdf3808e3891889EF683ae9F2CCA1",
                  "topics": [
                    "0x7d2d8112351cf4e12726159ff74239b6371961d90784c7aa137d49e5b780db75"
                  ],
                  "data": "0x000000000000000000000000fd9248e66cb99228d1a8bddc65ed71a7879e13e5",
                  "logIndex": 2,
                  "blockHash": "0xae8d4873bfd94e7d498dc4d4ad2935e5f79a4500748a2704f737dbb09042dfb9"
                }
              ],
              "blockNumber": 64,
              "confirmations": 5,
              "cumulativeGasUsed": {
                "type": "BigNumber",
                "hex": "0x028e01"
              },
              "effectiveGasPrice": {
                "type": "BigNumber",
                "hex": "0x596c50cf"
              },
              "status": 1,
              "type": 2,
              "byzantium": true
            }
          },
          "wallets": [
            {
              "ownerUri": "Revelator|operational-wallet",
              "walletId": "0xFCA8B8eADbc7302a240541f6E1921a24c604D9B6",
              "type": "operationalWallet"
            }
          ],
          "transactions": [
            {
              "from": "0xFCA8B8eADbc7302a240541f6E1921a24c604D9B6",
              "to": "0x0000000000000000000000000000000000000000",
              "amount": "0.000251182838522575",
              "currency": "ETH",
              "transactionType": "gasFee"
            }
          ],
          "eventMetadata": {
            "id": "0x6db1c485cec4e0f52fb3f0788828c86ae79a4c261e77ee0c8c8b50600891b830-test",
            "ownerUri": "Revelator|EnterpriseWallet|1",
            "smartWalletId": 7,
            "walletAddress": "0xfd9248E66Cb99228d1a8BdDc65Ed71A7879E13e5"
          }
        }
      }
    }
  ]
}

// Ledger Events Processing events: Smart Wallet Deployment for retail
ledgerEvent = {
  "ResponseMetadata": {
    "RequestId": "L9YYJ440FA38XVKS2WTMFIUWMPBYQJLEJ5TTDQ5E90TCR3QBWWI7"
  },
  "Messages": [
    {
      "MessageId": "aa42675d-24cc-422d-b41e-cb3f0bc9dadd",
      "ReceiptHandle": "MGJiMTY1N2QtMzU5ZS00YTBjLWE0ZWYtMjYyYzEyMmM1YzFlIGFybjphd3M6c3FzOnVzLWVhc3QtMTowMDAwMDAwMDAwMDA6dGVzdCBjOTgxMDFmZS0zNGE3LTRlMjctYjY0MS0wMzM2OTg3NThjZWQgMTY1ODIxNjc2OC4xODI1OTc0",
      "MD5OfBody": "41537cb61e0ba3a80e795703313f501b",
      "Body": {
        "version": "0",
        "id": "ab3ac9c6-8ff8-43d5-8dd6-7527c92a3abd",
        "detail-type": "deploySmartWallet",
        "source": "original-works.evm-transaction-sender",
        "account": "000000000000",
        "time": "2022-07-19T07:28:08Z",
        "region": "us-east-1",
        "resources": [],
        "detail": {
          "transactionHash": "0xabed2752f92c5ffebca7bcbd8602642e3df55de74f0444fd7a0c51a9f955c8cd",
          "networkName": "test",
          "origin": "Revelator",
          "transactionTimestamp": 1666609669,
          "isTestnet": true,
          "eventRawData": {
            "blockchain_event": {
              "to": "0xC439c3Aae4F06D50aC93F9a22DdBa748804e1274",
              "from": "0xFCA8B8eADbc7302a240541f6E1921a24c604D9B6",
              "contractAddress": null,
              "transactionIndex": 0,
              "gasUsed": {
                "type": "BigNumber",
                "hex": "0x021c5f"
              },
              "logsBloom": "0x00000000000000000010000000000000000000000000000000020000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000101000000000000000000000000000000000000000000000000000000000000080000004000000000000000000000000000000000000000000080000000000000020000000000008020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080000000000000",
              "blockHash": "0x9c659a4afef90d64bf982b0240668fbeb1d63a7b57104a76ee0aab1bcf37d2e0",
              "transactionHash": "0xabed2752f92c5ffebca7bcbd8602642e3df55de74f0444fd7a0c51a9f955c8cd",
              "logs": [
                {
                  "transactionIndex": 0,
                  "blockNumber": 65,
                  "transactionHash": "0xabed2752f92c5ffebca7bcbd8602642e3df55de74f0444fd7a0c51a9f955c8cd",
                  "address": "0x36E9c7Ef128D9bD6556dED9dF494450DC1745c1d",
                  "topics": [
                    "0xbdb658fbebcb4884950df11335d9177f3b8c7fb1b1f5290202b9715198d7e105"
                  ],
                  "data": "0x0100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000062ccb8ca0169bfc47874b427db105821bd3e7c96",
                  "logIndex": 0,
                  "blockHash": "0x9c659a4afef90d64bf982b0240668fbeb1d63a7b57104a76ee0aab1bcf37d2e0"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 65,
                  "transactionHash": "0xabed2752f92c5ffebca7bcbd8602642e3df55de74f0444fd7a0c51a9f955c8cd",
                  "address": "0xC439c3Aae4F06D50aC93F9a22DdBa748804e1274",
                  "topics": [
                    "0x7d2d8112351cf4e12726159ff74239b6371961d90784c7aa137d49e5b780db75"
                  ],
                  "data": "0x00000000000000000000000036e9c7ef128d9bd6556ded9df494450dc1745c1d",
                  "logIndex": 1,
                  "blockHash": "0x9c659a4afef90d64bf982b0240668fbeb1d63a7b57104a76ee0aab1bcf37d2e0"
                }
              ],
              "blockNumber": 65,
              "confirmations": 4,
              "cumulativeGasUsed": {
                "type": "BigNumber",
                "hex": "0x021c5f"
              },
              "effectiveGasPrice": {
                "type": "BigNumber",
                "hex": "0x596bce0f"
              },
              "status": 1,
              "type": 2,
              "byzantium": true
            }
          },
          "wallets": [
            {
              "ownerUri": "Revelator|operational-wallet",
              "walletId": "0xFCA8B8eADbc7302a240541f6E1921a24c604D9B6",
              "type": "operationalWallet"
            }
          ],
          "transactions": [
            {
              "from": "0xFCA8B8eADbc7302a240541f6E1921a24c604D9B6",
              "to": "0x0000000000000000000000000000000000000000",
              "amount": "0.000207535330630545",
              "currency": "ETH",
              "transactionType": "gasFee"
            }
          ],
          "eventMetadata": {
            "id": "0xabed2752f92c5ffebca7bcbd8602642e3df55de74f0444fd7a0c51a9f955c8cd-test",
            "ownerUri": "Revelator|RetailWallet|1",
            "smartWalletId": 10,
            "walletAddress": "0x36E9c7Ef128D9bD6556dED9dF494450DC1745c1d"
          }
        }
      }
    }
  ]
}

// Ledger Events Processing events: Token Minting by smart wallet enterprise
ledgerEvent = {
  "ResponseMetadata": {
    "RequestId": "L9YYJ440FA38XVKS2WTMFIUWMPBYQJLEJ5TTDQ5E90TCR3QBWWI7"
  },
  "Messages": [
    {
      "MessageId": "aa42675d-24cc-422d-b41e-cb3f0bc9dadd",
      "ReceiptHandle": "MGJiMTY1N2QtMzU5ZS00YTBjLWE0ZWYtMjYyYzEyMmM1YzFlIGFybjphd3M6c3FzOnVzLWVhc3QtMTowMDAwMDAwMDAwMDA6dGVzdCBjOTgxMDFmZS0zNGE3LTRlMjctYjY0MS0wMzM2OTg3NThjZWQgMTY1ODIxNjc2OC4xODI1OTc0",
      "MD5OfBody": "41537cb61e0ba3a80e795703313f501b",
      "Body": {
        "version": "0",
        "id": "ab3ac9c6-8ff8-43d5-8dd6-7527c92a3abd",
        "detail-type": "tokenMinting",
        "source": "original-works.evm-transaction-sender",
        "account": "000000000000",
        "time": "2022-07-19T07:28:08Z",
        "region": "us-east-1",
        "resources": [],
        "detail": {
          "transactionHash": "0x76b39edc25fec454f015e500b12a7dbb1f535ac6193e45c38e0daa0681c3404a",
          "networkName": "test",
          "origin": "Revelator",
          "transactionTimestamp": 1666609696,
          "isTestnet": true,
          "eventRawData": {
            "blockchain_event": {
              "to": "0xfd9248E66Cb99228d1a8BdDc65Ed71A7879E13e5",
              "from": "0xFCA8B8eADbc7302a240541f6E1921a24c604D9B6",
              "contractAddress": null,
              "transactionIndex": 0,
              "gasUsed": {
                "type": "BigNumber",
                "hex": "0x08472f"
              },
              "logsBloom": "0x00000000000800040000000000100000000000200000000200000000000010000000000000000000000800020000002000000000000000000000000000002000000000000010000000000000000000000000000000000000000010000002000000000000020000000000000000001800000001000000000810000000000000000000000000000000000000000000000008000000000800004000000000000000000000090000010000000000080000000004000000000000040000000000800000000000000000080000000000000000000000000008000000000010000020000000000000000040410000000000000000000000004020000000080000000000",
              "blockHash": "0xb529d0586c740e0cba29c2a6499dedc444008504d122829d18fa764224e58560",
              "transactionHash": "0x76b39edc25fec454f015e500b12a7dbb1f535ac6193e45c38e0daa0681c3404a",
              "logs": [
                {
                  "transactionIndex": 0,
                  "blockNumber": 69,
                  "transactionHash": "0x76b39edc25fec454f015e500b12a7dbb1f535ac6193e45c38e0daa0681c3404a",
                  "address": "0xE00F62e10E075d908Ca24FccBea03c552d10896b",
                  "topics": [
                    "0xf10cda68996dfb656d49ab0db3c62cc5f0849710633671a337171c3ad9255186"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000003e8000000000000000000000000e00f62e10e075d908ca24fccbea03c552d10896b",
                  "logIndex": 0,
                  "blockHash": "0xb529d0586c740e0cba29c2a6499dedc444008504d122829d18fa764224e58560"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 69,
                  "transactionHash": "0x76b39edc25fec454f015e500b12a7dbb1f535ac6193e45c38e0daa0681c3404a",
                  "address": "0x0DB3e88CebF29F4dE2393B58aCf42FC645D16795",
                  "topics": [
                    "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62",
                    "0x000000000000000000000000338aa65aa3250d26b3a44e778ac9b33af84900b3",
                    "0x0000000000000000000000000000000000000000000000000000000000000000",
                    "0x000000000000000000000000fd9248e66cb99228d1a8bddc65ed71a7879e13e5"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001",
                  "logIndex": 1,
                  "blockHash": "0xb529d0586c740e0cba29c2a6499dedc444008504d122829d18fa764224e58560"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 69,
                  "transactionHash": "0x76b39edc25fec454f015e500b12a7dbb1f535ac6193e45c38e0daa0681c3404a",
                  "address": "0x0DB3e88CebF29F4dE2393B58aCf42FC645D16795",
                  "topics": [
                    "0x3fa96d7b6bcbfe71ef171666d84db3cf52fa2d1c8afdb1cc8e486177f208b7df"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000100000000000000000000000090da1d45b73d975ccfffc7619ced34443681e50600000000000000000000000000000000000000000000000000000000000003e8",
                  "logIndex": 2,
                  "blockHash": "0xb529d0586c740e0cba29c2a6499dedc444008504d122829d18fa764224e58560"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 69,
                  "transactionHash": "0x76b39edc25fec454f015e500b12a7dbb1f535ac6193e45c38e0daa0681c3404a",
                  "address": "0x338aA65aA3250D26b3A44e778aC9B33AF84900b3",
                  "topics": [
                    "0xe76d792fae4e6acaf674cb1bfd9d8badabb07d20b093084d36783c8fe6e94fad"
                  ],
                  "data": "0x0000000000000000000000000db3e88cebf29f4de2393b58acf42fc645d167950000000000000000000000009da62f349a54e568c431898e9f373c2171b358c6000000000000000000000000fd9248e66cb99228d1a8bddc65ed71a7879e13e5",
                  "logIndex": 3,
                  "blockHash": "0xb529d0586c740e0cba29c2a6499dedc444008504d122829d18fa764224e58560"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 69,
                  "transactionHash": "0x76b39edc25fec454f015e500b12a7dbb1f535ac6193e45c38e0daa0681c3404a",
                  "address": "0xE00F62e10E075d908Ca24FccBea03c552d10896b",
                  "topics": [
                    "0x2def7b45ab6efe7742a4f3a2962e1ee66d7442eea1ba6f6e1559bf8b760deed6"
                  ],
                  "data": "0x000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000010000000000000000000000000db3e88cebf29f4de2393b58acf42fc645d16795000000000000000000000000fd9248e66cb99228d1a8bddc65ed71a7879e13e50000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000100000000000000000000000090da1d45b73d975ccfffc7619ced34443681e50600000000000000000000000000000000000000000000000000000000000003e800000000000000000000000000000000000000000000000000000000000000147777772e7368696e79756e69636f726e2e756e69000000000000000000000000",
                  "logIndex": 4,
                  "blockHash": "0xb529d0586c740e0cba29c2a6499dedc444008504d122829d18fa764224e58560"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 69,
                  "transactionHash": "0x76b39edc25fec454f015e500b12a7dbb1f535ac6193e45c38e0daa0681c3404a",
                  "address": "0xfd9248E66Cb99228d1a8BdDc65Ed71A7879E13e5",
                  "topics": [
                    "0x4e2058815a1087a94d8a92ecdce2f91d1370aa8c270ef97b0f28e0a3c6f68a87"
                  ],
                  "data": "0x000000000000000000000000fca8b8eadbc7302a240541f6e1921a24c604d9b6000000000000000000000000e00f62e10e075d908ca24fccbea03c552d10896b00000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001a000000000000000000000000000000000000000000000000000000000000000c45fd3b6fd000000000000000000000000000000000000000000000000000000000000008000000000000000000000000090da1d45b73d975ccfffc7619ced34443681e506000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000003e800000000000000000000000000000000000000000000000000000000000000147777772e7368696e79756e69636f726e2e756e69000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
                  "logIndex": 5,
                  "blockHash": "0xb529d0586c740e0cba29c2a6499dedc444008504d122829d18fa764224e58560"
                }
              ],
              "blockNumber": 69,
              "confirmations": 1,
              "cumulativeGasUsed": {
                "type": "BigNumber",
                "hex": "0x08472f"
              },
              "effectiveGasPrice": {
                "type": "BigNumber",
                "hex": "0x596a57ec"
              },
              "status": 1,
              "type": 2,
              "byzantium": true
            }
          },
          "wallets": [
            {
              "ownerUri": "Revelator|operational-wallet",
              "walletId": "0xFCA8B8eADbc7302a240541f6E1921a24c604D9B6",
              "type": "operationalWallet"
            },
            {
              "ownerUri": "Revelator|EnterpriseWallet|1",
              "walletId": "0xfd9248E66Cb99228d1a8BdDc65Ed71A7879E13e5",
              "type": "smartWallet"
            }
          ],
          "transactions": [
            {
              "from": "0xFCA8B8eADbc7302a240541f6E1921a24c604D9B6",
              "to": "0x0000000000000000000000000000000000000000",
              "amount": "0.000813843291347028",
              "currency": "ETH",
              "transactionType": "gasFee"
            },
            {
              "amount": "1",
              "currency": "0x0DB3e88CebF29F4dE2393B58aCf42FC645D16795",
              "from": "0x0000000000000000000000000000000000000000",
              "to": "0xfd9248E66Cb99228d1a8BdDc65Ed71A7879E13e5",
              "transactionType": "transferAsset"
            }
          ],
          "eventMetadata": {
            "tokenId": "0x0DB3e88CebF29F4dE2393B58aCf42FC645D16795-1",
            "id": "1234-1234-1234-1234",
            "sellerUri": "Revelator|EnterpriseWallet|1",
            "sellerAddress": "0xfd9248E66Cb99228d1a8BdDc65Ed71A7879E13e5"
          }
        }
      }
    }
  ]
}

// Ledger Events Processing events: Token Minting by web3 retail
ledgerEvent = {
  "ResponseMetadata": {
    "RequestId": "L9YYJ440FA38XVKS2WTMFIUWMPBYQJLEJ5TTDQ5E90TCR3QBWWI7"
  },
  "Messages": [
    {
      "MessageId": "aa42675d-24cc-422d-b41e-cb3f0bc9dadd",
      "ReceiptHandle": "MGJiMTY1N2QtMzU5ZS00YTBjLWE0ZWYtMjYyYzEyMmM1YzFlIGFybjphd3M6c3FzOnVzLWVhc3QtMTowMDAwMDAwMDAwMDA6dGVzdCBjOTgxMDFmZS0zNGE3LTRlMjctYjY0MS0wMzM2OTg3NThjZWQgMTY1ODIxNjc2OC4xODI1OTc0",
      "MD5OfBody": "41537cb61e0ba3a80e795703313f501b",
      "Body": {
        "version": "0",
        "id": "ab3ac9c6-8ff8-43d5-8dd6-7527c92a3abd",
        "detail-type": "tokenMinting",
        "source": "original-works.evm-transaction-sender",
        "account": "000000000000",
        "time": "2022-07-19T07:28:08Z",
        "region": "us-east-1",
        "resources": [],
        "detail": {
          "transactionHash": "0xe440f537d5c87b38c0c2c2158f3eecf64e39db4d227aeee7d22e7797a6fcbf50",
          "networkName": "test",
          "origin": "Revelator",
          "transactionTimestamp": 1666609703,
          "isTestnet": true,
          "eventRawData": {
            "blockchain_event": {
              "to": "0xE00F62e10E075d908Ca24FccBea03c552d10896b",
              "from": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "contractAddress": null,
              "transactionIndex": 0,
              "gasUsed": {
                "type": "BigNumber",
                "hex": "0x080bee"
              },
              "logsBloom": "0x00000000000004000000000000000000000000200000000200000000000010000000000000000000000000020000802000000000000000000800000000002000000000000010000000000000000040000000000000000000000000000000000000000000020000000000000000001800000001000000000810000000000000000000000000000000000000000000000008000000000800004000000000000000000000010000010000000000080000000000000000000000000000000000800000000000000000000000000000000000000000000008000000000010000020000000000000002040400000000000000000000000000021000000080000000000",
              "blockHash": "0xbcd233262f7baf87394c7fcbd7e0251100a4d551d3e607bb8d03663bba872ca3",
              "transactionHash": "0xe440f537d5c87b38c0c2c2158f3eecf64e39db4d227aeee7d22e7797a6fcbf50",
              "logs": [
                {
                  "transactionIndex": 0,
                  "blockNumber": 70,
                  "transactionHash": "0xe440f537d5c87b38c0c2c2158f3eecf64e39db4d227aeee7d22e7797a6fcbf50",
                  "address": "0xE00F62e10E075d908Ca24FccBea03c552d10896b",
                  "topics": [
                    "0xf10cda68996dfb656d49ab0db3c62cc5f0849710633671a337171c3ad9255186"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000003e8000000000000000000000000e00f62e10e075d908ca24fccbea03c552d10896b",
                  "logIndex": 0,
                  "blockHash": "0xbcd233262f7baf87394c7fcbd7e0251100a4d551d3e607bb8d03663bba872ca3"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 70,
                  "transactionHash": "0xe440f537d5c87b38c0c2c2158f3eecf64e39db4d227aeee7d22e7797a6fcbf50",
                  "address": "0x0241E72660117B160572FF4944c3bF6Dc98a3854",
                  "topics": [
                    "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62",
                    "0x000000000000000000000000338aa65aa3250d26b3a44e778ac9b33af84900b3",
                    "0x0000000000000000000000000000000000000000000000000000000000000000",
                    "0x000000000000000000000000776807b830508844dfa3b60e43e1cc13e88a0cd8"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001",
                  "logIndex": 1,
                  "blockHash": "0xbcd233262f7baf87394c7fcbd7e0251100a4d551d3e607bb8d03663bba872ca3"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 70,
                  "transactionHash": "0xe440f537d5c87b38c0c2c2158f3eecf64e39db4d227aeee7d22e7797a6fcbf50",
                  "address": "0x0241E72660117B160572FF4944c3bF6Dc98a3854",
                  "topics": [
                    "0x3fa96d7b6bcbfe71ef171666d84db3cf52fa2d1c8afdb1cc8e486177f208b7df"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000100000000000000000000000090da1d45b73d975ccfffc7619ced34443681e50600000000000000000000000000000000000000000000000000000000000003e8",
                  "logIndex": 2,
                  "blockHash": "0xbcd233262f7baf87394c7fcbd7e0251100a4d551d3e607bb8d03663bba872ca3"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 70,
                  "transactionHash": "0xe440f537d5c87b38c0c2c2158f3eecf64e39db4d227aeee7d22e7797a6fcbf50",
                  "address": "0x338aA65aA3250D26b3A44e778aC9B33AF84900b3",
                  "topics": [
                    "0xe76d792fae4e6acaf674cb1bfd9d8badabb07d20b093084d36783c8fe6e94fad"
                  ],
                  "data": "0x0000000000000000000000000241e72660117b160572ff4944c3bf6dc98a38540000000000000000000000009da62f349a54e568c431898e9f373c2171b358c6000000000000000000000000776807b830508844dfa3b60e43e1cc13e88a0cd8",
                  "logIndex": 3,
                  "blockHash": "0xbcd233262f7baf87394c7fcbd7e0251100a4d551d3e607bb8d03663bba872ca3"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 70,
                  "transactionHash": "0xe440f537d5c87b38c0c2c2158f3eecf64e39db4d227aeee7d22e7797a6fcbf50",
                  "address": "0xE00F62e10E075d908Ca24FccBea03c552d10896b",
                  "topics": [
                    "0x2def7b45ab6efe7742a4f3a2962e1ee66d7442eea1ba6f6e1559bf8b760deed6"
                  ],
                  "data": "0x000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000010000000000000000000000000241e72660117b160572ff4944c3bf6dc98a3854000000000000000000000000776807b830508844dfa3b60e43e1cc13e88a0cd80000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000100000000000000000000000090da1d45b73d975ccfffc7619ced34443681e50600000000000000000000000000000000000000000000000000000000000003e800000000000000000000000000000000000000000000000000000000000000147777772e7368696e79756e69636f726e2e756e69000000000000000000000000",
                  "logIndex": 4,
                  "blockHash": "0xbcd233262f7baf87394c7fcbd7e0251100a4d551d3e607bb8d03663bba872ca3"
                }
              ],
              "blockNumber": 70,
              "confirmations": 1,
              "cumulativeGasUsed": {
                "type": "BigNumber",
                "hex": "0x080bee"
              },
              "effectiveGasPrice": {
                "type": "BigNumber",
                "hex": "0x596a154f"
              },
              "status": 1,
              "type": 2,
              "byzantium": true
            }
          },
          "wallets": [
            {
              "ownerUri": "private-wallet",
              "walletId": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "type": "private-wallet"
            }
          ],
          "transactions": [
            {
              "from": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "to": "0x0000000000000000000000000000000000000000",
              "amount": "0.00079107865144229",
              "currency": "ETH",
              "transactionType": "gasFee"
            },
            {
              "amount": "1",
              "currency": "0x0241E72660117B160572FF4944c3bF6Dc98a3854",
              "from": "0x0000000000000000000000000000000000000000",
              "to": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "transactionType": "transferAsset"
            },
            {
              "from": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "to": "0xE00F62e10E075d908Ca24FccBea03c552d10896b",
              "amount": "0.000000000000001",
              "currency": "ETH",
              "transactionType": "marketFee"
            }
          ],
          "eventMetadata": {
            "tokenId": "0x0241E72660117B160572FF4944c3bF6Dc98a3854-1",
            "sellerUri": "private-wallet",
            "sellerAddress": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8"
          }
        }
      }
    }
  ]
}

// Ledger Events Processing events: Token Listing by smart wallet enterprise
ledgerEvent = {
  "ResponseMetadata": {
    "RequestId": "L9YYJ440FA38XVKS2WTMFIUWMPBYQJLEJ5TTDQ5E90TCR3QBWWI7"
  },
  "Messages": [
    {
      "MessageId": "aa42675d-24cc-422d-b41e-cb3f0bc9dadd",
      "ReceiptHandle": "MGJiMTY1N2QtMzU5ZS00YTBjLWE0ZWYtMjYyYzEyMmM1YzFlIGFybjphd3M6c3FzOnVzLWVhc3QtMTowMDAwMDAwMDAwMDA6dGVzdCBjOTgxMDFmZS0zNGE3LTRlMjctYjY0MS0wMzM2OTg3NThjZWQgMTY1ODIxNjc2OC4xODI1OTc0",
      "MD5OfBody": "41537cb61e0ba3a80e795703313f501b",
      "Body": {
        "version": "0",
        "id": "ab3ac9c6-8ff8-43d5-8dd6-7527c92a3abd",
        "detail-type": "tokenListing",
        "source": "original-works.evm-transaction-sender",
        "account": "000000000000",
        "time": "2022-07-19T07:28:08Z",
        "region": "us-east-1",
        "resources": [],
        "detail": {
          "transactionHash": "0x47fc582ed23573e13237e797222da6cef592a0d048f34654a9018f4457357e11",
          "networkName": "test",
          "origin": "Revelator",
          "transactionTimestamp": 1666609711,
          "isTestnet": true,
          "eventRawData": {
            "blockchain_event": {
              "to": "0xfd9248E66Cb99228d1a8BdDc65Ed71A7879E13e5",
              "from": "0xFCA8B8eADbc7302a240541f6E1921a24c604D9B6",
              "contractAddress": null,
              "transactionIndex": 0,
              "gasUsed": {
                "type": "BigNumber",
                "hex": "0x044694"
              },
              "logsBloom": "0x00001000000800040000080000000000000000000000000200000000000000000000000000020000000800000000000000000000000000000100000000002000000000000000000000000000000000000000000000000000000010000002000000000000000000000001000000001000000001000000000000000000000000000000000020000000000000401000000008000000000000004000000000000000220000080000000000000000000000000000000000000000040000000000000000000000000000080000000000000000000000000008000020000000400000000000000000000000010000000000000000000000000020000000080000000000",
              "blockHash": "0x370d814dac42bc95d6e9d3010b379f80c66b2f4a247f21ca0f8b809c1fa78efb",
              "transactionHash": "0x47fc582ed23573e13237e797222da6cef592a0d048f34654a9018f4457357e11",
              "logs": [
                {
                  "transactionIndex": 0,
                  "blockNumber": 72,
                  "transactionHash": "0x47fc582ed23573e13237e797222da6cef592a0d048f34654a9018f4457357e11",
                  "address": "0xE00F62e10E075d908Ca24FccBea03c552d10896b",
                  "topics": [
                    "0xf10cda68996dfb656d49ab0db3c62cc5f0849710633671a337171c3ad9255186"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000003e8000000000000000000000000e00f62e10e075d908ca24fccbea03c552d10896b",
                  "logIndex": 0,
                  "blockHash": "0x370d814dac42bc95d6e9d3010b379f80c66b2f4a247f21ca0f8b809c1fa78efb"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 72,
                  "transactionHash": "0x47fc582ed23573e13237e797222da6cef592a0d048f34654a9018f4457357e11",
                  "address": "0x9992642d36c2a9aEBD97DFe658a53e662d5c0f9f",
                  "topics": [
                    "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62",
                    "0x000000000000000000000000e00f62e10e075d908ca24fccbea03c552d10896b",
                    "0x000000000000000000000000fd9248e66cb99228d1a8bddc65ed71a7879e13e5",
                    "0x00000000000000000000000069e6b1d5a0341ca47236af3cd3418eaa37b1a3b7"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001",
                  "logIndex": 1,
                  "blockHash": "0x370d814dac42bc95d6e9d3010b379f80c66b2f4a247f21ca0f8b809c1fa78efb"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 72,
                  "transactionHash": "0x47fc582ed23573e13237e797222da6cef592a0d048f34654a9018f4457357e11",
                  "address": "0xE00F62e10E075d908Ca24FccBea03c552d10896b",
                  "topics": [
                    "0xa7778f17f478d5cfebb7eb4bb4c7dde4eaaa2fb8a729391e5a7d979448899d2b"
                  ],
                  "data": "0x000000000000000000000000fd9248e66cb99228d1a8bddc65ed71a7879e13e50000000000000000000000009992642d36c2a9aebd97dfe658a53e662d5c0f9f0000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000003e80000000000000000000000000000000000000000000000000000000000000001",
                  "logIndex": 2,
                  "blockHash": "0x370d814dac42bc95d6e9d3010b379f80c66b2f4a247f21ca0f8b809c1fa78efb"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 72,
                  "transactionHash": "0x47fc582ed23573e13237e797222da6cef592a0d048f34654a9018f4457357e11",
                  "address": "0xfd9248E66Cb99228d1a8BdDc65Ed71A7879E13e5",
                  "topics": [
                    "0x4e2058815a1087a94d8a92ecdce2f91d1370aa8c270ef97b0f28e0a3c6f68a87"
                  ],
                  "data": "0x000000000000000000000000fca8b8eadbc7302a240541f6e1921a24c604d9b6000000000000000000000000e00f62e10e075d908ca24fccbea03c552d10896b00000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000647e07590d0000000000000000000000009992642d36c2a9aebd97dfe658a53e662d5c0f9f000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000003e8000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
                  "logIndex": 3,
                  "blockHash": "0x370d814dac42bc95d6e9d3010b379f80c66b2f4a247f21ca0f8b809c1fa78efb"
                }
              ],
              "blockNumber": 72,
              "confirmations": 1,
              "cumulativeGasUsed": {
                "type": "BigNumber",
                "hex": "0x044694"
              },
              "effectiveGasPrice": {
                "type": "BigNumber",
                "hex": "0x5969a723"
              },
              "status": 1,
              "type": 2,
              "byzantium": true
            }
          },
          "wallets": [
            {
              "ownerUri": "Revelator|operational-wallet",
              "walletId": "0xFCA8B8eADbc7302a240541f6E1921a24c604D9B6",
              "type": "operationalWallet"
            }
          ],
          "transactions": [
            {
              "from": "0xFCA8B8eADbc7302a240541f6E1921a24c604D9B6",
              "to": "0x0000000000000000000000000000000000000000",
              "amount": "0.000420344981893692",
              "currency": "ETH",
              "transactionType": "gasFee"
            }
          ],
          "eventMetadata": {
            "tokenId": "0x9992642d36c2a9aEBD97DFe658a53e662d5c0f9f-1",
            "id": "1234-1234-1234-1234",
            "sellerUri": "Revelator|EnterpriseWallet|1",
            "sellerAddress": "0xfd9248E66Cb99228d1a8BdDc65Ed71A7879E13e5"
          }
        }
      }
    }
  ]
}

// Ledger Events Processing events: Token Listing by web3 retail
ledgerEvent = {
  "ResponseMetadata": {
    "RequestId": "L9YYJ440FA38XVKS2WTMFIUWMPBYQJLEJ5TTDQ5E90TCR3QBWWI7"
  },
  "Messages": [
    {
      "MessageId": "aa42675d-24cc-422d-b41e-cb3f0bc9dadd",
      "ReceiptHandle": "MGJiMTY1N2QtMzU5ZS00YTBjLWE0ZWYtMjYyYzEyMmM1YzFlIGFybjphd3M6c3FzOnVzLWVhc3QtMTowMDAwMDAwMDAwMDA6dGVzdCBjOTgxMDFmZS0zNGE3LTRlMjctYjY0MS0wMzM2OTg3NThjZWQgMTY1ODIxNjc2OC4xODI1OTc0",
      "MD5OfBody": "41537cb61e0ba3a80e795703313f501b",
      "Body": {
        "version": "0",
        "id": "ab3ac9c6-8ff8-43d5-8dd6-7527c92a3abd",
        "detail-type": "tokenListing",
        "source": "original-works.evm-transaction-sender",
        "account": "000000000000",
        "time": "2022-07-19T07:28:08Z",
        "region": "us-east-1",
        "resources": [],
        "detail": {
          "transactionHash": "0xe51ffcf8d2513c47b30a25e42c3f7ee550090c7769695f7a1fd672ab8752bc04",
          "networkName": "test",
          "origin": "Revelator",
          "transactionTimestamp": 1666609718,
          "isTestnet": true,
          "eventRawData": {
            "blockchain_event": {
              "to": "0xE00F62e10E075d908Ca24FccBea03c552d10896b",
              "from": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "contractAddress": null,
              "transactionIndex": 0,
              "gasUsed": {
                "type": "BigNumber",
                "hex": "0x040523"
              },
              "logsBloom": "0x00000000000004000000080000000000080000000000008200000000000000000000000000020000000000000000800000000000000000000100000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000001000000001000000000000000000000000000000000000000000000000401000000008000000000000004000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000020000000400020000000000000000000000000000000000000000000000021000000080000000000",
              "blockHash": "0xdd3c5ef2a17cdef22ceb4babcbd0b40d812c74c2a924543fa016883d6a23c4e5",
              "transactionHash": "0xe51ffcf8d2513c47b30a25e42c3f7ee550090c7769695f7a1fd672ab8752bc04",
              "logs": [
                {
                  "transactionIndex": 0,
                  "blockNumber": 74,
                  "transactionHash": "0xe51ffcf8d2513c47b30a25e42c3f7ee550090c7769695f7a1fd672ab8752bc04",
                  "address": "0xE00F62e10E075d908Ca24FccBea03c552d10896b",
                  "topics": [
                    "0xf10cda68996dfb656d49ab0db3c62cc5f0849710633671a337171c3ad9255186"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000003e8000000000000000000000000e00f62e10e075d908ca24fccbea03c552d10896b",
                  "logIndex": 0,
                  "blockHash": "0xdd3c5ef2a17cdef22ceb4babcbd0b40d812c74c2a924543fa016883d6a23c4e5"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 74,
                  "transactionHash": "0xe51ffcf8d2513c47b30a25e42c3f7ee550090c7769695f7a1fd672ab8752bc04",
                  "address": "0x099F0eEcf8118e43B8dC43875BCc926617450863",
                  "topics": [
                    "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62",
                    "0x000000000000000000000000e00f62e10e075d908ca24fccbea03c552d10896b",
                    "0x000000000000000000000000776807b830508844dfa3b60e43e1cc13e88a0cd8",
                    "0x00000000000000000000000069e6b1d5a0341ca47236af3cd3418eaa37b1a3b7"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001",
                  "logIndex": 1,
                  "blockHash": "0xdd3c5ef2a17cdef22ceb4babcbd0b40d812c74c2a924543fa016883d6a23c4e5"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 74,
                  "transactionHash": "0xe51ffcf8d2513c47b30a25e42c3f7ee550090c7769695f7a1fd672ab8752bc04",
                  "address": "0xE00F62e10E075d908Ca24FccBea03c552d10896b",
                  "topics": [
                    "0xa7778f17f478d5cfebb7eb4bb4c7dde4eaaa2fb8a729391e5a7d979448899d2b"
                  ],
                  "data": "0x000000000000000000000000776807b830508844dfa3b60e43e1cc13e88a0cd8000000000000000000000000099f0eecf8118e43b8dc43875bcc9266174508630000000000000000000000000000000000000000000000000000000000000007000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000003e80000000000000000000000000000000000000000000000000000000000000001",
                  "logIndex": 2,
                  "blockHash": "0xdd3c5ef2a17cdef22ceb4babcbd0b40d812c74c2a924543fa016883d6a23c4e5"
                }
              ],
              "blockNumber": 74,
              "confirmations": 1,
              "cumulativeGasUsed": {
                "type": "BigNumber",
                "hex": "0x040523"
              },
              "effectiveGasPrice": {
                "type": "BigNumber",
                "hex": "0x59695134"
              },
              "status": 1,
              "type": 2,
              "byzantium": true
            }
          },
          "wallets": [
            {
              "ownerUri": "private-wallet",
              "walletId": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "type": "private-wallet"
            }
          ],
          "transactions": [
            {
              "from": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "to": "0x0000000000000000000000000000000000000000",
              "amount": "0.000395208072896028",
              "currency": "ETH",
              "transactionType": "gasFee"
            },
            {
              "from": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "to": "0xE00F62e10E075d908Ca24FccBea03c552d10896b",
              "amount": "0.000000000000001",
              "currency": "ETH",
              "transactionType": "marketFee"
            }
          ],
          "eventMetadata": {
            "tokenId": "0x099F0eEcf8118e43B8dC43875BCc926617450863-1",
            "sellerUri": "private-wallet",
            "sellerAddress": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8"
          }
        }
      }
    }
  ]
}

// Ledger Events Processing events: Token Unlisting by smart wallet enterprise
ledgerEvent = {
  "ResponseMetadata": {
    "RequestId": "L9YYJ440FA38XVKS2WTMFIUWMPBYQJLEJ5TTDQ5E90TCR3QBWWI7"
  },
  "Messages": [
    {
      "MessageId": "aa42675d-24cc-422d-b41e-cb3f0bc9dadd",
      "ReceiptHandle": "MGJiMTY1N2QtMzU5ZS00YTBjLWE0ZWYtMjYyYzEyMmM1YzFlIGFybjphd3M6c3FzOnVzLWVhc3QtMTowMDAwMDAwMDAwMDA6dGVzdCBjOTgxMDFmZS0zNGE3LTRlMjctYjY0MS0wMzM2OTg3NThjZWQgMTY1ODIxNjc2OC4xODI1OTc0",
      "MD5OfBody": "41537cb61e0ba3a80e795703313f501b",
      "Body": {
        "version": "0",
        "id": "ab3ac9c6-8ff8-43d5-8dd6-7527c92a3abd",
        "detail-type": "tokenUnlisting",
        "source": "original-works.evm-transaction-sender",
        "account": "000000000000",
        "time": "2022-07-19T07:28:08Z",
        "region": "us-east-1",
        "resources": [],
        "detail": {
          "transactionHash": "0xfa12aa97d32a11cb44e45cd62c7adf6d5596021754c82ede96db9c54a1d8961b",
          "networkName": "test",
          "origin": "Revelator",
          "transactionTimestamp": 1666609726,
          "isTestnet": true,
          "eventRawData": {
            "blockchain_event": {
              "to": "0xfd9248E66Cb99228d1a8BdDc65Ed71A7879E13e5",
              "from": "0xFCA8B8eADbc7302a240541f6E1921a24c604D9B6",
              "contractAddress": null,
              "transactionIndex": 0,
              "gasUsed": {
                "type": "BigNumber",
                "hex": "0x01915e"
              },
              "logsBloom": "0x00000000000800040000080000000000000000000000000200000000000000000000000000020000000800000000000000000000000000008100000000002000000000000000000000000000000400000000000000000000100010000002000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000401000000008000000000000000000000000000000000000080000000000000000000000000000000000000008040000000000000000000000000000080000000000000000000000004008000000000000400000000000000000000000010000000000000000000000000020000000080000000000",
              "blockHash": "0x4b8472cff8fcfce9a2b70368851bc412566a453b42da795c1c232fc2f5e53218",
              "transactionHash": "0xfa12aa97d32a11cb44e45cd62c7adf6d5596021754c82ede96db9c54a1d8961b",
              "logs": [
                {
                  "transactionIndex": 0,
                  "blockNumber": 77,
                  "transactionHash": "0xfa12aa97d32a11cb44e45cd62c7adf6d5596021754c82ede96db9c54a1d8961b",
                  "address": "0xd4C396b21206D56A0C77BbEce8a577D9Dd0fd8a3",
                  "topics": [
                    "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62",
                    "0x000000000000000000000000e00f62e10e075d908ca24fccbea03c552d10896b",
                    "0x00000000000000000000000069e6b1d5a0341ca47236af3cd3418eaa37b1a3b7",
                    "0x000000000000000000000000fd9248e66cb99228d1a8bddc65ed71a7879e13e5"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001",
                  "logIndex": 0,
                  "blockHash": "0x4b8472cff8fcfce9a2b70368851bc412566a453b42da795c1c232fc2f5e53218"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 77,
                  "transactionHash": "0xfa12aa97d32a11cb44e45cd62c7adf6d5596021754c82ede96db9c54a1d8961b",
                  "address": "0xE00F62e10E075d908Ca24FccBea03c552d10896b",
                  "topics": [
                    "0xfcd5ac40a159423d19402f3ef99538252fa8a61e9efa453402408258bb716e13"
                  ],
                  "data": "0x000000000000000000000000fd9248e66cb99228d1a8bddc65ed71a7879e13e5000000000000000000000000d4c396b21206d56a0c77bbece8a577d9dd0fd8a300000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000001",
                  "logIndex": 1,
                  "blockHash": "0x4b8472cff8fcfce9a2b70368851bc412566a453b42da795c1c232fc2f5e53218"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 77,
                  "transactionHash": "0xfa12aa97d32a11cb44e45cd62c7adf6d5596021754c82ede96db9c54a1d8961b",
                  "address": "0xfd9248E66Cb99228d1a8BdDc65Ed71A7879E13e5",
                  "topics": [
                    "0x4e2058815a1087a94d8a92ecdce2f91d1370aa8c270ef97b0f28e0a3c6f68a87"
                  ],
                  "data": "0x000000000000000000000000fca8b8eadbc7302a240541f6e1921a24c604d9b6000000000000000000000000e00f62e10e075d908ca24fccbea03c552d10896b00000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000000441791154f000000000000000000000000d4c396b21206d56a0c77bbece8a577d9dd0fd8a30000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
                  "logIndex": 2,
                  "blockHash": "0x4b8472cff8fcfce9a2b70368851bc412566a453b42da795c1c232fc2f5e53218"
                }
              ],
              "blockNumber": 77,
              "confirmations": 1,
              "cumulativeGasUsed": {
                "type": "BigNumber",
                "hex": "0x01915e"
              },
              "effectiveGasPrice": {
                "type": "BigNumber",
                "hex": "0x5968f370"
              },
              "status": 1,
              "type": 2,
              "byzantium": true
            }
          },
          "wallets": [
            {
              "ownerUri": "Revelator|operational-wallet",
              "walletId": "0xFCA8B8eADbc7302a240541f6E1921a24c604D9B6",
              "type": "operationalWallet"
            }
          ],
          "transactions": [
            {
              "from": "0xFCA8B8eADbc7302a240541f6E1921a24c604D9B6",
              "to": "0x0000000000000000000000000000000000000000",
              "amount": "0.000154130167092",
              "currency": "ETH",
              "transactionType": "gasFee"
            }
          ],
          "eventMetadata": {
            "tokenId": "0xd4C396b21206D56A0C77BbEce8a577D9Dd0fd8a3-1",
            "id": "1234-1234-1234-1234",
            "sellerUri": "Revelator|EnterpriseWallet|1",
            "sellerAddress": "0xfd9248E66Cb99228d1a8BdDc65Ed71A7879E13e5"
          }
        }
      }
    }
  ]
}

// Ledger Events Processing events: Token Unlisting by web3 retail
ledgerEvent = {
  "ResponseMetadata": {
    "RequestId": "L9YYJ440FA38XVKS2WTMFIUWMPBYQJLEJ5TTDQ5E90TCR3QBWWI7"
  },
  "Messages": [
    {
      "MessageId": "aa42675d-24cc-422d-b41e-cb3f0bc9dadd",
      "ReceiptHandle": "MGJiMTY1N2QtMzU5ZS00YTBjLWE0ZWYtMjYyYzEyMmM1YzFlIGFybjphd3M6c3FzOnVzLWVhc3QtMTowMDAwMDAwMDAwMDA6dGVzdCBjOTgxMDFmZS0zNGE3LTRlMjctYjY0MS0wMzM2OTg3NThjZWQgMTY1ODIxNjc2OC4xODI1OTc0",
      "MD5OfBody": "41537cb61e0ba3a80e795703313f501b",
      "Body": {
        "version": "0",
        "id": "ab3ac9c6-8ff8-43d5-8dd6-7527c92a3abd",
        "detail-type": "tokenUnlisting",
        "source": "original-works.evm-transaction-sender",
        "account": "000000000000",
        "time": "2022-07-19T07:28:08Z",
        "region": "us-east-1",
        "resources": [],
        "detail": {
          "transactionHash": "0x94a636c6fcd33f9fd3c9998a5c548f9d4ad36df2837694dc4f1b0023261e374f",
          "networkName": "test",
          "origin": "Revelator",
          "transactionTimestamp": 1666609734,
          "isTestnet": true,
          "eventRawData": {
            "blockchain_event": {
              "to": "0xE00F62e10E075d908Ca24FccBea03c552d10896b",
              "from": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "contractAddress": null,
              "transactionIndex": 0,
              "gasUsed": {
                "type": "BigNumber",
                "hex": "0x012d58"
              },
              "logsBloom": "0x00000000000004000000080000000000000000000000000200000000000000000000000000020000100000000000800000000000000000000100000000002000004000000000000000000000000400000000000000000000100000000000000000001000000000000000000000200000000000000000000000000000000000000000000000000000000000401000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000400000000000000000000000000000000000000000000000000021000000080000000000",
              "blockHash": "0xfa2ed87696cb134ffd0e0a98ad1042a3c4cc4ecdcb2d48ffe05a29b85a3ac6f8",
              "transactionHash": "0x94a636c6fcd33f9fd3c9998a5c548f9d4ad36df2837694dc4f1b0023261e374f",
              "logs": [
                {
                  "transactionIndex": 0,
                  "blockNumber": 80,
                  "transactionHash": "0x94a636c6fcd33f9fd3c9998a5c548f9d4ad36df2837694dc4f1b0023261e374f",
                  "address": "0xDC13464172CD431e4a9f85e79E4479d938c9c60f",
                  "topics": [
                    "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62",
                    "0x000000000000000000000000e00f62e10e075d908ca24fccbea03c552d10896b",
                    "0x00000000000000000000000069e6b1d5a0341ca47236af3cd3418eaa37b1a3b7",
                    "0x000000000000000000000000776807b830508844dfa3b60e43e1cc13e88a0cd8"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001",
                  "logIndex": 0,
                  "blockHash": "0xfa2ed87696cb134ffd0e0a98ad1042a3c4cc4ecdcb2d48ffe05a29b85a3ac6f8"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 80,
                  "transactionHash": "0x94a636c6fcd33f9fd3c9998a5c548f9d4ad36df2837694dc4f1b0023261e374f",
                  "address": "0xE00F62e10E075d908Ca24FccBea03c552d10896b",
                  "topics": [
                    "0xfcd5ac40a159423d19402f3ef99538252fa8a61e9efa453402408258bb716e13"
                  ],
                  "data": "0x000000000000000000000000776807b830508844dfa3b60e43e1cc13e88a0cd8000000000000000000000000dc13464172cd431e4a9f85e79e4479d938c9c60f00000000000000000000000000000000000000000000000000000000000000090000000000000000000000000000000000000000000000000000000000000001",
                  "logIndex": 1,
                  "blockHash": "0xfa2ed87696cb134ffd0e0a98ad1042a3c4cc4ecdcb2d48ffe05a29b85a3ac6f8"
                }
              ],
              "blockNumber": 80,
              "confirmations": 1,
              "cumulativeGasUsed": {
                "type": "BigNumber",
                "hex": "0x012d58"
              },
              "effectiveGasPrice": {
                "type": "BigNumber",
                "hex": "0x5968b3ba"
              },
              "status": 1,
              "type": 2,
              "byzantium": true
            }
          },
          "wallets": [
            {
              "ownerUri": "private-wallet",
              "walletId": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "type": "private-wallet"
            }
          ],
          "transactions": [
            {
              "from": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "to": "0x0000000000000000000000000000000000000000",
              "amount": "0.000115718621198832",
              "currency": "ETH",
              "transactionType": "gasFee"
            }
          ],
          "eventMetadata": {
            "tokenId": "0xDC13464172CD431e4a9f85e79E4479d938c9c60f-1",
            "sellerUri": "private-wallet",
            "sellerAddress": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8"
          }
        }
      }
    }
  ]
}

// Ledger Events Processing events: Token Transfer by smart wallet enterprise to smart wallet retail
ledgerEvent = {
  "ResponseMetadata": {
    "RequestId": "L9YYJ440FA38XVKS2WTMFIUWMPBYQJLEJ5TTDQ5E90TCR3QBWWI7"
  },
  "Messages": [
    {
      "MessageId": "aa42675d-24cc-422d-b41e-cb3f0bc9dadd",
      "ReceiptHandle": "MGJiMTY1N2QtMzU5ZS00YTBjLWE0ZWYtMjYyYzEyMmM1YzFlIGFybjphd3M6c3FzOnVzLWVhc3QtMTowMDAwMDAwMDAwMDA6dGVzdCBjOTgxMDFmZS0zNGE3LTRlMjctYjY0MS0wMzM2OTg3NThjZWQgMTY1ODIxNjc2OC4xODI1OTc0",
      "MD5OfBody": "41537cb61e0ba3a80e795703313f501b",
      "Body": {
        "version": "0",
        "id": "ab3ac9c6-8ff8-43d5-8dd6-7527c92a3abd",
        "detail-type": "tokenTransfer",
        "source": "original-works.evm-transaction-sender",
        "account": "000000000000",
        "time": "2022-07-19T07:28:08Z",
        "region": "us-east-1",
        "resources": [],
        "detail": {
          "transactionHash": "0x9058837cc1b9a601923fddbf9f4b67fd00befd005508e5504ac5ca55562cf6c1",
          "networkName": "test",
          "origin": "Revelator",
          "transactionTimestamp": 1666609742,
          "isTestnet": true,
          "eventRawData": {
            "blockchain_event": {
              "to": "0x36E9c7Ef128D9bD6556dED9dF494450DC1745c1d",
              "from": "0xFCA8B8eADbc7302a240541f6E1921a24c604D9B6",
              "contractAddress": null,
              "transactionIndex": 0,
              "gasUsed": {
                "type": "BigNumber",
                "hex": "0x038752"
              },
              "logsBloom": "0x00000000000800040000080000000000000000000000000200020001000000000000000000020000000800000000000000000000040000000100002000002000000000000000000000000008000000400000000000000020000010000000000600000000020000000000000000000800000000000000000000000010000000000000000000000000000000401000000008008000000000000000000400000000000000080000000000000001000000000000000000000000040000000000000000000002000000000000000008000000000000000008000000000000400020000000000000000000000000000000000000000001000020000000090000000000",
              "blockHash": "0x550888b3b0920cfda3c17829f67b144aba4d9ac2b3a7a43aa592d44318eec8cf",
              "transactionHash": "0x9058837cc1b9a601923fddbf9f4b67fd00befd005508e5504ac5ca55562cf6c1",
              "logs": [
                {
                  "transactionIndex": 0,
                  "blockNumber": 83,
                  "transactionHash": "0x9058837cc1b9a601923fddbf9f4b67fd00befd005508e5504ac5ca55562cf6c1",
                  "address": "0x574AC9b985453EeDc2F731C89B307565eD68ED27",
                  "topics": [
                    "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62",
                    "0x000000000000000000000000e00f62e10e075d908ca24fccbea03c552d10896b",
                    "0x00000000000000000000000069e6b1d5a0341ca47236af3cd3418eaa37b1a3b7",
                    "0x00000000000000000000000036e9c7ef128d9bd6556ded9df494450dc1745c1d"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001",
                  "logIndex": 0,
                  "blockHash": "0x550888b3b0920cfda3c17829f67b144aba4d9ac2b3a7a43aa592d44318eec8cf"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 83,
                  "transactionHash": "0x9058837cc1b9a601923fddbf9f4b67fd00befd005508e5504ac5ca55562cf6c1",
                  "address": "0xE00F62e10E075d908Ca24FccBea03c552d10896b",
                  "topics": [
                    "0xa32a723e0e0ccd1f6b2cda064be2605e2dd5b9ca55dfa9b3568023d9c6363190"
                  ],
                  "data": "0x00000000000000000000000036e9c7ef128d9bd6556ded9df494450dc1745c1d000000000000000000000000574ac9b985453eedc2f731c89b307565ed68ed27000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000fd9248e66cb99228d1a8bddc65ed71a7879e13e5",
                  "logIndex": 1,
                  "blockHash": "0x550888b3b0920cfda3c17829f67b144aba4d9ac2b3a7a43aa592d44318eec8cf"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 83,
                  "transactionHash": "0x9058837cc1b9a601923fddbf9f4b67fd00befd005508e5504ac5ca55562cf6c1",
                  "address": "0xe4D4E1291656fdF15211e7071C8651a17405aF47",
                  "topics": [
                    "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                    "0x0000000000000000000000000000000000000000000000000000000000000000",
                    "0x000000000000000000000000fd9248e66cb99228d1a8bddc65ed71a7879e13e5"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000007d0",
                  "logIndex": 2,
                  "blockHash": "0x550888b3b0920cfda3c17829f67b144aba4d9ac2b3a7a43aa592d44318eec8cf"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 83,
                  "transactionHash": "0x9058837cc1b9a601923fddbf9f4b67fd00befd005508e5504ac5ca55562cf6c1",
                  "address": "0x36E9c7Ef128D9bD6556dED9dF494450DC1745c1d",
                  "topics": [
                    "0x4e2058815a1087a94d8a92ecdce2f91d1370aa8c270ef97b0f28e0a3c6f68a87"
                  ],
                  "data": "0x000000000000000000000000fca8b8eadbc7302a240541f6e1921a24c604d9b6000000000000000000000000e00f62e10e075d908ca24fccbea03c552d10896b00000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002200000000000000000000000000000000000000000000000000000000000000144a0d9558e000000000000000000000000574ac9b985453eedc2f731c89b307565ed68ed2700000000000000000000000036e9c7ef128d9bd6556ded9df494450dc1745c1d0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000007d000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000004123e3ef347db276c42b778e5eee6985b2779fadc7d58ac746aec07f5503bdbb143138476de82a7d65bf66a2c510a3996fd6de5634d5457f630273262eef61ae181b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
                  "logIndex": 3,
                  "blockHash": "0x550888b3b0920cfda3c17829f67b144aba4d9ac2b3a7a43aa592d44318eec8cf"
                }
              ],
              "blockNumber": 83,
              "confirmations": 1,
              "cumulativeGasUsed": {
                "type": "BigNumber",
                "hex": "0x038752"
              },
              "effectiveGasPrice": {
                "type": "BigNumber",
                "hex": "0x596888af"
              },
              "status": 1,
              "type": 2,
              "byzantium": true
            }
          },
          "wallets": [
            {
              "ownerUri": "Revelator|EnterpriseWallet|1",
              "walletId": "0xfd9248E66Cb99228d1a8BdDc65Ed71A7879E13e5",
              "type": "smartWallet"
            },
            {
              "ownerUri": "Revelator|RetailWallet|1",
              "walletId": "0x36E9c7Ef128D9bD6556dED9dF494450DC1745c1d",
              "type": "smartWallet"
            },
            {
              "ownerUri": "Revelator|operational-wallet",
              "walletId": "0xFCA8B8eADbc7302a240541f6E1921a24c604D9B6",
              "type": "operationalWallet"
            }
          ],
          "transactions": [
            {
              "from": "0xFCA8B8eADbc7302a240541f6E1921a24c604D9B6",
              "to": "0x0000000000000000000000000000000000000000",
              "amount": "0.00034688030926875",
              "currency": "ETH",
              "transactionType": "gasFee"
            },
            {
              "amount": "1",
              "currency": "0x574AC9b985453EeDc2F731C89B307565eD68ED27",
              "from": "0xfd9248E66Cb99228d1a8BdDc65Ed71A7879E13e5",
              "to": "0x36E9c7Ef128D9bD6556dED9dF494450DC1745c1d",
              "transactionType": "transferAsset"
            },
            {
              "transactionType": "transferCoins",
              "from": "0x0000000000000000000000000000000000000000",
              "to": "0xfd9248E66Cb99228d1a8BdDc65Ed71A7879E13e5",
              "amount": "2000",
              "currency": "REVCREDITS"
            }
          ],
          "eventMetadata": {
            "tokenId": "0x574AC9b985453EeDc2F731C89B307565eD68ED27-1",
            "id": "1234-1234-1234-1234",
            "sellerUri": "Revelator|EnterpriseWallet|1",
            "sellerAddress": "0xfd9248E66Cb99228d1a8BdDc65Ed71A7879E13e5",
            "buyerUri": "Revelator|RetailWallet|1",
            "buyerAddress": "0x36E9c7Ef128D9bD6556dED9dF494450DC1745c1d"
          }
        }
      }
    }
  ]
}

// Ledger Events Processing events: Token Transfer by smart wallet enterprise to web3 retail
ledgerEvent = {
  "ResponseMetadata": {
    "RequestId": "L9YYJ440FA38XVKS2WTMFIUWMPBYQJLEJ5TTDQ5E90TCR3QBWWI7"
  },
  "Messages": [
    {
      "MessageId": "aa42675d-24cc-422d-b41e-cb3f0bc9dadd",
      "ReceiptHandle": "MGJiMTY1N2QtMzU5ZS00YTBjLWE0ZWYtMjYyYzEyMmM1YzFlIGFybjphd3M6c3FzOnVzLWVhc3QtMTowMDAwMDAwMDAwMDA6dGVzdCBjOTgxMDFmZS0zNGE3LTRlMjctYjY0MS0wMzM2OTg3NThjZWQgMTY1ODIxNjc2OC4xODI1OTc0",
      "MD5OfBody": "41537cb61e0ba3a80e795703313f501b",
      "Body": {
        "version": "0",
        "id": "ab3ac9c6-8ff8-43d5-8dd6-7527c92a3abd",
        "detail-type": "tokenTransfer",
        "source": "original-works.evm-transaction-sender",
        "account": "000000000000",
        "time": "2022-07-19T07:28:08Z",
        "region": "us-east-1",
        "resources": [],
        "detail": {
          "transactionHash": "0x28bf4d3b401e7ed3171b954934df3b9cc5f4aff9c17b3cde615ff7464d1c810e",
          "networkName": "test",
          "origin": "Revelator",
          "transactionTimestamp": 1666609751,
          "isTestnet": true,
          "eventRawData": {
            "blockchain_event": {
              "to": "0xE00F62e10E075d908Ca24FccBea03c552d10896b",
              "from": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "contractAddress": null,
              "transactionIndex": 0,
              "gasUsed": {
                "type": "BigNumber",
                "hex": "0x01dffd"
              },
              "logsBloom": "0x00000000000004000000080000000000000000000000000200000001000000000000000000020000000000000000800000000000000000000100000000002000000000000000000000000000000000400000000000000000000000000000000400000000000000000000000000001000000001000000000000000000000000000100000000000000000000401000000008000000000000004000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000100000000000000000000000000000008000000000000400000000000000000000000000000000000000000000000000021000000080000000000",
              "blockHash": "0x4c349a1b9036e241cb8fc1e17d91acfa92d3204f53cc5128eb8956f6dd59d790",
              "transactionHash": "0x28bf4d3b401e7ed3171b954934df3b9cc5f4aff9c17b3cde615ff7464d1c810e",
              "logs": [
                {
                  "transactionIndex": 0,
                  "blockNumber": 86,
                  "transactionHash": "0x28bf4d3b401e7ed3171b954934df3b9cc5f4aff9c17b3cde615ff7464d1c810e",
                  "address": "0xE00F62e10E075d908Ca24FccBea03c552d10896b",
                  "topics": [
                    "0xf10cda68996dfb656d49ab0db3c62cc5f0849710633671a337171c3ad9255186"
                  ],
                  "data": "0x000000000000000000000000000000000000000000000000000000000000000f000000000000000000000000e00f62e10e075d908ca24fccbea03c552d10896b",
                  "logIndex": 0,
                  "blockHash": "0x4c349a1b9036e241cb8fc1e17d91acfa92d3204f53cc5128eb8956f6dd59d790"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 86,
                  "transactionHash": "0x28bf4d3b401e7ed3171b954934df3b9cc5f4aff9c17b3cde615ff7464d1c810e",
                  "address": "0xb87073cF2ed2714abB74faC64bb5b1ee3D5FfFf6",
                  "topics": [
                    "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62",
                    "0x000000000000000000000000e00f62e10e075d908ca24fccbea03c552d10896b",
                    "0x00000000000000000000000069e6b1d5a0341ca47236af3cd3418eaa37b1a3b7",
                    "0x000000000000000000000000776807b830508844dfa3b60e43e1cc13e88a0cd8"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001",
                  "logIndex": 1,
                  "blockHash": "0x4c349a1b9036e241cb8fc1e17d91acfa92d3204f53cc5128eb8956f6dd59d790"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 86,
                  "transactionHash": "0x28bf4d3b401e7ed3171b954934df3b9cc5f4aff9c17b3cde615ff7464d1c810e",
                  "address": "0xE00F62e10E075d908Ca24FccBea03c552d10896b",
                  "topics": [
                    "0xa32a723e0e0ccd1f6b2cda064be2605e2dd5b9ca55dfa9b3568023d9c6363190"
                  ],
                  "data": "0x000000000000000000000000776807b830508844dfa3b60e43e1cc13e88a0cd8000000000000000000000000b87073cf2ed2714abb74fac64bb5b1ee3d5ffff6000000000000000000000000000000000000000000000000000000000000000b0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000003e80000000000000000000000000000000000000000000000000000000000000000000000000000000000000000fd9248e66cb99228d1a8bddc65ed71a7879e13e5",
                  "logIndex": 2,
                  "blockHash": "0x4c349a1b9036e241cb8fc1e17d91acfa92d3204f53cc5128eb8956f6dd59d790"
                }
              ],
              "blockNumber": 86,
              "confirmations": 1,
              "cumulativeGasUsed": {
                "type": "BigNumber",
                "hex": "0x01dffd"
              },
              "effectiveGasPrice": {
                "type": "BigNumber",
                "hex": "0x59686bb1"
              },
              "status": 1,
              "type": 2,
              "byzantium": true
            }
          },
          "wallets": [
            {
              "ownerUri": "Revelator|EnterpriseWallet|1",
              "walletId": "0xfd9248E66Cb99228d1a8BdDc65Ed71A7879E13e5",
              "type": "smartWallet"
            },
            {
              "ownerUri": "private-wallet",
              "walletId": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "type": "private-wallet"
            }
          ],
          "transactions": [
            {
              "from": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "to": "0x0000000000000000000000000000000000000000",
              "amount": "0.000184317409139949",
              "currency": "ETH",
              "transactionType": "gasFee"
            },
            {
              "amount": "1",
              "currency": "0xb87073cF2ed2714abB74faC64bb5b1ee3D5FfFf6",
              "from": "0xfd9248E66Cb99228d1a8BdDc65Ed71A7879E13e5",
              "to": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "transactionType": "transferAsset"
            },
            {
              "transactionType": "transferCoins",
              "currency": "ETH",
              "amount": "0.000000000000001",
              "from": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "to": "0xfd9248E66Cb99228d1a8BdDc65Ed71A7879E13e5"
            }
          ],
          "eventMetadata": {
            "tokenId": "0xb87073cF2ed2714abB74faC64bb5b1ee3D5FfFf6-1",
            "sellerUri": "Revelator|EnterpriseWallet|1",
            "sellerAddress": "0xfd9248E66Cb99228d1a8BdDc65Ed71A7879E13e5",
            "buyerUri": "private-wallet",
            "buyerAddress": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8"
          }
        }
      }
    }
  ]
}

// Ledger Events Processing events: Token Transfer by web3 retail to smart wallet retail
ledgerEvent = {
  "ResponseMetadata": {
    "RequestId": "L9YYJ440FA38XVKS2WTMFIUWMPBYQJLEJ5TTDQ5E90TCR3QBWWI7"
  },
  "Messages": [
    {
      "MessageId": "aa42675d-24cc-422d-b41e-cb3f0bc9dadd",
      "ReceiptHandle": "MGJiMTY1N2QtMzU5ZS00YTBjLWE0ZWYtMjYyYzEyMmM1YzFlIGFybjphd3M6c3FzOnVzLWVhc3QtMTowMDAwMDAwMDAwMDA6dGVzdCBjOTgxMDFmZS0zNGE3LTRlMjctYjY0MS0wMzM2OTg3NThjZWQgMTY1ODIxNjc2OC4xODI1OTc0",
      "MD5OfBody": "41537cb61e0ba3a80e795703313f501b",
      "Body": {
        "version": "0",
        "id": "ab3ac9c6-8ff8-43d5-8dd6-7527c92a3abd",
        "detail-type": "tokenTransfer",
        "source": "original-works.evm-transaction-sender",
        "account": "000000000000",
        "time": "2022-07-19T07:28:08Z",
        "region": "us-east-1",
        "resources": [],
        "detail": {
          "transactionHash": "0x5d1a747cba56ccbb09363bd45dbe9e52c6bf8885362b7d3d8e3de9bbe1142af7",
          "networkName": "test",
          "origin": "Revelator",
          "transactionTimestamp": 1666609759,
          "isTestnet": true,
          "eventRawData": {
            "blockchain_event": {
              "to": "0x36E9c7Ef128D9bD6556dED9dF494450DC1745c1d",
              "from": "0xFCA8B8eADbc7302a240541f6E1921a24c604D9B6",
              "contractAddress": null,
              "transactionIndex": 0,
              "gasUsed": {
                "type": "BigNumber",
                "hex": "0x02f6de"
              },
              "logsBloom": "0x00000000000004040080080000000000000000000000000200020001000000000000000000020000000000000000800000000000040000000100002000002000000000000000000000000008000000400000000000000020000010000000000600000000020000000000000000000800000000000000000000000010000000000000000000000000000000401000000008008000000000000000000000000000100000080000000000000001000000000000000000000000000000000000000000000002000200000000000000000000000000000008000000000000400020000000000000000000000000000000000000000000000021000000090000000000",
              "blockHash": "0x659009f8b571d5347d0e95c98e6aa854cadf23b48ea3622e28149a0f4f9ca759",
              "transactionHash": "0x5d1a747cba56ccbb09363bd45dbe9e52c6bf8885362b7d3d8e3de9bbe1142af7",
              "logs": [
                {
                  "transactionIndex": 0,
                  "blockNumber": 89,
                  "transactionHash": "0x5d1a747cba56ccbb09363bd45dbe9e52c6bf8885362b7d3d8e3de9bbe1142af7",
                  "address": "0x03F0323642B94dA0899B972Eb829cbfB234bC96c",
                  "topics": [
                    "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62",
                    "0x000000000000000000000000e00f62e10e075d908ca24fccbea03c552d10896b",
                    "0x00000000000000000000000069e6b1d5a0341ca47236af3cd3418eaa37b1a3b7",
                    "0x00000000000000000000000036e9c7ef128d9bd6556ded9df494450dc1745c1d"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001",
                  "logIndex": 0,
                  "blockHash": "0x659009f8b571d5347d0e95c98e6aa854cadf23b48ea3622e28149a0f4f9ca759"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 89,
                  "transactionHash": "0x5d1a747cba56ccbb09363bd45dbe9e52c6bf8885362b7d3d8e3de9bbe1142af7",
                  "address": "0xE00F62e10E075d908Ca24FccBea03c552d10896b",
                  "topics": [
                    "0xa32a723e0e0ccd1f6b2cda064be2605e2dd5b9ca55dfa9b3568023d9c6363190"
                  ],
                  "data": "0x00000000000000000000000036e9c7ef128d9bd6556ded9df494450dc1745c1d00000000000000000000000003f0323642b94da0899b972eb829cbfb234bc96c000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000776807b830508844dfa3b60e43e1cc13e88a0cd8",
                  "logIndex": 1,
                  "blockHash": "0x659009f8b571d5347d0e95c98e6aa854cadf23b48ea3622e28149a0f4f9ca759"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 89,
                  "transactionHash": "0x5d1a747cba56ccbb09363bd45dbe9e52c6bf8885362b7d3d8e3de9bbe1142af7",
                  "address": "0xe4D4E1291656fdF15211e7071C8651a17405aF47",
                  "topics": [
                    "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                    "0x0000000000000000000000000000000000000000000000000000000000000000",
                    "0x000000000000000000000000776807b830508844dfa3b60e43e1cc13e88a0cd8"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000007d0",
                  "logIndex": 2,
                  "blockHash": "0x659009f8b571d5347d0e95c98e6aa854cadf23b48ea3622e28149a0f4f9ca759"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 89,
                  "transactionHash": "0x5d1a747cba56ccbb09363bd45dbe9e52c6bf8885362b7d3d8e3de9bbe1142af7",
                  "address": "0x36E9c7Ef128D9bD6556dED9dF494450DC1745c1d",
                  "topics": [
                    "0x4e2058815a1087a94d8a92ecdce2f91d1370aa8c270ef97b0f28e0a3c6f68a87"
                  ],
                  "data": "0x000000000000000000000000fca8b8eadbc7302a240541f6e1921a24c604d9b6000000000000000000000000e00f62e10e075d908ca24fccbea03c552d10896b00000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002200000000000000000000000000000000000000000000000000000000000000144a0d9558e00000000000000000000000003f0323642b94da0899b972eb829cbfb234bc96c00000000000000000000000036e9c7ef128d9bd6556ded9df494450dc1745c1d0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000007d000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000418b444b128efbdcf7bc161155b7c9390ae7190536398ad0df440fbe8ff4552a282ab8a241808865580aff2eaf698659bff762ec88f6566d10afb8b1695a8b27191c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
                  "logIndex": 3,
                  "blockHash": "0x659009f8b571d5347d0e95c98e6aa854cadf23b48ea3622e28149a0f4f9ca759"
                }
              ],
              "blockNumber": 89,
              "confirmations": 1,
              "cumulativeGasUsed": {
                "type": "BigNumber",
                "hex": "0x02f6de"
              },
              "effectiveGasPrice": {
                "type": "BigNumber",
                "hex": "0x59685805"
              },
              "status": 1,
              "type": 2,
              "byzantium": true
            }
          },
          "wallets": [
            {
              "ownerUri": "private-wallet",
              "walletId": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "type": "private-wallet"
            },
            {
              "ownerUri": "Revelator|RetailWallet|1",
              "walletId": "0x36E9c7Ef128D9bD6556dED9dF494450DC1745c1d",
              "type": "smartWallet"
            },
            {
              "ownerUri": "Revelator|operational-wallet",
              "walletId": "0xFCA8B8eADbc7302a240541f6E1921a24c604D9B6",
              "type": "operationalWallet"
            }
          ],
          "transactions": [
            {
              "from": "0xFCA8B8eADbc7302a240541f6E1921a24c604D9B6",
              "to": "0x0000000000000000000000000000000000000000",
              "amount": "0.00029140704002927",
              "currency": "ETH",
              "transactionType": "gasFee"
            },
            {
              "amount": "1",
              "currency": "0x03F0323642B94dA0899B972Eb829cbfB234bC96c",
              "from": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "to": "0x36E9c7Ef128D9bD6556dED9dF494450DC1745c1d",
              "transactionType": "transferAsset"
            },
            {
              "transactionType": "transferCoins",
              "from": "0x0000000000000000000000000000000000000000",
              "to": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "amount": "2000",
              "currency": "REVCREDITS"
            }
          ],
          "eventMetadata": {
            "tokenId": "0x03F0323642B94dA0899B972Eb829cbfB234bC96c-1",
            "id": "1234-1234-1234-1234",
            "sellerUri": "private-wallet",
            "sellerAddress": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
            "buyerUri": "Revelator|RetailWallet|1",
            "buyerAddress": "0x36E9c7Ef128D9bD6556dED9dF494450DC1745c1d"
          }
        }
      }
    }
  ]
}

// Ledger Events Processing events: Token Transfer by web3 retail to web3 retail
ledgerEvent = {
  "ResponseMetadata": {
    "RequestId": "L9YYJ440FA38XVKS2WTMFIUWMPBYQJLEJ5TTDQ5E90TCR3QBWWI7"
  },
  "Messages": [
    {
      "MessageId": "aa42675d-24cc-422d-b41e-cb3f0bc9dadd",
      "ReceiptHandle": "MGJiMTY1N2QtMzU5ZS00YTBjLWE0ZWYtMjYyYzEyMmM1YzFlIGFybjphd3M6c3FzOnVzLWVhc3QtMTowMDAwMDAwMDAwMDA6dGVzdCBjOTgxMDFmZS0zNGE3LTRlMjctYjY0MS0wMzM2OTg3NThjZWQgMTY1ODIxNjc2OC4xODI1OTc0",
      "MD5OfBody": "41537cb61e0ba3a80e795703313f501b",
      "Body": {
        "version": "0",
        "id": "ab3ac9c6-8ff8-43d5-8dd6-7527c92a3abd",
        "detail-type": "tokenTransfer",
        "source": "original-works.evm-transaction-sender",
        "account": "000000000000",
        "time": "2022-07-19T07:28:08Z",
        "region": "us-east-1",
        "resources": [],
        "detail": {
          "transactionHash": "0x15771e9b4c10be2259c377e228792d60d3a3b71b31abfbadfa1adf37920e8e18",
          "networkName": "test",
          "origin": "Revelator",
          "transactionTimestamp": 1666609766,
          "isTestnet": true,
          "eventRawData": {
            "blockchain_event": {
              "to": "0xE00F62e10E075d908Ca24FccBea03c552d10896b",
              "from": "0xd0923e560173aFf2c6Caad24f1D56BB650256133",
              "contractAddress": null,
              "transactionIndex": 0,
              "gasUsed": {
                "type": "BigNumber",
                "hex": "0x01d565"
              },
              "logsBloom": "0x00000000000000000000080000000000000000000000000200000001000000000000000000020000000000000000000000000000000000000100000000002000000000000000000000000000000000400000000000000000000000000000000400000000000000000000000000001000000001000000000000000000000000000000000001000000000000401001000008000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000010000000000000400000000000000008000000000000400000004000000000000000000000000000000000000000000020000000080000000000",
              "blockHash": "0xc5ae69bb9a66ca7c22cf8a99293321e06214943e5503184089369e7923cc09a0",
              "transactionHash": "0x15771e9b4c10be2259c377e228792d60d3a3b71b31abfbadfa1adf37920e8e18",
              "logs": [
                {
                  "transactionIndex": 0,
                  "blockNumber": 92,
                  "transactionHash": "0x15771e9b4c10be2259c377e228792d60d3a3b71b31abfbadfa1adf37920e8e18",
                  "address": "0xE00F62e10E075d908Ca24FccBea03c552d10896b",
                  "topics": [
                    "0xf10cda68996dfb656d49ab0db3c62cc5f0849710633671a337171c3ad9255186"
                  ],
                  "data": "0x000000000000000000000000000000000000000000000000000000000000000f000000000000000000000000e00f62e10e075d908ca24fccbea03c552d10896b",
                  "logIndex": 0,
                  "blockHash": "0xc5ae69bb9a66ca7c22cf8a99293321e06214943e5503184089369e7923cc09a0"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 92,
                  "transactionHash": "0x15771e9b4c10be2259c377e228792d60d3a3b71b31abfbadfa1adf37920e8e18",
                  "address": "0xd04342c3A20B36EAEF4f3291f4035C571B2f2A4b",
                  "topics": [
                    "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62",
                    "0x000000000000000000000000e00f62e10e075d908ca24fccbea03c552d10896b",
                    "0x00000000000000000000000069e6b1d5a0341ca47236af3cd3418eaa37b1a3b7",
                    "0x000000000000000000000000d0923e560173aff2c6caad24f1d56bb650256133"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001",
                  "logIndex": 1,
                  "blockHash": "0xc5ae69bb9a66ca7c22cf8a99293321e06214943e5503184089369e7923cc09a0"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 92,
                  "transactionHash": "0x15771e9b4c10be2259c377e228792d60d3a3b71b31abfbadfa1adf37920e8e18",
                  "address": "0xE00F62e10E075d908Ca24FccBea03c552d10896b",
                  "topics": [
                    "0xa32a723e0e0ccd1f6b2cda064be2605e2dd5b9ca55dfa9b3568023d9c6363190"
                  ],
                  "data": "0x000000000000000000000000d0923e560173aff2c6caad24f1d56bb650256133000000000000000000000000d04342c3a20b36eaef4f3291f4035c571b2f2a4b000000000000000000000000000000000000000000000000000000000000000d0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000003e80000000000000000000000000000000000000000000000000000000000000000000000000000000000000000776807b830508844dfa3b60e43e1cc13e88a0cd8",
                  "logIndex": 2,
                  "blockHash": "0xc5ae69bb9a66ca7c22cf8a99293321e06214943e5503184089369e7923cc09a0"
                }
              ],
              "blockNumber": 92,
              "confirmations": 1,
              "cumulativeGasUsed": {
                "type": "BigNumber",
                "hex": "0x01d565"
              },
              "effectiveGasPrice": {
                "type": "BigNumber",
                "hex": "0x59684abe"
              },
              "status": 1,
              "type": 2,
              "byzantium": true
            }
          },
          "wallets": [
            {
              "ownerUri": "private-wallet",
              "walletId": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "type": "private-wallet"
            },
            {
              "ownerUri": "private-wallet",
              "walletId": "0xd0923e560173aFf2c6Caad24f1D56BB650256133",
              "type": "private-wallet"
            }
          ],
          "transactions": [
            {
              "from": "0xd0923e560173aFf2c6Caad24f1D56BB650256133",
              "to": "0x0000000000000000000000000000000000000000",
              "amount": "0.00018024835341183",
              "currency": "ETH",
              "transactionType": "gasFee"
            },
            {
              "amount": "1",
              "currency": "0xd04342c3A20B36EAEF4f3291f4035C571B2f2A4b",
              "from": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "to": "0xd0923e560173aFf2c6Caad24f1D56BB650256133",
              "transactionType": "transferAsset"
            },
            {
              "transactionType": "transferCoins",
              "currency": "ETH",
              "amount": "0.000000000000001",
              "from": "0xd0923e560173aFf2c6Caad24f1D56BB650256133",
              "to": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8"
            }
          ],
          "eventMetadata": {
            "tokenId": "0xd04342c3A20B36EAEF4f3291f4035C571B2f2A4b-1",
            "sellerUri": "private-wallet",
            "sellerAddress": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
            "buyerUri": "private-wallet",
            "buyerAddress": "0xd0923e560173aFf2c6Caad24f1D56BB650256133"
          }
        }
      }
    }
  ]
}

