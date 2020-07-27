function getLongId() {
    var params = new URLSearchParams(window.location.search);
    return params.get("longId");
};

function getPresetLink(longId) {
    var baseURL = attr.configuration.baseURL;
    return `${baseURL.replace("pci/v1/express", "api/presets")}/${longId}`;
}

function getAuthorization() {
    return "Basic " + btoa("555:b348k9ho52e57lmksjl3um438k1e50cde1tbmlekrd");
}
