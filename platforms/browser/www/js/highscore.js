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
                150,
                '04b',
                window.localStorage.getItem('highscore'),
                60
            );
        highScoreCount.anchor.setTo(0.5, 0.5);
        
        // Load buttons
        retryButton = this.game.add.bitmapText(
                this.game.world.centerX,
                236,
                '04b-orange',
                "Play!",
                40
            );
        retryButton.anchor.setTo(0.5, 0.5);
        retryButton.inputEnabled = true;
        retryButton.events.onInputDown.add(this.beatIt, this);
        
        mainMenuButton = this.game.add.bitmapText(
                this.game.world.centerX,
                286,
                '04b',
                'Main Menu',
                30
            );
        mainMenuButton.anchor.setTo(0.5, 0.5);
        mainMenuButton.inputEnabled = true;
        mainMenuButton.events.onInputDown.add(this.backToMain, this);

        screenieButton = this.game.add.bitmapText(
                this.game.world.centerX,
                336,
                '04b-orange',
                'Screenie :)',
                30
            );
        screenieButton.anchor.setTo(0.5, 0.5);
        screenieButton.inputEnabled = true;
        screenieButton.events.onInputDown.add(this.screenieDo, this);
        
    },
    
    beatIt: function(){
        this.game.state.start("StartGame");
    },
    
    backToMain: function() {
        this.game.state.start("MainScreen");
    },

    screenieDo: function(){
        setTimeout(
            navigator.screenshot.save(function(error,res){
              if(error){
                console.error(error);
              }else{
                console.log('ok',res.filePath);
              }
            },'jpg'),
            3000);
    }
    
}