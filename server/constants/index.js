/*
 * Copyright(c) 2020-2021 Payoneer Germany GmbH.
 * https://www.payoneer.com
 *
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more information.
 */

var constants = {
    local: {
        MERCHANT: {
            USER: "555",
            TOKEN: "b348k9ho52e57lmksjl3um438k1e50cde1tbmlekrd",
        },
    },
    integration: {
        MERCHANT: {
            USER: "555",
            TOKEN: "b348k9ho52e57lmksjl3um438k1e50cde1tbmlekrd",
        },
    },
};

var MERCHANT;
if (window.location.hostname === "localhost") {
    MERCHANT = constants.local.MERCHANT;
} else {
    MERCHANT = constants.integration.MERCHANT;
}
