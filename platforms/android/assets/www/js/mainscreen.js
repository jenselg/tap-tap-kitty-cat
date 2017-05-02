var mainScreen = function(game){}

mainScreen.prototype = {

    create: function(){

        // GFX
        bg = this.game.add.image(0, 0, 'background');

        // Load text banner
        banner = this.game.add.bitmapText(
            this.game.world.centerX, 
            96,
            '04b-orange',
            'Tap Tap',
            40 
        );
        banner.anchor.setTo(0.5, 0.5);

        banner2 = this.game.add.bitmapText(
            this.game.world.centerX, 
            150,
            '04b',
            'Kitty Cat',
            40 
        );
        banner2.anchor.setTo(0.5, 0.5);
        
        // Load cat
        cat = this.game.add.sprite(this.game.world.centerX, 230, 'cat');
        cat.anchor.setTo(0.5, 0.5);
        cat.animations.add('bounce');
        cat.animations.play('bounce', 10, true);
        
        // Load buttons

        playButton = this.game.add.bitmapText(
            this.game.world.centerX, 
            320,
            '04b-orange',
            'Play!',
            40 
        );
        playButton.anchor.setTo(0.5, 0.5);
        playButton.inputEnabled = true;
        playButton.events.onInputDown.add(this.initGame, this);
        

        highScoreButton = this.game.add.bitmapText(
            this.game.world.centerX, 
            370,
            '04b',
            'High Score',
            30 
        );
        highScoreButton.anchor.setTo(0.5, 0.5);
        highScoreButton.inputEnabled = true;
        highScoreButton.events.onInputDown.add(this.highScore, this);

        if(window.localStorage.getItem('sound') == null) {
            window.localStorage.setItem('sound', 'on');
            soundText = "Sound ON";
        } else if(window.localStorage.getItem('sound') == 'on') {
            soundText = "Sound ON";
        } else if(window.localStorage.getItem('sound') == 'off') {
            soundText = "Sound OFF";
        } else {
            soundText = "Error!";
            console.log(window.localStorage.getItem('sound'));
        }

        soundButton = this.game.add.bitmapText(
            this.game.world.centerX,
            410,
            '04b',
            soundText,
            30
        );
        soundButton.anchor.setTo(0.5, 0.5);
        soundButton.inputEnabled = true;
        soundButton.events.onInputDown.add(this.soundSwitch, this);
        
    },

    soundSwitch: function() {
        if(window.localStorage.getItem('sound') == 'on') {
            window.localStorage.setItem('sound', 'off');
            soundButton.setText("Sound OFF");
        } else if (window.localStorage.getItem('sound') == 'off') {
            window.localStorage.setItem('sound', 'on');
            soundButton.setText("Sound ON");
        }
    },

    initGame: function(){
        this.game.state.start("StartGame");
    },
    
    highScore: function(){
        this.game.state.start("HighScore");
    }
    
}