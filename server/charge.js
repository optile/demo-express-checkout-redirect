/*
 * Copyright(c) 2020-2021 Payoneer Germany GmbH.
 * https://www.payoneer.com
 *
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more information.
 */

function charge(url, callback) {
	sendData({
		url: url,
		method: "POST",
		body: {},
		headers: {
			Authorization: getAuthorization(),
		},
	})
		.then(function (response) {
			if (response.data.status.code === "charged") {
				callback("CHARGED");
			} else callback("ERROR");
		})
		.catch(function () {
			callback("ERROR");
		});
}
