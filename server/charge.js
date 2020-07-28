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
