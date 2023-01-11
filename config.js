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
			baseURL: "https://api.pi-nightly.integration.oscato.com/pci/v1/express",
			clientId: "v1.opt-div-app.f9e79abc0ee240f591dbd600dfbae9d4",
			currency: "GBP",
			country: "GB",
			language: "en_GB",
			translation: [
				{
					language: "en",
					resource: {
						confirm: "Confirm",
					},
				},
				{
					language: "de",
					resource: {
						confirm: "Bestätigen",
					},
				},
			],
			paymentMethodsConfiguration: [
				{
					code: "PAYPAL",
					clientId: "sb",
					style: {
						size: "small",
						color: "gold",
						shape: "rect",
						label: "checkout",
					},
				},
				{
					code: "PAYPAL_PAY_LATER",
					clientId: "sb",
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
				country: "GB",
				providerRequest: requestData,
				payment: {
					amount: 47,
					currency: "GBP",
					reference: "Payment #1",
					longReference: {
						essential: "Thank you for your purchase!",
					},
				},
				products: [
					{
						name: "USB C cable",
						amount: 47,
					},
				],
			};
		},
		customFunctions: {},
	},
	"pi-nightly": {
		configuration: {
			baseURL: "https://api.pi-nightly.integration.oscato.com/pci/v1/express",
			clientId: "v1.opt-div-app.44217b15720b46ad9350dfddc84b4d23",
			currency: "GBP",
			country: "GB",
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
				{
					code: "PAYPAL_PAY_LATER",
					clientId: "sb",
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
				country: "GB",
				providerRequest: requestData,
				payment: {
					amount: 47,
					currency: "GBP",
					reference: "Payment #1",
					longReference: {
						essential: "Thank you for your purchase!",
					},
				},
				products: [
					{
						name: "USB C cable",
						amount: 47,
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
	attr = attributes["pi-nightly"];
}
