ig.module('game.entities.bar-manager')

.requires('impact.entity')

.defines(function() {

    EntityBarManager = ig.Entity.extend({

        bars: [],

        init: function(x, y, settings) {

            this.parent(x, y, settings);
        },

        update: function() {},

        // Add bar(s).
        add: function(n) {

            var quantity = ( typeof n === 'number' ? n : 1 );

            for( var i=0; i<quantity; i++ ) {

                this.bars.push(ig.game.spawnEntity(EntityBar));

            }
        }

    });

});