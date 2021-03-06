(function() {

    return Ratchet.Configuration.register("not", Ratchet.AbstractConfigurationEvaluator.extend({

        /**
         * Performs an NOT for a condition.
         *
         * @param engine
         * @param context
         * @param condition
         *
         * @return {Boolean}
         */
        evaluate: function(engine, context, condition)
        {
            if (!context) {
                return false;
            }

            // child engine
            var childEngine = engine.clone(true);
            var block = {
                "evaluator": condition.evaluator,
                "condition": condition.condition,
                "config": [true]
            };
            childEngine.add(block);

            // evaluate
            var result = childEngine.evaluate(context);

            // valid if size of array == 0
            return (result.length == 0);
        }

    }));

})();