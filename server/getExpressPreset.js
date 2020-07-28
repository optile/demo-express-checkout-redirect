function getExpressPreset(successCb, errorCb) {
    var longId = getLongId();
    var baseURL = getPresetLink(longId);
    var Authorization = getAuthorization();
    var options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization,
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
