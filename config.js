var attributes = {
  local: {
    configuration: {
      baseURL: "https://api.integration.oscato.com/pci/v1/express",
      clientId: "v1.opt-div-app.1b293aa844de46d4860da0ad5d29f0fe",
      country: "US",
      language: "en_US",
      translation: [
        {
          language: "en",
          resource: {
            confirm: "confirm"
          }
        },
        {
          language: "de",
          resource: {
            confirm: "bestätigen"
          }
        }
      ],
      paymentMethodsConfiguration: [
        {
          code: "PAYPAL",
          style: {
            size: "small",
            color: "gold",
            shape: "rect",
            label: "checkout"
          }
        }
      ]
    },
    createTransactionDetails: function(requestData) {
      return {
        transactionId: "tr-" + new Date().getTime(),
        country: "US",
        providerRequest: requestData,
        payment: {
          amount: 20,
          currency: "USD",
          reference: "Payment By legacy shop",
          longReference: {
            essential: "Thank you for your purchase!"
          }
        },
        products: [
          {
            name: "Ledger Nano S",
            amount: 20
          }
        ]
      };
    },
    customFunctions: {}
  },
  integration: {
    configuration: {
      baseURL: "https://api.integration.oscato.com/pci/v1/express",
      clientId: "v1.opt-div-app.2e172a46c87245a8804ac938603d5b12",
      country: "US",
      language: "en_US",
      translation: [
        {
          language: "en",
          resource: {
            confirm: "confirm"
          }
        },
        {
          language: "de",
          resource: {
            confirm: "bestätigen"
          }
        }
      ],
      paymentMethodsConfiguration: [
        {
          code: "PAYPAL",
          style: {
            size: "small",
            color: "gold",
            shape: "rect",
            label: "checkout"
          }
        }
      ]
    },
    createTransactionDetails: function(requestData) {
      return {
        transactionId: "tr-" + new Date().getTime(),
        country: "US",
        providerRequest: requestData,
        payment: {
          amount: 20,
          currency: "USD",
          reference: "Payment By legacy shop",
          longReference: {
            essential: "Thank you for your purchase!"
          }
        },
        products: [
          {
            name: "Ledger Nano S",
            amount: 20
          }
        ]
      };
    },
    customFunctions: {}
  }
};
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var attr;
if (window.location.hostname === "localhost") {
  attr = attributes.local;
} else {
  attr = attributes.integration;
}
