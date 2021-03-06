(function (root, factory)
{
    if (typeof define === 'function' && define.amd && !(root && typeof(root.umd) != "undefined") && !root.umd)
    {
        // AMD
        define(function(require, exports, module) {

            var DocList = require("ratchet/dynamic/doclist");
            var Ratchet = require("ratchet/web");

            return factory(Ratchet, DocList);
        });
    }
    else
    {
        return factory(root.Ratchet, root.Ratchet.Gadgets.DocList);
    }

}(this, function(Ratchet, DocList) {

    return Ratchet.Gadgets.Picker = Ratchet.DynamicRegistry.register("picker", DocList.extend({

        // this is typically overridden
        context: function() {
            return {};
        },

        /**
         * @override
         */
        doclistDefaultConfig: function()
        {
            var basename = this.getGadgetId();

            return {
                //"checkbox": true,
                "icon": false,
                "radio": true, // single select
                "buttons": [],
                "columns": [],
                "loader": "remote",
                "lengthMenu": {
                    "values": [5, 10, 25, 50, 100, -1],
                    "labels": [5, 10, 25, 50, 100, "All"]
                },
                "selectorGroups": {
                    "multi-documents-action-selector-group": {
                        "actions": []
                    },
                    "single-document-action-selector-group": {
                        "actions": []
                    },
                    "sort-selector-group": {
                        "fields": []
                    }
                },
                "chrome": false,
                "observables": {
                    "query": basename + "_query",
                    "sort": basename + "_sort",
                    "sortDirection": basename + "_sortDirection",
                    "searchTerm": basename + "_searchTerm",
                    "selectedItems": basename + "_selectedItems"
                },
                "options": {
                    "filter": true,
                    "paginate": true,
                    "info": true,
                    "sizing": true,
                    "processing": false
                }
            };
        },

        columnValue: function(row, item)
        {
            var value = this.base(row, item);

            // TODO: special handling

            return value;
        },

        changeSelectedItems: function(model)
        {
            var self = this;

            var currentSelectedItems = self.selectedItems(model);
            self.onPickItems(currentSelectedItems);
        },

        // extension point
        onPickItems: function(items)
        {

        }

    }));

}));
