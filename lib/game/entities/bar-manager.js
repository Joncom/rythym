ig.module('game.entities.bar-manager')

.requires(
    'impact.entity',
    'game.entities.bar'
)

.defines(function() {

    EntityBarManager = ig.Entity.extend({

        bars: [],

        init: function(x, y, settings) {

            this.parent(x, y, settings);
        },

        update: function() {},

        // Add a new bar.
        add: function() {

            var x = EntityBar.prototype.size.x * this.bars.length;
            var y = this.pos.y;

            var bar = ig.game.spawnEntity(EntityBar, x, y);

            this.bars.push(bar);

            return bar;

        }

    });

});