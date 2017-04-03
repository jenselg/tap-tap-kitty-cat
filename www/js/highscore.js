var highScore = function(game){}

highScore.prototype = {
    
    create: function() {
        
        this.game.add.image(0, 0, 'background')
        
        highScoreBanner = this.game.add.bitmapText(
            this.game.world.centerX, 
            64,
            '04b-orange',
            'High Score',
            30 
        );
        highScoreBanner.anchor.setTo(0.5, 0.5);
        
        if(window.localStorage.getItem('highscore') == null) {
            window.localStorage.setItem('highscore', 0)
        }

        highScoreCount = this.game.add.bitmapText(
                this.game.world.centerX,
                200,
                '04b',
                window.localStorage.getItem('highscore'),
                60
            );
        highScoreCount.anchor.setTo(0.5, 0.5);
        
        // Load buttons
        retryButton = this.game.add.bitmapText(
                this.game.world.centerX,
                320,
                '04b-orange',
                "Play!",
                40
            );
        retryButton.anchor.setTo(0.5, 0.5);
        retryButton.inputEnabled = true;
        retryButton.events.onInputDown.add(this.beatIt, this);
        
        mainMenuButton = this.game.add.bitmapText(
                this.game.world.centerX,
                370,
                '04b',
                'Main Menu',
                30
            );
        mainMenuButton.anchor.setTo(0.5, 0.5);
        mainMenuButton.inputEnabled = true;
        mainMenuButton.events.onInputDown.add(this.backToMain, this);
        
    },
    
    beatIt: function(){
        this.game.state.start("StartGame");
    },
    
    backToMain: function() {
        this.game.state.start("MainScreen");
    }
    
}