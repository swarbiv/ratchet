define(function(require, exports, module) {

    require("css!ratchet/gadgets/common.css");

    var html = require("text!ratchet/gadgets/links.html");
    var Ratchet = require("ratchet/web");

    require("ratchet/tmpl");
    require("bootstrap");

    return Ratchet.DynamicRegistry.register("links", Ratchet.AbstractDynamicGadget.extend({

		TEMPLATE: html
		
	}));
});