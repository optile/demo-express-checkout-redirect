/*
 * Copyright(c) 2020-2021 Payoneer Germany GmbH.
 * https://www.payoneer.com
 *
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more information.
 */

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
var attr;
if (window.location.hostname === "localhost") {
    attr = attributes.local;
} else {
    attr = attributes.integration;
}
