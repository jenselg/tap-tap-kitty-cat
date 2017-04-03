var preload = function(game){}

preload.prototype = {
    
    preload: function(){

        // Load bitmap font
        this.game.load.bitmapFont('04b-orange', 'assets/fonts/04b-hd-orange.png', 'assets/fonts/04b-hd-orange.xml');
        this.game.load.bitmapFont('04b', 'assets/fonts/04b-hd.png', 'assets/fonts/04b-hd.xml');

        // CHARACTERß
        this.game.load.spritesheet('cat', 'assets/spritesheets/cat.png', 32, 32);

        // UI ELEMENTS
        this.game.load.image('background', 'assets/spritesheets/background.png');
        this.game.load.image('grave', 'assets/spritesheets/grave.png');
        this.game.load.spritesheet('evilcloud', 'assets/spritesheets/evilcloud.png', 320, 32);
        this.game.load.image('brickspike', 'assets/spritesheets/brickspike.png');

        // COINS
        this.game.load.spritesheet('coin', 'assets/spritesheets/coin.png', 16, 16);
        
        
        // SOUND
        this.game.load.audio('jump', 'assets/sounds/jump.wav');
        this.game.load.audio('hurt', 'assets/sounds/hurt.wav');
        this.game.load.audio('coin', 'assets/sounds/coin.wav');
        
    },
    create: function(){
        
        // Move on to the main screen
        this.game.state.start("MainScreen");
    }
    
}