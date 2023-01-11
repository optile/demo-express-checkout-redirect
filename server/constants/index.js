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
            USER: "OPP",
            TOKEN: "3d6810q5vgkvvfja3ahin1lue4nmk7sk4gfphn1c",
        },
    },
    "pi-nightly": {
        MERCHANT: {
            USER: "OPP",
            TOKEN: "3d6810q5vgkvvfja3ahin1lue4nmk7sk4gfphn1c",
        },
    },
};

var MERCHANT;
if (window.location.hostname === "localhost") {
    MERCHANT = constants.local.MERCHANT;
} else {
    MERCHANT = constants["pi-nightly"].MERCHANT;
}
