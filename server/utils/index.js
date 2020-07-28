function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function getLongId() {
    return getParameterByName("longId");
}

function getPresetLink(longId) {
    var baseURL = attr.configuration.baseURL;
    return baseURL.replace("pci/v1/express", "api/presets") + "/" + longId;
}

function getAuthorization() {
    return "Basic " + btoa(MERCHANT.USER + ":" + MERCHANT.TOKEN);
}
