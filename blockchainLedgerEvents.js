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
          "transactionHash": "0x407f9c56dc1421259362b157d786c848da8dea2f4bfe9242296c85f6ba598802",
          "networkName": "test",
          "origin": "Revelator",
          "transactionTimestamp": 1666614101,
          "isTestnet": true,
          "eventRawData": {
            "blockchain_event": {
              "to": "0x91c6BFFa96Bb8ed553A3B66d078C847A1512d4cA",
              "from": "0xFCA8B8eADbc7302a240541f6E1921a24c604D9B6",
              "contractAddress": null,
              "transactionIndex": 0,
              "gasUsed": {
                "type": "BigNumber",
                "hex": "0x028e01"
              },
              "logsBloom": "0x00000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000004000000000000080000000000000000000000000000100000000000000000000080000000000000020000000000000020000000000000000008000010004000000000000000040000040400000000080000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000080000400000000000000000000000000000000000000000000000000000000",
              "blockHash": "0xc837d27a7eda9739011750610e4b9561e2ba5af245b23d1c794c7f0714eeba04",
              "transactionHash": "0x407f9c56dc1421259362b157d786c848da8dea2f4bfe9242296c85f6ba598802",
              "logs": [
                {
                  "transactionIndex": 0,
                  "blockNumber": 18,
                  "transactionHash": "0x407f9c56dc1421259362b157d786c848da8dea2f4bfe9242296c85f6ba598802",
                  "address": "0x1085173503b98922009a812c5a9eaF19d71b2Eb1",
                  "topics": [
                    "0xbdb658fbebcb4884950df11335d9177f3b8c7fb1b1f5290202b9715198d7e105"
                  ],
                  "data": "0x01000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c2eff533102f69a30b93c44ff321e0ababcd7cf7",
                  "logIndex": 0,
                  "blockHash": "0xc837d27a7eda9739011750610e4b9561e2ba5af245b23d1c794c7f0714eeba04"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 18,
                  "transactionHash": "0x407f9c56dc1421259362b157d786c848da8dea2f4bfe9242296c85f6ba598802",
                  "address": "0x16c06545AAa2ab4b959FaC23e507805A241A0E38",
                  "topics": [
                    "0xa850ae9193f515cbae8d35e8925bd2be26627fc91bce650b8652ed254e9cab03"
                  ],
                  "data": "0x0000000000000000000000001085173503b98922009a812c5a9eaf19d71b2eb1",
                  "logIndex": 1,
                  "blockHash": "0xc837d27a7eda9739011750610e4b9561e2ba5af245b23d1c794c7f0714eeba04"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 18,
                  "transactionHash": "0x407f9c56dc1421259362b157d786c848da8dea2f4bfe9242296c85f6ba598802",
                  "address": "0x91c6BFFa96Bb8ed553A3B66d078C847A1512d4cA",
                  "topics": [
                    "0x7d2d8112351cf4e12726159ff74239b6371961d90784c7aa137d49e5b780db75"
                  ],
                  "data": "0x0000000000000000000000001085173503b98922009a812c5a9eaf19d71b2eb1",
                  "logIndex": 2,
                  "blockHash": "0xc837d27a7eda9739011750610e4b9561e2ba5af245b23d1c794c7f0714eeba04"
                }
              ],
              "blockNumber": 18,
              "confirmations": 5,
              "cumulativeGasUsed": {
                "type": "BigNumber",
                "hex": "0x028e01"
              },
              "effectiveGasPrice": {
                "type": "BigNumber",
                "hex": "0x5f763810"
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
              "amount": "0.000268145053866",
              "currency": "ETH",
              "transactionType": "gasFee"
            }
          ],
          "eventMetadata": {
            "id": "0x407f9c56dc1421259362b157d786c848da8dea2f4bfe9242296c85f6ba598802-test",
            "ownerUri": "Revelator|EnterpriseWallet|1",
            "smartWalletId": 7,
            "walletAddress": "0x1085173503b98922009a812c5a9eaF19d71b2Eb1"
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
          "transactionHash": "0x286c2000813d444191478caa4192e51095c28d697f6981e3c8166cee4bbcd205",
          "networkName": "test",
          "origin": "Revelator",
          "transactionTimestamp": 1666614102,
          "isTestnet": true,
          "eventRawData": {
            "blockchain_event": {
              "to": "0xFd5D988649e8e3430fFDc68048C3F3fbfe552B7E",
              "from": "0xFCA8B8eADbc7302a240541f6E1921a24c604D9B6",
              "contractAddress": null,
              "transactionIndex": 0,
              "gasUsed": {
                "type": "BigNumber",
                "hex": "0x021c5f"
              },
              "logsBloom": "0x00000000000000000010000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000020000800000000000000000000000000000080000000000000000000000000000000000000000000000000080000000000000020000000000000020000000000000000000002000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000",
              "blockHash": "0x3a3b4011bb235428782211329593c49064d87a3cc2b4a6acb4619c3525e8a731",
              "transactionHash": "0x286c2000813d444191478caa4192e51095c28d697f6981e3c8166cee4bbcd205",
              "logs": [
                {
                  "transactionIndex": 0,
                  "blockNumber": 19,
                  "transactionHash": "0x286c2000813d444191478caa4192e51095c28d697f6981e3c8166cee4bbcd205",
                  "address": "0x1c6A7d0067d20144F62fA0b0EdeE550DcC578224",
                  "topics": [
                    "0xbdb658fbebcb4884950df11335d9177f3b8c7fb1b1f5290202b9715198d7e105"
                  ],
                  "data": "0x01000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c2eff533102f69a30b93c44ff321e0ababcd7cf7",
                  "logIndex": 0,
                  "blockHash": "0x3a3b4011bb235428782211329593c49064d87a3cc2b4a6acb4619c3525e8a731"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 19,
                  "transactionHash": "0x286c2000813d444191478caa4192e51095c28d697f6981e3c8166cee4bbcd205",
                  "address": "0xFd5D988649e8e3430fFDc68048C3F3fbfe552B7E",
                  "topics": [
                    "0x7d2d8112351cf4e12726159ff74239b6371961d90784c7aa137d49e5b780db75"
                  ],
                  "data": "0x0000000000000000000000001c6a7d0067d20144f62fa0b0edee550dcc578224",
                  "logIndex": 1,
                  "blockHash": "0x3a3b4011bb235428782211329593c49064d87a3cc2b4a6acb4619c3525e8a731"
                }
              ],
              "blockNumber": 19,
              "confirmations": 4,
              "cumulativeGasUsed": {
                "type": "BigNumber",
                "hex": "0x021c5f"
              },
              "effectiveGasPrice": {
                "type": "BigNumber",
                "hex": "0x5eb6a090"
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
              "amount": "0.0002198180445116",
              "currency": "ETH",
              "transactionType": "gasFee"
            }
          ],
          "eventMetadata": {
            "id": "0x286c2000813d444191478caa4192e51095c28d697f6981e3c8166cee4bbcd205-test",
            "ownerUri": "Revelator|RetailWallet|1",
            "smartWalletId": 10,
            "walletAddress": "0x1c6A7d0067d20144F62fA0b0EdeE550DcC578224"
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
          "transactionHash": "0xe84bf0f81abdaae3295905fcbc5bac68cc975e1f187d0bf839c413de223555c3",
          "networkName": "test",
          "origin": "Revelator",
          "transactionTimestamp": 1666614134,
          "isTestnet": true,
          "eventRawData": {
            "blockchain_event": {
              "to": "0x1085173503b98922009a812c5a9eaF19d71b2Eb1",
              "from": "0xFCA8B8eADbc7302a240541f6E1921a24c604D9B6",
              "contractAddress": null,
              "transactionIndex": 0,
              "gasUsed": {
                "type": "BigNumber",
                "hex": "0x08472f"
              },
              "logsBloom": "0x02000000000020040000080000000000000000000000000000000000000000000000001000000000000000000000002000000000000000000000000000002000000400000010000000000000000008000000008000000000000010000000000000000000020000000000000000001800000001000000000010000000000000000000000000000000000000000000000000000000000800404000000008000010000000080008010000040000080000000000010000000000000000000000800000000000000000000000100000000002000000000008000000000010000020000008100000000050000000000000000000000000000000000000080000000000",
              "blockHash": "0x06c87f997256d15602bf1f90ba406b9bcbe093f215fd927b99dfa67b86feab64",
              "transactionHash": "0xe84bf0f81abdaae3295905fcbc5bac68cc975e1f187d0bf839c413de223555c3",
              "logs": [
                {
                  "transactionIndex": 0,
                  "blockNumber": 23,
                  "transactionHash": "0xe84bf0f81abdaae3295905fcbc5bac68cc975e1f187d0bf839c413de223555c3",
                  "address": "0x3fA83Fd2C45d427F18402f12215e96Bc07A02836",
                  "topics": [
                    "0xf10cda68996dfb656d49ab0db3c62cc5f0849710633671a337171c3ad9255186"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000003e80000000000000000000000003fa83fd2c45d427f18402f12215e96bc07a02836",
                  "logIndex": 0,
                  "blockHash": "0x06c87f997256d15602bf1f90ba406b9bcbe093f215fd927b99dfa67b86feab64"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 23,
                  "transactionHash": "0xe84bf0f81abdaae3295905fcbc5bac68cc975e1f187d0bf839c413de223555c3",
                  "address": "0x0a2758e7735EbE2b3C471a9dc7aD57186a8F1693",
                  "topics": [
                    "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62",
                    "0x000000000000000000000000860dd5bfd73c20f6ec37fe0cbbde8f5367177e20",
                    "0x0000000000000000000000000000000000000000000000000000000000000000",
                    "0x0000000000000000000000001085173503b98922009a812c5a9eaf19d71b2eb1"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001",
                  "logIndex": 1,
                  "blockHash": "0x06c87f997256d15602bf1f90ba406b9bcbe093f215fd927b99dfa67b86feab64"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 23,
                  "transactionHash": "0xe84bf0f81abdaae3295905fcbc5bac68cc975e1f187d0bf839c413de223555c3",
                  "address": "0x0a2758e7735EbE2b3C471a9dc7aD57186a8F1693",
                  "topics": [
                    "0x3fa96d7b6bcbfe71ef171666d84db3cf52fa2d1c8afdb1cc8e486177f208b7df"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000100000000000000000000000090da1d45b73d975ccfffc7619ced34443681e50600000000000000000000000000000000000000000000000000000000000003e8",
                  "logIndex": 2,
                  "blockHash": "0x06c87f997256d15602bf1f90ba406b9bcbe093f215fd927b99dfa67b86feab64"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 23,
                  "transactionHash": "0xe84bf0f81abdaae3295905fcbc5bac68cc975e1f187d0bf839c413de223555c3",
                  "address": "0x860Dd5bFd73c20F6ec37fe0cBbde8F5367177E20",
                  "topics": [
                    "0xe76d792fae4e6acaf674cb1bfd9d8badabb07d20b093084d36783c8fe6e94fad"
                  ],
                  "data": "0x0000000000000000000000000a2758e7735ebe2b3c471a9dc7ad57186a8f16930000000000000000000000008a7a1bbe765398e6e3cdca6478fc1fdb6ed2f12d0000000000000000000000001085173503b98922009a812c5a9eaf19d71b2eb1",
                  "logIndex": 3,
                  "blockHash": "0x06c87f997256d15602bf1f90ba406b9bcbe093f215fd927b99dfa67b86feab64"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 23,
                  "transactionHash": "0xe84bf0f81abdaae3295905fcbc5bac68cc975e1f187d0bf839c413de223555c3",
                  "address": "0x3fA83Fd2C45d427F18402f12215e96Bc07A02836",
                  "topics": [
                    "0x2def7b45ab6efe7742a4f3a2962e1ee66d7442eea1ba6f6e1559bf8b760deed6"
                  ],
                  "data": "0x000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000010000000000000000000000000a2758e7735ebe2b3c471a9dc7ad57186a8f16930000000000000000000000001085173503b98922009a812c5a9eaf19d71b2eb10000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000100000000000000000000000090da1d45b73d975ccfffc7619ced34443681e50600000000000000000000000000000000000000000000000000000000000003e800000000000000000000000000000000000000000000000000000000000000147777772e7368696e79756e69636f726e2e756e69000000000000000000000000",
                  "logIndex": 4,
                  "blockHash": "0x06c87f997256d15602bf1f90ba406b9bcbe093f215fd927b99dfa67b86feab64"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 23,
                  "transactionHash": "0xe84bf0f81abdaae3295905fcbc5bac68cc975e1f187d0bf839c413de223555c3",
                  "address": "0x1085173503b98922009a812c5a9eaF19d71b2Eb1",
                  "topics": [
                    "0x4e2058815a1087a94d8a92ecdce2f91d1370aa8c270ef97b0f28e0a3c6f68a87"
                  ],
                  "data": "0x000000000000000000000000fca8b8eadbc7302a240541f6e1921a24c604d9b60000000000000000000000003fa83fd2c45d427f18402f12215e96bc07a0283600000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001a000000000000000000000000000000000000000000000000000000000000000c45fd3b6fd000000000000000000000000000000000000000000000000000000000000008000000000000000000000000090da1d45b73d975ccfffc7619ced34443681e506000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000003e800000000000000000000000000000000000000000000000000000000000000147777772e7368696e79756e69636f726e2e756e69000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
                  "logIndex": 5,
                  "blockHash": "0x06c87f997256d15602bf1f90ba406b9bcbe093f215fd927b99dfa67b86feab64"
                }
              ],
              "blockNumber": 23,
              "confirmations": 1,
              "cumulativeGasUsed": {
                "type": "BigNumber",
                "hex": "0x08472f"
              },
              "effectiveGasPrice": {
                "type": "BigNumber",
                "hex": "0x5c926314"
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
              "walletId": "0x1085173503b98922009a812c5a9eaF19d71b2Eb1",
              "type": "smartWallet"
            }
          ],
          "transactions": [
            {
              "from": "0xFCA8B8eADbc7302a240541f6E1921a24c604D9B6",
              "to": "0x0000000000000000000000000000000000000000",
              "amount": "0.000842572473482412",
              "currency": "ETH",
              "transactionType": "gasFee"
            },
            {
              "amount": "1",
              "currency": "0x0a2758e7735EbE2b3C471a9dc7aD57186a8F1693",
              "from": "0x0000000000000000000000000000000000000000",
              "to": "0x1085173503b98922009a812c5a9eaF19d71b2Eb1",
              "transactionType": "transferAsset"
            }
          ],
          "eventMetadata": {
            "tokenId": "0x0a2758e7735EbE2b3C471a9dc7aD57186a8F1693-1",
            "id": "1234-1234-1234-1234",
            "sellerUri": "Revelator|EnterpriseWallet|1",
            "sellerAddress": "0x1085173503b98922009a812c5a9eaF19d71b2Eb1"
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
          "transactionHash": "0x08f5292feed8d67ec5dcd6992e84932f735ec37c6d3443f2d3ad21ae5240e793",
          "networkName": "test",
          "origin": "Revelator",
          "transactionTimestamp": 1666614141,
          "isTestnet": true,
          "eventRawData": {
            "blockchain_event": {
              "to": "0x3fA83Fd2C45d427F18402f12215e96Bc07A02836",
              "from": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "contractAddress": null,
              "transactionIndex": 0,
              "gasUsed": {
                "type": "BigNumber",
                "hex": "0x080bee"
              },
              "logsBloom": "0x02000000000024000000080000000000000008000000000000000000000000000000000000000000200000000000802000000000000000000000000000002000000400000010000000000000000000000000008000000000000000000000000000000000020000000000000000001800000001000000000010000000000000000000000000000000000000000000000000000000000800004000000000000000000000000000010000000000080000000000000000000000000000000000800000000000008000000000000000000002000000000008000000000010000020000008100000000050000000000000000000000000000001000000080000000000",
              "blockHash": "0x564f15109feb18462b338ce9860ba9f3349ad3fea9d5fa1c3a7a24ee830b4346",
              "transactionHash": "0x08f5292feed8d67ec5dcd6992e84932f735ec37c6d3443f2d3ad21ae5240e793",
              "logs": [
                {
                  "transactionIndex": 0,
                  "blockNumber": 24,
                  "transactionHash": "0x08f5292feed8d67ec5dcd6992e84932f735ec37c6d3443f2d3ad21ae5240e793",
                  "address": "0x3fA83Fd2C45d427F18402f12215e96Bc07A02836",
                  "topics": [
                    "0xf10cda68996dfb656d49ab0db3c62cc5f0849710633671a337171c3ad9255186"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000003e80000000000000000000000003fa83fd2c45d427f18402f12215e96bc07a02836",
                  "logIndex": 0,
                  "blockHash": "0x564f15109feb18462b338ce9860ba9f3349ad3fea9d5fa1c3a7a24ee830b4346"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 24,
                  "transactionHash": "0x08f5292feed8d67ec5dcd6992e84932f735ec37c6d3443f2d3ad21ae5240e793",
                  "address": "0xBF360356FaceE2BEe0ef70CC9AE66ec2dB319a0b",
                  "topics": [
                    "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62",
                    "0x000000000000000000000000860dd5bfd73c20f6ec37fe0cbbde8f5367177e20",
                    "0x0000000000000000000000000000000000000000000000000000000000000000",
                    "0x000000000000000000000000776807b830508844dfa3b60e43e1cc13e88a0cd8"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001",
                  "logIndex": 1,
                  "blockHash": "0x564f15109feb18462b338ce9860ba9f3349ad3fea9d5fa1c3a7a24ee830b4346"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 24,
                  "transactionHash": "0x08f5292feed8d67ec5dcd6992e84932f735ec37c6d3443f2d3ad21ae5240e793",
                  "address": "0xBF360356FaceE2BEe0ef70CC9AE66ec2dB319a0b",
                  "topics": [
                    "0x3fa96d7b6bcbfe71ef171666d84db3cf52fa2d1c8afdb1cc8e486177f208b7df"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000100000000000000000000000090da1d45b73d975ccfffc7619ced34443681e50600000000000000000000000000000000000000000000000000000000000003e8",
                  "logIndex": 2,
                  "blockHash": "0x564f15109feb18462b338ce9860ba9f3349ad3fea9d5fa1c3a7a24ee830b4346"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 24,
                  "transactionHash": "0x08f5292feed8d67ec5dcd6992e84932f735ec37c6d3443f2d3ad21ae5240e793",
                  "address": "0x860Dd5bFd73c20F6ec37fe0cBbde8F5367177E20",
                  "topics": [
                    "0xe76d792fae4e6acaf674cb1bfd9d8badabb07d20b093084d36783c8fe6e94fad"
                  ],
                  "data": "0x000000000000000000000000bf360356facee2bee0ef70cc9ae66ec2db319a0b0000000000000000000000008a7a1bbe765398e6e3cdca6478fc1fdb6ed2f12d000000000000000000000000776807b830508844dfa3b60e43e1cc13e88a0cd8",
                  "logIndex": 3,
                  "blockHash": "0x564f15109feb18462b338ce9860ba9f3349ad3fea9d5fa1c3a7a24ee830b4346"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 24,
                  "transactionHash": "0x08f5292feed8d67ec5dcd6992e84932f735ec37c6d3443f2d3ad21ae5240e793",
                  "address": "0x3fA83Fd2C45d427F18402f12215e96Bc07A02836",
                  "topics": [
                    "0x2def7b45ab6efe7742a4f3a2962e1ee66d7442eea1ba6f6e1559bf8b760deed6"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000000000000000000000001000000000000000000000000bf360356facee2bee0ef70cc9ae66ec2db319a0b000000000000000000000000776807b830508844dfa3b60e43e1cc13e88a0cd80000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000100000000000000000000000090da1d45b73d975ccfffc7619ced34443681e50600000000000000000000000000000000000000000000000000000000000003e800000000000000000000000000000000000000000000000000000000000000147777772e7368696e79756e69636f726e2e756e69000000000000000000000000",
                  "logIndex": 4,
                  "blockHash": "0x564f15109feb18462b338ce9860ba9f3349ad3fea9d5fa1c3a7a24ee830b4346"
                }
              ],
              "blockNumber": 24,
              "confirmations": 1,
              "cumulativeGasUsed": {
                "type": "BigNumber",
                "hex": "0x080bee"
              },
              "effectiveGasPrice": {
                "type": "BigNumber",
                "hex": "0x5c30c644"
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
              "amount": "0.000815640059133752",
              "currency": "ETH",
              "transactionType": "gasFee"
            },
            {
              "amount": "1",
              "currency": "0xBF360356FaceE2BEe0ef70CC9AE66ec2dB319a0b",
              "from": "0x0000000000000000000000000000000000000000",
              "to": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "transactionType": "transferAsset"
            },
            {
              "from": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "to": "0x3fA83Fd2C45d427F18402f12215e96Bc07A02836",
              "amount": "0.000000000000001",
              "currency": "ETH",
              "transactionType": "marketFee"
            }
          ],
          "eventMetadata": {
            "tokenId": "0xBF360356FaceE2BEe0ef70CC9AE66ec2dB319a0b-1",
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
          "transactionHash": "0x9440cab88f5aa0f3cf69132d29c2b7865aaeb4d515ba1408a50a1101b09c32b8",
          "networkName": "test",
          "origin": "Revelator",
          "transactionTimestamp": 1666614149,
          "isTestnet": true,
          "eventRawData": {
            "blockchain_event": {
              "to": "0x1085173503b98922009a812c5a9eaF19d71b2Eb1",
              "from": "0xFCA8B8eADbc7302a240541f6E1921a24c604D9B6",
              "contractAddress": null,
              "transactionIndex": 0,
              "gasUsed": {
                "type": "BigNumber",
                "hex": "0x044694"
              },
              "logsBloom": "0x00100000080020040000080000000000000000000000000000000000000000000000001000000000000000000000000000000000000000040000000000002000000000000000000000000000000008000000008000000000000010000000000000000000000000000001000000001040000001000000000000000000000000000000000000000000000000001000000000000000000000004000000008000010200000080000002000040000000000000000000000000000000000000000000000000000000000000000100000400000000000000008000020000000400000000000100000000000000000000000000000000000000000000000080000000000",
              "blockHash": "0x4504e4ac4b5a866777c469555d3d3a9b364d92f840fe240f4cb8603da96ec157",
              "transactionHash": "0x9440cab88f5aa0f3cf69132d29c2b7865aaeb4d515ba1408a50a1101b09c32b8",
              "logs": [
                {
                  "transactionIndex": 0,
                  "blockNumber": 26,
                  "transactionHash": "0x9440cab88f5aa0f3cf69132d29c2b7865aaeb4d515ba1408a50a1101b09c32b8",
                  "address": "0x3fA83Fd2C45d427F18402f12215e96Bc07A02836",
                  "topics": [
                    "0xf10cda68996dfb656d49ab0db3c62cc5f0849710633671a337171c3ad9255186"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000003e80000000000000000000000003fa83fd2c45d427f18402f12215e96bc07a02836",
                  "logIndex": 0,
                  "blockHash": "0x4504e4ac4b5a866777c469555d3d3a9b364d92f840fe240f4cb8603da96ec157"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 26,
                  "transactionHash": "0x9440cab88f5aa0f3cf69132d29c2b7865aaeb4d515ba1408a50a1101b09c32b8",
                  "address": "0x04d6CEFA29eee48A57C21E584bF25CDc3127a441",
                  "topics": [
                    "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62",
                    "0x0000000000000000000000003fa83fd2c45d427f18402f12215e96bc07a02836",
                    "0x0000000000000000000000001085173503b98922009a812c5a9eaf19d71b2eb1",
                    "0x00000000000000000000000069e6b1d5a0341ca47236af3cd3418eaa37b1a3b7"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001",
                  "logIndex": 1,
                  "blockHash": "0x4504e4ac4b5a866777c469555d3d3a9b364d92f840fe240f4cb8603da96ec157"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 26,
                  "transactionHash": "0x9440cab88f5aa0f3cf69132d29c2b7865aaeb4d515ba1408a50a1101b09c32b8",
                  "address": "0x3fA83Fd2C45d427F18402f12215e96Bc07A02836",
                  "topics": [
                    "0xa7778f17f478d5cfebb7eb4bb4c7dde4eaaa2fb8a729391e5a7d979448899d2b"
                  ],
                  "data": "0x0000000000000000000000001085173503b98922009a812c5a9eaf19d71b2eb100000000000000000000000004d6cefa29eee48a57c21e584bf25cdc3127a4410000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000003e80000000000000000000000000000000000000000000000000000000000000001",
                  "logIndex": 2,
                  "blockHash": "0x4504e4ac4b5a866777c469555d3d3a9b364d92f840fe240f4cb8603da96ec157"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 26,
                  "transactionHash": "0x9440cab88f5aa0f3cf69132d29c2b7865aaeb4d515ba1408a50a1101b09c32b8",
                  "address": "0x1085173503b98922009a812c5a9eaF19d71b2Eb1",
                  "topics": [
                    "0x4e2058815a1087a94d8a92ecdce2f91d1370aa8c270ef97b0f28e0a3c6f68a87"
                  ],
                  "data": "0x000000000000000000000000fca8b8eadbc7302a240541f6e1921a24c604d9b60000000000000000000000003fa83fd2c45d427f18402f12215e96bc07a0283600000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000647e07590d00000000000000000000000004d6cefa29eee48a57c21e584bf25cdc3127a441000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000003e8000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
                  "logIndex": 3,
                  "blockHash": "0x4504e4ac4b5a866777c469555d3d3a9b364d92f840fe240f4cb8603da96ec157"
                }
              ],
              "blockNumber": 26,
              "confirmations": 1,
              "cumulativeGasUsed": {
                "type": "BigNumber",
                "hex": "0x044694"
              },
              "effectiveGasPrice": {
                "type": "BigNumber",
                "hex": "0x5b8f5586"
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
              "amount": "0.000430439312921976",
              "currency": "ETH",
              "transactionType": "gasFee"
            }
          ],
          "eventMetadata": {
            "tokenId": "0x04d6CEFA29eee48A57C21E584bF25CDc3127a441-1",
            "id": "1234-1234-1234-1234",
            "sellerUri": "Revelator|EnterpriseWallet|1",
            "sellerAddress": "0x1085173503b98922009a812c5a9eaF19d71b2Eb1"
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
          "transactionHash": "0x6bdcb6936c0259cf359bfd981fdba677917bc0c69796ea9a6125c42255e9a1e8",
          "networkName": "test",
          "origin": "Revelator",
          "transactionTimestamp": 1666614156,
          "isTestnet": true,
          "eventRawData": {
            "blockchain_event": {
              "to": "0x3fA83Fd2C45d427F18402f12215e96Bc07A02836",
              "from": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "contractAddress": null,
              "transactionIndex": 0,
              "gasUsed": {
                "type": "BigNumber",
                "hex": "0x040523"
              },
              "logsBloom": "0x00000000080024000000080000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000002000000002000000000000000000000000000000008000000000000000000000000000000000000000000001000000001040000001000000000000000000000040000000000000000000000000001000000000000000000000004000000000000000200000000000000000000000000000000000000000400000000000000000000000000000000000000000000000400000000000000008000020000000400000000000100000000000000000000000000000000000000001000000080000000000",
              "blockHash": "0xbb79ee2686d36f13ba090d4d721efe628ba43dfca10c0943afb00ea39d48df99",
              "transactionHash": "0x6bdcb6936c0259cf359bfd981fdba677917bc0c69796ea9a6125c42255e9a1e8",
              "logs": [
                {
                  "transactionIndex": 0,
                  "blockNumber": 28,
                  "transactionHash": "0x6bdcb6936c0259cf359bfd981fdba677917bc0c69796ea9a6125c42255e9a1e8",
                  "address": "0x3fA83Fd2C45d427F18402f12215e96Bc07A02836",
                  "topics": [
                    "0xf10cda68996dfb656d49ab0db3c62cc5f0849710633671a337171c3ad9255186"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000003e80000000000000000000000003fa83fd2c45d427f18402f12215e96bc07a02836",
                  "logIndex": 0,
                  "blockHash": "0xbb79ee2686d36f13ba090d4d721efe628ba43dfca10c0943afb00ea39d48df99"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 28,
                  "transactionHash": "0x6bdcb6936c0259cf359bfd981fdba677917bc0c69796ea9a6125c42255e9a1e8",
                  "address": "0xc3153659a071c3174920cb60a68df6C2921092b7",
                  "topics": [
                    "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62",
                    "0x0000000000000000000000003fa83fd2c45d427f18402f12215e96bc07a02836",
                    "0x000000000000000000000000776807b830508844dfa3b60e43e1cc13e88a0cd8",
                    "0x00000000000000000000000069e6b1d5a0341ca47236af3cd3418eaa37b1a3b7"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001",
                  "logIndex": 1,
                  "blockHash": "0xbb79ee2686d36f13ba090d4d721efe628ba43dfca10c0943afb00ea39d48df99"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 28,
                  "transactionHash": "0x6bdcb6936c0259cf359bfd981fdba677917bc0c69796ea9a6125c42255e9a1e8",
                  "address": "0x3fA83Fd2C45d427F18402f12215e96Bc07A02836",
                  "topics": [
                    "0xa7778f17f478d5cfebb7eb4bb4c7dde4eaaa2fb8a729391e5a7d979448899d2b"
                  ],
                  "data": "0x000000000000000000000000776807b830508844dfa3b60e43e1cc13e88a0cd8000000000000000000000000c3153659a071c3174920cb60a68df6c2921092b70000000000000000000000000000000000000000000000000000000000000007000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000003e80000000000000000000000000000000000000000000000000000000000000001",
                  "logIndex": 2,
                  "blockHash": "0xbb79ee2686d36f13ba090d4d721efe628ba43dfca10c0943afb00ea39d48df99"
                }
              ],
              "blockNumber": 28,
              "confirmations": 1,
              "cumulativeGasUsed": {
                "type": "BigNumber",
                "hex": "0x040523"
              },
              "effectiveGasPrice": {
                "type": "BigNumber",
                "hex": "0x5b1168c5"
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
              "amount": "0.000402530467130351",
              "currency": "ETH",
              "transactionType": "gasFee"
            },
            {
              "from": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "to": "0x3fA83Fd2C45d427F18402f12215e96Bc07A02836",
              "amount": "0.000000000000001",
              "currency": "ETH",
              "transactionType": "marketFee"
            }
          ],
          "eventMetadata": {
            "tokenId": "0xc3153659a071c3174920cb60a68df6C2921092b7-1",
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
          "transactionHash": "0x0ae7c18fb99e103401821a8c037e693408510f107be0436099ae3fa3e808dfbe",
          "networkName": "test",
          "origin": "Revelator",
          "transactionTimestamp": 1666614164,
          "isTestnet": true,
          "eventRawData": {
            "blockchain_event": {
              "to": "0x1085173503b98922009a812c5a9eaF19d71b2Eb1",
              "from": "0xFCA8B8eADbc7302a240541f6E1921a24c604D9B6",
              "contractAddress": null,
              "transactionIndex": 0,
              "gasUsed": {
                "type": "BigNumber",
                "hex": "0x019152"
              },
              "logsBloom": "0x00000000080020040000080000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000002000000000000000000000000000000408000000008000000000100010000000000000000000000000000000000000200040000000000000000000001000000000000000040000000000000000001000000000000000000000000000000008000010000000080000000000040000000000000000000000000000000000000000000000000000000000000001100000400000000000000008000000000000400000000000100000000000000000000000000000000000000000000000080000000000",
              "blockHash": "0xac87fc25a2295ad3fffd9a9973a838ec1fd1d4a9214674a86b2fd7750ac529e4",
              "transactionHash": "0x0ae7c18fb99e103401821a8c037e693408510f107be0436099ae3fa3e808dfbe",
              "logs": [
                {
                  "transactionIndex": 0,
                  "blockNumber": 31,
                  "transactionHash": "0x0ae7c18fb99e103401821a8c037e693408510f107be0436099ae3fa3e808dfbe",
                  "address": "0x45512F501C9027B79A0c0CccA90a005D9c685588",
                  "topics": [
                    "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62",
                    "0x0000000000000000000000003fa83fd2c45d427f18402f12215e96bc07a02836",
                    "0x00000000000000000000000069e6b1d5a0341ca47236af3cd3418eaa37b1a3b7",
                    "0x0000000000000000000000001085173503b98922009a812c5a9eaf19d71b2eb1"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001",
                  "logIndex": 0,
                  "blockHash": "0xac87fc25a2295ad3fffd9a9973a838ec1fd1d4a9214674a86b2fd7750ac529e4"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 31,
                  "transactionHash": "0x0ae7c18fb99e103401821a8c037e693408510f107be0436099ae3fa3e808dfbe",
                  "address": "0x3fA83Fd2C45d427F18402f12215e96Bc07A02836",
                  "topics": [
                    "0xfcd5ac40a159423d19402f3ef99538252fa8a61e9efa453402408258bb716e13"
                  ],
                  "data": "0x0000000000000000000000001085173503b98922009a812c5a9eaf19d71b2eb100000000000000000000000045512f501c9027b79a0c0ccca90a005d9c68558800000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000001",
                  "logIndex": 1,
                  "blockHash": "0xac87fc25a2295ad3fffd9a9973a838ec1fd1d4a9214674a86b2fd7750ac529e4"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 31,
                  "transactionHash": "0x0ae7c18fb99e103401821a8c037e693408510f107be0436099ae3fa3e808dfbe",
                  "address": "0x1085173503b98922009a812c5a9eaF19d71b2Eb1",
                  "topics": [
                    "0x4e2058815a1087a94d8a92ecdce2f91d1370aa8c270ef97b0f28e0a3c6f68a87"
                  ],
                  "data": "0x000000000000000000000000fca8b8eadbc7302a240541f6e1921a24c604d9b60000000000000000000000003fa83fd2c45d427f18402f12215e96bc07a0283600000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000000441791154f00000000000000000000000045512f501c9027b79a0c0ccca90a005d9c6855880000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
                  "logIndex": 2,
                  "blockHash": "0xac87fc25a2295ad3fffd9a9973a838ec1fd1d4a9214674a86b2fd7750ac529e4"
                }
              ],
              "blockNumber": 31,
              "confirmations": 1,
              "cumulativeGasUsed": {
                "type": "BigNumber",
                "hex": "0x019152"
              },
              "effectiveGasPrice": {
                "type": "BigNumber",
                "hex": "0x5a880208"
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
              "amount": "0.000156044932099728",
              "currency": "ETH",
              "transactionType": "gasFee"
            }
          ],
          "eventMetadata": {
            "tokenId": "0x45512F501C9027B79A0c0CccA90a005D9c685588-1",
            "id": "1234-1234-1234-1234",
            "sellerUri": "Revelator|EnterpriseWallet|1",
            "sellerAddress": "0x1085173503b98922009a812c5a9eaF19d71b2Eb1"
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
          "transactionHash": "0xcb13b78022dc9e7f666d32c3b4f7bc8f02b57e25e6bdf9ddb4b5a073ffa15236",
          "networkName": "test",
          "origin": "Revelator",
          "transactionTimestamp": 1666614172,
          "isTestnet": true,
          "eventRawData": {
            "blockchain_event": {
              "to": "0x3fA83Fd2C45d427F18402f12215e96Bc07A02836",
              "from": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "contractAddress": null,
              "transactionIndex": 0,
              "gasUsed": {
                "type": "BigNumber",
                "hex": "0x012d58"
              },
              "logsBloom": "0x00000000080024000000080000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000002000000000000000000000000000000400000000008000000000100000000000000000000000000000000000000000200040000000000000000000000000000000000000000000000000000000001008000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000010000000000000000000400000000000000008000000000000400000000000100000000000000000000000000000000000000001000000080000000000",
              "blockHash": "0x8cc705daa1e30860df0422f59800f6ae49187298587d51ff34bbc3eb8d978b68",
              "transactionHash": "0xcb13b78022dc9e7f666d32c3b4f7bc8f02b57e25e6bdf9ddb4b5a073ffa15236",
              "logs": [
                {
                  "transactionIndex": 0,
                  "blockNumber": 34,
                  "transactionHash": "0xcb13b78022dc9e7f666d32c3b4f7bc8f02b57e25e6bdf9ddb4b5a073ffa15236",
                  "address": "0xF39Bd6928f6C04E8A941f234f084A44360Bc178E",
                  "topics": [
                    "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62",
                    "0x0000000000000000000000003fa83fd2c45d427f18402f12215e96bc07a02836",
                    "0x00000000000000000000000069e6b1d5a0341ca47236af3cd3418eaa37b1a3b7",
                    "0x000000000000000000000000776807b830508844dfa3b60e43e1cc13e88a0cd8"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001",
                  "logIndex": 0,
                  "blockHash": "0x8cc705daa1e30860df0422f59800f6ae49187298587d51ff34bbc3eb8d978b68"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 34,
                  "transactionHash": "0xcb13b78022dc9e7f666d32c3b4f7bc8f02b57e25e6bdf9ddb4b5a073ffa15236",
                  "address": "0x3fA83Fd2C45d427F18402f12215e96Bc07A02836",
                  "topics": [
                    "0xfcd5ac40a159423d19402f3ef99538252fa8a61e9efa453402408258bb716e13"
                  ],
                  "data": "0x000000000000000000000000776807b830508844dfa3b60e43e1cc13e88a0cd8000000000000000000000000f39bd6928f6c04e8a941f234f084a44360bc178e00000000000000000000000000000000000000000000000000000000000000090000000000000000000000000000000000000000000000000000000000000001",
                  "logIndex": 1,
                  "blockHash": "0x8cc705daa1e30860df0422f59800f6ae49187298587d51ff34bbc3eb8d978b68"
                }
              ],
              "blockNumber": 34,
              "confirmations": 1,
              "cumulativeGasUsed": {
                "type": "BigNumber",
                "hex": "0x012d58"
              },
              "effectiveGasPrice": {
                "type": "BigNumber",
                "hex": "0x5a2aa5ee"
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
              "amount": "0.00011669915630792",
              "currency": "ETH",
              "transactionType": "gasFee"
            }
          ],
          "eventMetadata": {
            "tokenId": "0xF39Bd6928f6C04E8A941f234f084A44360Bc178E-1",
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
          "transactionHash": "0x866745c726c82c255ecffe5173135e674f1e4cc95dfa1734ceb0d831fe146935",
          "networkName": "test",
          "origin": "Revelator",
          "transactionTimestamp": 1666614180,
          "isTestnet": true,
          "eventRawData": {
            "blockchain_event": {
              "to": "0x1c6A7d0067d20144F62fA0b0EdeE550DcC578224",
              "from": "0xFCA8B8eADbc7302a240541f6E1921a24c604D9B6",
              "contractAddress": null,
              "transactionIndex": 0,
              "gasUsed": {
                "type": "BigNumber",
                "hex": "0x038746"
              },
              "logsBloom": "0x000000000a00200400000c0000000000000004000000000000000001000080000080001000000000000000000000000000000000000000000000000000002000000000000000000000000008000008400000008000000000000010800000000c00000000020000000200040000000840000000000000000000000010000000000000000000000000000020001000000000000000000000000000000000000000000002080000000000000000000000000000000000000000000000000000000000000002000000000000100000400000000000000008000000000000400020000000100000000000000000000000000000000000000000000000080000010000",
              "blockHash": "0xf4adab9a4bdeabe3776e1feba55cd1420c9d06eb874cae4b79c71e13e03fa109",
              "transactionHash": "0x866745c726c82c255ecffe5173135e674f1e4cc95dfa1734ceb0d831fe146935",
              "logs": [
                {
                  "transactionIndex": 0,
                  "blockNumber": 37,
                  "transactionHash": "0x866745c726c82c255ecffe5173135e674f1e4cc95dfa1734ceb0d831fe146935",
                  "address": "0xC0e9A408CF9eEC54090114Bbb758827A6d25782F",
                  "topics": [
                    "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62",
                    "0x0000000000000000000000003fa83fd2c45d427f18402f12215e96bc07a02836",
                    "0x00000000000000000000000069e6b1d5a0341ca47236af3cd3418eaa37b1a3b7",
                    "0x0000000000000000000000001c6a7d0067d20144f62fa0b0edee550dcc578224"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001",
                  "logIndex": 0,
                  "blockHash": "0xf4adab9a4bdeabe3776e1feba55cd1420c9d06eb874cae4b79c71e13e03fa109"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 37,
                  "transactionHash": "0x866745c726c82c255ecffe5173135e674f1e4cc95dfa1734ceb0d831fe146935",
                  "address": "0x3fA83Fd2C45d427F18402f12215e96Bc07A02836",
                  "topics": [
                    "0xa32a723e0e0ccd1f6b2cda064be2605e2dd5b9ca55dfa9b3568023d9c6363190"
                  ],
                  "data": "0x0000000000000000000000001c6a7d0067d20144f62fa0b0edee550dcc578224000000000000000000000000c0e9a408cf9eec54090114bbb758827a6d25782f000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001085173503b98922009a812c5a9eaf19d71b2eb1",
                  "logIndex": 1,
                  "blockHash": "0xf4adab9a4bdeabe3776e1feba55cd1420c9d06eb874cae4b79c71e13e03fa109"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 37,
                  "transactionHash": "0x866745c726c82c255ecffe5173135e674f1e4cc95dfa1734ceb0d831fe146935",
                  "address": "0xFeAd8E33C1C5C017e5f330Cb36Ea6f2c8802CC0e",
                  "topics": [
                    "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                    "0x0000000000000000000000000000000000000000000000000000000000000000",
                    "0x0000000000000000000000001085173503b98922009a812c5a9eaf19d71b2eb1"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000007d0",
                  "logIndex": 2,
                  "blockHash": "0xf4adab9a4bdeabe3776e1feba55cd1420c9d06eb874cae4b79c71e13e03fa109"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 37,
                  "transactionHash": "0x866745c726c82c255ecffe5173135e674f1e4cc95dfa1734ceb0d831fe146935",
                  "address": "0x1c6A7d0067d20144F62fA0b0EdeE550DcC578224",
                  "topics": [
                    "0x4e2058815a1087a94d8a92ecdce2f91d1370aa8c270ef97b0f28e0a3c6f68a87"
                  ],
                  "data": "0x000000000000000000000000fca8b8eadbc7302a240541f6e1921a24c604d9b60000000000000000000000003fa83fd2c45d427f18402f12215e96bc07a0283600000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002200000000000000000000000000000000000000000000000000000000000000144a0d9558e000000000000000000000000c0e9a408cf9eec54090114bbb758827a6d25782f0000000000000000000000001c6a7d0067d20144f62fa0b0edee550dcc5782240000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000007d000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000414f25aa0d2dcf295ffa6a11f929c7a169f8e4f79ac584265a49366dd155223f073a0a42b736fb8293bbd4ca76fec05d1c7854eca2ecb790ae710bfa8ae51e380d1b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
                  "logIndex": 3,
                  "blockHash": "0xf4adab9a4bdeabe3776e1feba55cd1420c9d06eb874cae4b79c71e13e03fa109"
                }
              ],
              "blockNumber": 37,
              "confirmations": 1,
              "cumulativeGasUsed": {
                "type": "BigNumber",
                "hex": "0x038746"
              },
              "effectiveGasPrice": {
                "type": "BigNumber",
                "hex": "0x59eb9427"
              },
              "status": 1,
              "type": 2,
              "byzantium": true
            }
          },
          "wallets": [
            {
              "ownerUri": "Revelator|EnterpriseWallet|1",
              "walletId": "0x1085173503b98922009a812c5a9eaF19d71b2Eb1",
              "type": "smartWallet"
            },
            {
              "ownerUri": "Revelator|RetailWallet|1",
              "walletId": "0x1c6A7d0067d20144F62fA0b0EdeE550DcC578224",
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
              "amount": "0.000348848216085418",
              "currency": "ETH",
              "transactionType": "gasFee"
            },
            {
              "amount": "1",
              "currency": "0xC0e9A408CF9eEC54090114Bbb758827A6d25782F",
              "from": "0x1085173503b98922009a812c5a9eaF19d71b2Eb1",
              "to": "0x1c6A7d0067d20144F62fA0b0EdeE550DcC578224",
              "transactionType": "transferAsset"
            },
            {
              "transactionType": "transferCoins",
              "from": "0x0000000000000000000000000000000000000000",
              "to": "0x1085173503b98922009a812c5a9eaF19d71b2Eb1",
              "amount": "2000",
              "currency": "REVCREDITS"
            }
          ],
          "eventMetadata": {
            "tokenId": "0xC0e9A408CF9eEC54090114Bbb758827A6d25782F-1",
            "id": "1234-1234-1234-1234",
            "sellerUri": "Revelator|EnterpriseWallet|1",
            "sellerAddress": "0x1085173503b98922009a812c5a9eaF19d71b2Eb1",
            "buyerUri": "Revelator|RetailWallet|1",
            "buyerAddress": "0x1c6A7d0067d20144F62fA0b0EdeE550DcC578224"
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
          "transactionHash": "0x691a0f47b107982e2de32485aa40617c07cbc4116b307587ccbccaf2acff8b07",
          "networkName": "test",
          "origin": "Revelator",
          "transactionTimestamp": 1666614189,
          "isTestnet": true,
          "eventRawData": {
            "blockchain_event": {
              "to": "0x3fA83Fd2C45d427F18402f12215e96Bc07A02836",
              "from": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "contractAddress": null,
              "transactionIndex": 0,
              "gasUsed": {
                "type": "BigNumber",
                "hex": "0x01dff1"
              },
              "logsBloom": "0x00000000080024000000080000000000000000000000000000000001000000000000000000000000000000000000800000000000000000000000000000002000000000000000000000000000000000400000008000000400000000000000000400000000000000000000000000001040000001000000000000000000000000000000000000000000000000001000000000000000000000004000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000400000000000000008000000000000400080000000100000000000000000000000000000000000000001000000080000000000",
              "blockHash": "0xdb43c1fdde2aba0937c35dc4fd894d2c229e4c2c593a4a095275abce9cfe23ce",
              "transactionHash": "0x691a0f47b107982e2de32485aa40617c07cbc4116b307587ccbccaf2acff8b07",
              "logs": [
                {
                  "transactionIndex": 0,
                  "blockNumber": 40,
                  "transactionHash": "0x691a0f47b107982e2de32485aa40617c07cbc4116b307587ccbccaf2acff8b07",
                  "address": "0x3fA83Fd2C45d427F18402f12215e96Bc07A02836",
                  "topics": [
                    "0xf10cda68996dfb656d49ab0db3c62cc5f0849710633671a337171c3ad9255186"
                  ],
                  "data": "0x000000000000000000000000000000000000000000000000000000000000000f0000000000000000000000003fa83fd2c45d427f18402f12215e96bc07a02836",
                  "logIndex": 0,
                  "blockHash": "0xdb43c1fdde2aba0937c35dc4fd894d2c229e4c2c593a4a095275abce9cfe23ce"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 40,
                  "transactionHash": "0x691a0f47b107982e2de32485aa40617c07cbc4116b307587ccbccaf2acff8b07",
                  "address": "0x992305B2c0e2b856cC7343436B93D80025921ccE",
                  "topics": [
                    "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62",
                    "0x0000000000000000000000003fa83fd2c45d427f18402f12215e96bc07a02836",
                    "0x00000000000000000000000069e6b1d5a0341ca47236af3cd3418eaa37b1a3b7",
                    "0x000000000000000000000000776807b830508844dfa3b60e43e1cc13e88a0cd8"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001",
                  "logIndex": 1,
                  "blockHash": "0xdb43c1fdde2aba0937c35dc4fd894d2c229e4c2c593a4a095275abce9cfe23ce"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 40,
                  "transactionHash": "0x691a0f47b107982e2de32485aa40617c07cbc4116b307587ccbccaf2acff8b07",
                  "address": "0x3fA83Fd2C45d427F18402f12215e96Bc07A02836",
                  "topics": [
                    "0xa32a723e0e0ccd1f6b2cda064be2605e2dd5b9ca55dfa9b3568023d9c6363190"
                  ],
                  "data": "0x000000000000000000000000776807b830508844dfa3b60e43e1cc13e88a0cd8000000000000000000000000992305b2c0e2b856cc7343436b93d80025921cce000000000000000000000000000000000000000000000000000000000000000b0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000003e800000000000000000000000000000000000000000000000000000000000000000000000000000000000000001085173503b98922009a812c5a9eaf19d71b2eb1",
                  "logIndex": 2,
                  "blockHash": "0xdb43c1fdde2aba0937c35dc4fd894d2c229e4c2c593a4a095275abce9cfe23ce"
                }
              ],
              "blockNumber": 40,
              "confirmations": 1,
              "cumulativeGasUsed": {
                "type": "BigNumber",
                "hex": "0x01dff1"
              },
              "effectiveGasPrice": {
                "type": "BigNumber",
                "hex": "0x59c11829"
              },
              "status": 1,
              "type": 2,
              "byzantium": true
            }
          },
          "wallets": [
            {
              "ownerUri": "Revelator|EnterpriseWallet|1",
              "walletId": "0x1085173503b98922009a812c5a9eaF19d71b2Eb1",
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
              "amount": "0.000185013416785305",
              "currency": "ETH",
              "transactionType": "gasFee"
            },
            {
              "amount": "1",
              "currency": "0x992305B2c0e2b856cC7343436B93D80025921ccE",
              "from": "0x1085173503b98922009a812c5a9eaF19d71b2Eb1",
              "to": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "transactionType": "transferAsset"
            },
            {
              "transactionType": "transferCoins",
              "currency": "ETH",
              "amount": "0.000000000000001",
              "from": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "to": "0x1085173503b98922009a812c5a9eaF19d71b2Eb1"
            }
          ],
          "eventMetadata": {
            "tokenId": "0x992305B2c0e2b856cC7343436B93D80025921ccE-1",
            "sellerUri": "Revelator|EnterpriseWallet|1",
            "sellerAddress": "0x1085173503b98922009a812c5a9eaF19d71b2Eb1",
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
          "transactionHash": "0x69cfaca97517db4271226f60aebe67f9eaa6fbb4b80debe0902ce901cbecaf94",
          "networkName": "test",
          "origin": "Revelator",
          "transactionTimestamp": 1666614197,
          "isTestnet": true,
          "eventRawData": {
            "blockchain_event": {
              "to": "0x1c6A7d0067d20144F62fA0b0EdeE550DcC578224",
              "from": "0xFCA8B8eADbc7302a240541f6E1921a24c604D9B6",
              "contractAddress": null,
              "transactionIndex": 0,
              "gasUsed": {
                "type": "BigNumber",
                "hex": "0x02f6b2"
              },
              "logsBloom": "0x00000000080024040000080000000000000004000000000000000001000080000080000000000000000000000000800000000000000000000000000000002000000000000000001000000048000000400000008000000040000010800000000c00000000020000000000040000000840000000000000000000000010000000000000000000000000000020001000000000000000000000000000000000000000000002080000000000000000000000000000000000000000000000000000000000000002000000000000000000400000000000000008000000000000400020000000100000000000000000000000000000000000000001000000080000010000",
              "blockHash": "0x55776326f24d273492ecc51895da40dacaa1f43d0d03b5c547cbe3b2e3471cd3",
              "transactionHash": "0x69cfaca97517db4271226f60aebe67f9eaa6fbb4b80debe0902ce901cbecaf94",
              "logs": [
                {
                  "transactionIndex": 0,
                  "blockNumber": 43,
                  "transactionHash": "0x69cfaca97517db4271226f60aebe67f9eaa6fbb4b80debe0902ce901cbecaf94",
                  "address": "0x6384F10eb41234B0215C76eE3158660Fda34670F",
                  "topics": [
                    "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62",
                    "0x0000000000000000000000003fa83fd2c45d427f18402f12215e96bc07a02836",
                    "0x00000000000000000000000069e6b1d5a0341ca47236af3cd3418eaa37b1a3b7",
                    "0x0000000000000000000000001c6a7d0067d20144f62fa0b0edee550dcc578224"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001",
                  "logIndex": 0,
                  "blockHash": "0x55776326f24d273492ecc51895da40dacaa1f43d0d03b5c547cbe3b2e3471cd3"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 43,
                  "transactionHash": "0x69cfaca97517db4271226f60aebe67f9eaa6fbb4b80debe0902ce901cbecaf94",
                  "address": "0x3fA83Fd2C45d427F18402f12215e96Bc07A02836",
                  "topics": [
                    "0xa32a723e0e0ccd1f6b2cda064be2605e2dd5b9ca55dfa9b3568023d9c6363190"
                  ],
                  "data": "0x0000000000000000000000001c6a7d0067d20144f62fa0b0edee550dcc5782240000000000000000000000006384f10eb41234b0215c76ee3158660fda34670f000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000776807b830508844dfa3b60e43e1cc13e88a0cd8",
                  "logIndex": 1,
                  "blockHash": "0x55776326f24d273492ecc51895da40dacaa1f43d0d03b5c547cbe3b2e3471cd3"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 43,
                  "transactionHash": "0x69cfaca97517db4271226f60aebe67f9eaa6fbb4b80debe0902ce901cbecaf94",
                  "address": "0xFeAd8E33C1C5C017e5f330Cb36Ea6f2c8802CC0e",
                  "topics": [
                    "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                    "0x0000000000000000000000000000000000000000000000000000000000000000",
                    "0x000000000000000000000000776807b830508844dfa3b60e43e1cc13e88a0cd8"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000007d0",
                  "logIndex": 2,
                  "blockHash": "0x55776326f24d273492ecc51895da40dacaa1f43d0d03b5c547cbe3b2e3471cd3"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 43,
                  "transactionHash": "0x69cfaca97517db4271226f60aebe67f9eaa6fbb4b80debe0902ce901cbecaf94",
                  "address": "0x1c6A7d0067d20144F62fA0b0EdeE550DcC578224",
                  "topics": [
                    "0x4e2058815a1087a94d8a92ecdce2f91d1370aa8c270ef97b0f28e0a3c6f68a87"
                  ],
                  "data": "0x000000000000000000000000fca8b8eadbc7302a240541f6e1921a24c604d9b60000000000000000000000003fa83fd2c45d427f18402f12215e96bc07a0283600000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002200000000000000000000000000000000000000000000000000000000000000144a0d9558e0000000000000000000000006384f10eb41234b0215c76ee3158660fda34670f0000000000000000000000001c6a7d0067d20144f62fa0b0edee550dcc5782240000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000007d000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000004100adb93c05c15193042758cc731cd11cc25a1a4d96dc833a0cdaf84570e3b8836bedf2aab17fb3a570a104c0b333feb3f6becd6987ccdfefb2f270feaaf3e5a61b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
                  "logIndex": 3,
                  "blockHash": "0x55776326f24d273492ecc51895da40dacaa1f43d0d03b5c547cbe3b2e3471cd3"
                }
              ],
              "blockNumber": 43,
              "confirmations": 1,
              "cumulativeGasUsed": {
                "type": "BigNumber",
                "hex": "0x02f6b2"
              },
              "effectiveGasPrice": {
                "type": "BigNumber",
                "hex": "0x59a44437"
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
              "walletId": "0x1c6A7d0067d20144F62fA0b0EdeE550DcC578224",
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
              "amount": "0.000292103782549566",
              "currency": "ETH",
              "transactionType": "gasFee"
            },
            {
              "amount": "1",
              "currency": "0x6384F10eb41234B0215C76eE3158660Fda34670F",
              "from": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
              "to": "0x1c6A7d0067d20144F62fA0b0EdeE550DcC578224",
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
            "tokenId": "0x6384F10eb41234B0215C76eE3158660Fda34670F-1",
            "id": "1234-1234-1234-1234",
            "sellerUri": "private-wallet",
            "sellerAddress": "0x776807B830508844dFA3b60E43E1Cc13E88a0cd8",
            "buyerUri": "Revelator|RetailWallet|1",
            "buyerAddress": "0x1c6A7d0067d20144F62fA0b0EdeE550DcC578224"
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
          "transactionHash": "0x9824f7aa66e67ce77d7f25e0091f99c539d7a07146958316327db441cebabaec",
          "networkName": "test",
          "origin": "Revelator",
          "transactionTimestamp": 1666614204,
          "isTestnet": true,
          "eventRawData": {
            "blockchain_event": {
              "to": "0x3fA83Fd2C45d427F18402f12215e96Bc07A02836",
              "from": "0xd0923e560173aFf2c6Caad24f1D56BB650256133",
              "contractAddress": null,
              "transactionIndex": 0,
              "gasUsed": {
                "type": "BigNumber",
                "hex": "0x01d565"
              },
              "logsBloom": "0x00000000080020000000080000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000400000008000000000000000040000000400000000000000000000000000001040000001000000000000000000000000000000000001000000000000001000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000020400000000000000008000000000000400000004000100000000000000000000000000000000002000000000000080000000000",
              "blockHash": "0x72052df57aea9c7c030e7906d887fdf8919437fe7754001eb10881af6aab8759",
              "transactionHash": "0x9824f7aa66e67ce77d7f25e0091f99c539d7a07146958316327db441cebabaec",
              "logs": [
                {
                  "transactionIndex": 0,
                  "blockNumber": 46,
                  "transactionHash": "0x9824f7aa66e67ce77d7f25e0091f99c539d7a07146958316327db441cebabaec",
                  "address": "0x3fA83Fd2C45d427F18402f12215e96Bc07A02836",
                  "topics": [
                    "0xf10cda68996dfb656d49ab0db3c62cc5f0849710633671a337171c3ad9255186"
                  ],
                  "data": "0x000000000000000000000000000000000000000000000000000000000000000f0000000000000000000000003fa83fd2c45d427f18402f12215e96bc07a02836",
                  "logIndex": 0,
                  "blockHash": "0x72052df57aea9c7c030e7906d887fdf8919437fe7754001eb10881af6aab8759"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 46,
                  "transactionHash": "0x9824f7aa66e67ce77d7f25e0091f99c539d7a07146958316327db441cebabaec",
                  "address": "0x74Ee7A0a1730BA86C64E6004010Ae162f6E03020",
                  "topics": [
                    "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62",
                    "0x0000000000000000000000003fa83fd2c45d427f18402f12215e96bc07a02836",
                    "0x00000000000000000000000069e6b1d5a0341ca47236af3cd3418eaa37b1a3b7",
                    "0x000000000000000000000000d0923e560173aff2c6caad24f1d56bb650256133"
                  ],
                  "data": "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001",
                  "logIndex": 1,
                  "blockHash": "0x72052df57aea9c7c030e7906d887fdf8919437fe7754001eb10881af6aab8759"
                },
                {
                  "transactionIndex": 0,
                  "blockNumber": 46,
                  "transactionHash": "0x9824f7aa66e67ce77d7f25e0091f99c539d7a07146958316327db441cebabaec",
                  "address": "0x3fA83Fd2C45d427F18402f12215e96Bc07A02836",
                  "topics": [
                    "0xa32a723e0e0ccd1f6b2cda064be2605e2dd5b9ca55dfa9b3568023d9c6363190"
                  ],
                  "data": "0x000000000000000000000000d0923e560173aff2c6caad24f1d56bb65025613300000000000000000000000074ee7a0a1730ba86c64e6004010ae162f6e03020000000000000000000000000000000000000000000000000000000000000000d0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000003e80000000000000000000000000000000000000000000000000000000000000000000000000000000000000000776807b830508844dfa3b60e43e1cc13e88a0cd8",
                  "logIndex": 2,
                  "blockHash": "0x72052df57aea9c7c030e7906d887fdf8919437fe7754001eb10881af6aab8759"
                }
              ],
              "blockNumber": 46,
              "confirmations": 1,
              "cumulativeGasUsed": {
                "type": "BigNumber",
                "hex": "0x01d565"
              },
              "effectiveGasPrice": {
                "type": "BigNumber",
                "hex": "0x5990d029"
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
              "amount": "0.000180567462985005",
              "currency": "ETH",
              "transactionType": "gasFee"
            },
            {
              "amount": "1",
              "currency": "0x74Ee7A0a1730BA86C64E6004010Ae162f6E03020",
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
            "tokenId": "0x74Ee7A0a1730BA86C64E6004010Ae162f6E03020-1",
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

