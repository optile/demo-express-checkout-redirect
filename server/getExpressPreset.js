/*
 * Copyright(c) 2020-2021 Payoneer Germany GmbH.
 * https://www.payoneer.com
 *
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more information.
 */

function getExpressPreset(successCb, errorCb) {
	var longId = getLongId();
	var baseURL = getPresetLink(longId);
	var Authorization = getAuthorization();
	var options = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: Authorization,
		},
	};
	fetchData(baseURL, options)
		.then(function (result) {
			var response = result.response;
			if (response.ok) {
				successCb(result.data);
			} else errorCb(result.error);
		})
		.catch(function (error) {
			errorCb(error);
		});
}
