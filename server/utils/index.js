function getLongId() {
    var params = new URLSearchParams(window.location.search);
    return params.get("longId");
};

function getPresetLink(longId) {
    var baseURL = attr.configuration.baseURL;
    return baseURL.replace("pci/v1/express", "api/presets") + "/" + longId;
}

function getAuthorization() {
    return "Basic " + btoa(MERCHANT.USER + ":" + MERCHANT.TOKEN);
}
