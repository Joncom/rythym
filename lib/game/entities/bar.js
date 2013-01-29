ig.module('game.entities.bar')

.requires('impact.entity')

.defines(function() {

    EntityBar = ig.Entity.extend({

        init: function(x, y, settings) {

            this.parent(x, y, settings);

        },

        draw: function() {

            ig.system.context.strokeStyle = "red";
            ig.system.context.lineWidth = 0.5;

            ig.system.context.beginPath();
            ig.system.context.moveTo(this.pos.x, this.pos.y);
            ig.system.context.lineTo(this.pos.x+this.size.x, this.pos.y);
            ig.system.context.stroke();
            ig.system.context.closePath();

        },

        update: function() {}

    });

});