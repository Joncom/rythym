ig.module('game.entities.bar')

.requires('impact.entity')

.defines(function() {

    EntityBar = ig.Entity.extend({

        init: function(x, y, settings) {

            this.parent(x, y, settings);
        },

        update: function() {}

    });

});