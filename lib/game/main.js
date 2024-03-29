ig.module(
    'game.main'
)
.requires(
    'impact.game',
    'impact.font',
    'impact.debug.debug',
    'game.entities.bar-manager'
)
.defines(function(){

MyGame = ig.Game.extend({

    // Load a font
    font: new ig.Font( 'media/04b03.font.png' ),


    init: function() {
        // Initialize your game here; bind keys etc.

        // Spawn the bar manager.
        this.spawnEntity(EntityBarManager, 50, 50);

    },

    update: function() {
        // Update all entities and backgroundMaps
        this.parent();

        // Add your own, additional update code here
    },

    draw: function() {
        // Draw all entities and backgroundMaps
        this.parent();


        // Add your own drawing code here
        var x = ig.system.width/2,
            y = ig.system.height/2;

        this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );
    }
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 640, 480, 1 );

});
