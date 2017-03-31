var preload = function(game){}

preload.prototype = {
    
    preload: function(){

        // Load bitmap font
        this.game.load.bitmapFont('04b-orange', 'assets/fonts/04b-hd-orange.png', 'assets/fonts/04b-hd-orange.xml');
        this.game.load.bitmapFont('04b', 'assets/fonts/04b-hd.png', 'assets/fonts/04b-hd.xml');

        // PIG
        this.game.load.spritesheet('pig', 'assets/spritesheets/cat.png', 32, 32);
        this.game.load.image('deadpig', 'assets/images/deadpig.png');
        
        // TORCH
        this.game.load.spritesheet('torch', 'assets/spritesheets/torch.png', 32, 64);
        
        // UI ELEMENTS
        this.game.load.image('background', 'assets/images/background.png');
        
        // RED LIGHT
        this.game.load.image('redlight', 'assets/spritesheets/redlight.png');
        
        // SPIKE WALLS
        this.game.load.image('spikewall-bottom', 'assets/spritesheets/spikewall-bottom.png');
        this.game.load.image('spikewall-top', 'assets/spritesheets/spikewall-top.png');
        this.game.load.image('spikewall-left', 'assets/spritesheets/spikewall-left.png');
        this.game.load.image('spikewall-right', 'assets/spritesheets/spikewall-right.png');
        
        
        // OINK SOUND
        this.game.load.audio('snort', 'assets/sounds/snort.wav');
        this.game.load.audio('die', 'assets/sounds/die.wav');
        
    },
    create: function(){
        
        // Move on to the main screen
        this.game.state.start("MainScreen");
    }
    
}