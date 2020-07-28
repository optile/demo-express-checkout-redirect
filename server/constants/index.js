var constants = {
    local: {
		MERCHANT: {
			USER: "555",
			TOKEN: "b348k9ho52e57lmksjl3um438k1e50cde1tbmlekrd",
		}
    },
    integration: {
        MERCHANT: {
			USER: "555",
			TOKEN: "b348k9ho52e57lmksjl3um438k1e50cde1tbmlekrd",
		}
    },
};

var MERCHANT;
if (window.location.hostname === "localhost") {
    MERCHANT = constants.local.MERCHANT;
} else {
    MERCHANT = constants.integration.MERCHANT;
}
