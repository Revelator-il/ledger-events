// sendEmailEvent
ledgerEvent = {
  "ResponseMetadata": {
    "RequestId": "G12R1FKSQDOVFV1QHX0W1XB7RM5K6IBWNHE6G1OFWMYGVS3EQBN8"
  },
  "Messages": [
    {
      "MessageId": "e36a7a6a-beed-48df-8ea3-8440fcbca0e0",
      "ReceiptHandle": "ZGFjYjhkMjMtZjA5Yi00OTYxLWE4MDktZjU4ZTM3YzdkMzY5IGFybjphd3M6c3FzOnVzLWVhc3QtMTowMDAwMDAwMDAwMDA6ZW1haWwtZXZlbnQgZTM2YTdhNmEtYmVlZC00OGRmLThlYTMtODQ0MGZjYmNhMGUwIDE2NjY2MTUxNzguOTQzMzExNQ==",
      "MD5OfBody": "c319541e149a0d12c6a545f5f27a1419",
      "Body": {
        "version": "0",
        "id": "b69a8783-b0bb-48fd-b30b-aac50abef392",
        "detail-type": "emailSend",
        "source": "original-works.evm-transaction-sender",
        "account": "000000000000",
        "time": "2022-10-24T12:39:38Z",
        "region": "us-east-1",
        "resources": [],
        "detail": {
          "type": "emailSend",
          "eventMetadata": {
            "userSub": "a17709d8-2cb6-43ae-ba82-b963bb33eb65",
            "mailTemplate": "nft-purchase-email",
            "templateArguments": [
              {
                "name": "recipientAddress",
                "value": "test@gmail.com"
              },
              {
                "name": "tokenId",
                "value": "0x2918A4A413d0A2E736Fda9e8267310D318bD3Cd5-1"
              },
              {
                "name": "tokenImage",
                "value": "https://s3/a6d42b9f-7d31-475b-88cc-d26125bf0122.jpg"
              },
              {
                "name": "tokenName",
                "value": "makaron"
              },
              {
                "name": "creator",
                "value": "Flora Patrick"
              },
              {
                "name": "artistImage",
                "value": "https://avatarsStorageName/s3bucket/avatar.jpg"
              },
              {
                "name": "quantity",
                "value": "1"
              },
              {
                "name": "currency",
                "value": "usd"
              },
              {
                "name": "salePrice",
                "value": "2137"
              },
              {
                "name": "serviceFee",
                "value": "0"
              },
              {
                "name": "total",
                "value": "2137"
              },
              {
                "name": "lastFourDigits",
                "value": "2222"
              }
            ]
          }
        }
      }
    }
  ]
}

