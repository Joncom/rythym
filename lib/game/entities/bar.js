ig.module('game.entities.bar')

.requires('impact.entity')

.defines(function() {

    EntityBar = ig.Entity.extend({

        size: { x: 240, y: 32 },

        init: function(x, y, settings) {

            this.parent(x, y, settings);

        },

        draw: function() {

            ig.system.context.strokeStyle = "red";
            ig.system.context.lineWidth = 0.5;

            // Horizontal Lines
            for( var i=0, y_offset=0; i<5; i++ ) {

                ig.system.context.beginPath();
                ig.system.context.moveTo(this.pos.x, this.pos.y + y_offset);
                ig.system.context.lineTo(this.pos.x+this.size.x, this.pos.y + y_offset);
                ig.system.context.stroke();
                ig.system.context.closePath();
                y_offset += 8;

            }

            ig.system.context.beginPath();
            ig.system.context.moveTo(this.pos.x, this.pos.y);
            ig.system.context.lineTo(this.pos.x, this.pos.y + this.size.y);
            ig.system.context.stroke();
            ig.system.context.closePath();

            ig.system.context.beginPath();
            ig.system.context.moveTo(this.pos.x + this.size.x, this.pos.y);
            ig.system.context.lineTo(this.pos.x + this.size.x, this.pos.y + this.size.y);
            ig.system.context.stroke();
            ig.system.context.closePath();

        },

        update: function() {}

    });

});