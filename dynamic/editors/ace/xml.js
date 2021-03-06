(function (root, factory)
{
    if (typeof define === 'function' && define.amd && !(root && typeof(root.umd) != "undefined") && !root.umd)
    {
        // AMD
        define(function(require, exports, module) {

            var Ratchet = require("ratchet/web");
            var $ = require("jquery");
            var ace = require("ace/ace");

            var AceEditor = require("ratchet/dynamic/editors/ace/ace");

            return factory(Ratchet, $, ace, AceEditor);
        });
    }
    else
    {
        return factory(root.Ratchet, root.$, root.ace, root.AceEditor);
    }

}(this, function(Ratchet, $, ace, AceEditor) {

    return Ratchet.EditorRegistry.register("xml", AceEditor.extend({

        doConfigure: function()
        {
            this.config({
                "mode": "ace/mode/xml",
                "mimetypes": ["text/xml"]
            });
        }

    }));
}));
