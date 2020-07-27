function fetchData(url, options) {
    try {
		return fetch(url, options)
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			return {
				response: {
					ok: true,
				},
				data,
			};
		})
		.catch(function(error) {
			return {
				response: {
					ok: false,
				},
				error: {
					message: error.message,
					status: error.status,
					statusText: error.statusText,
				},
			};
		});
    } catch (error) {
        return {
            response: {
                ok: false,
            },
            error: {
                message: error.message,
                status: error.status,
                statusText: error.statusText,
            },
        };
    }
}

function sendData({ url, method, body, headers }) {
    return fetchData(url, {
        method,
        mode: "cors",
        cache: "default",
        redirect: "follow",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: headers.Authorization,
        },
        body: body ? JSON.stringify(body) : null,
    });
}