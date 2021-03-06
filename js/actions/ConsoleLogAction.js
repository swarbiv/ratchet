(function() {

    Ratchet.Actions.register("log", Ratchet.AbstractAction.extend({

        /**
         * Logs data to console.
         *
         * @param config
         * @param actionContext
         * @param callback
         * @return {Boolean}
         */
        execute: function(config, actionContext, callback)
        {
            var data = actionContext.data;

            console.log(JSON.stringify(data));

            callback();
        }

    }));

})();