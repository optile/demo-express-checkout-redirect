var attributes = {
    local: {
        configuration: {
            baseURL: "https://api.integration.oscato.com/pci/v1/express",
            clientId: "v1.opt-div-app.12f635a01fa648b4bbe89d6005f30e95",
            country: "US",
            language: "en_US",
            translation: [
                {
                    language: "en",
                    resource: {
                        confirm: "confirm",
                    },
                },
                {
                    language: "de",
                    resource: {
                        confirm: "bestätigen",
                    },
                },
            ],
            paymentMethodsConfiguration: [
                {
                    code: "PAYPAL",
                    style: {
                        size: "small",
                        color: "gold",
                        shape: "rect",
                        label: "checkout",
                    },
                },
            ],
        },
        createTransactionDetails: function (requestData) {
            return {
                transactionId: "tr-" + new Date().getTime(),
                country: "US",
                providerRequest: requestData,
                payment: {
                    amount: 20,
                    currency: "USD",
                    reference: "Payment By legacy shop",
                    longReference: {
                        essential: "Thank you for your purchase!",
                    },
                },
                products: [
                    {
                        name: "Ledger Nano S",
                        amount: 20,
                    },
                ],
            };
        },
        customFunctions: {},
    },
    integration: {
        configuration: {
            baseURL: "https://api.integration.oscato.com/pci/v1/express",
            clientId: "v1.opt-div-app.e65abdfa3b6d4ba2b3dbb316071914be",
            country: "US",
            language: "en_US",
            translation: [
                {
                    language: "en",
                    resource: {
                        confirm: "confirm",
                    },
                },
                {
                    language: "de",
                    resource: {
                        confirm: "bestätigen",
                    },
                },
            ],
            paymentMethodsConfiguration: [
                {
                    code: "PAYPAL",
                    style: {
                        size: "small",
                        color: "gold",
                        shape: "rect",
                        label: "checkout",
                    },
                },
            ],
        },
        createTransactionDetails: function (requestData) {
            return {
                transactionId: "tr-" + new Date().getTime(),
                country: "US",
                providerRequest: requestData,
                payment: {
                    amount: 20,
                    currency: "USD",
                    reference: "Payment By legacy shop",
                    longReference: {
                        essential: "Thank you for your purchase!",
                    },
                },
                products: [
                    {
                        name: "Ledger Nano S",
                        amount: 20,
                    },
                ],
            };
        },
        customFunctions: {},
    },
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
