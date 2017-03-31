var boot = function(game){}

boot.prototype = {
    
    create: function(){
        this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        this.game.scale.pageAlignHorizontally = true;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.state.start("Preload");
    }
    
}