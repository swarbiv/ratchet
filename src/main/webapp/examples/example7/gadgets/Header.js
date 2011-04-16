(function($)
{
    Header = Ratchet.Gadget.extend(
    {
        constructor: function(id, ratchet)
        {
            this.base(id, ratchet);
        },

        setup: function()
        {
            this.get(this.index);
        },

        index: function()
        {
            this.transform("templates/header", function() {
                this.swap();
            });
        }
    });

    Ratchet.GadgetRegistry.register("header", Header);

})(jQuery);