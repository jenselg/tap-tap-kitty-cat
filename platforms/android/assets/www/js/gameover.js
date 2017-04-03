var gameOver = function(game){}

gameOver.prototype = {
    
    create: function(){
        
        // Load background
        this.game.add.image(0, 0, 'grave')
        //this.game.add.image(64, 64, 'title');
        
        // Load buttons
        retryButton = this.game.add.bitmapText(
                this.game.world.centerX,
                370,
                '04b-orange',
                'Play Again!',
                30
            );
        retryButton.anchor.setTo(0.5, 0.5);
        retryButton.inputEnabled = true;
        retryButton.events.onInputDown.add(this.initGame, this);
        
        mainMenuButton = this.game.add.bitmapText(
                this.game.world.centerX,
                410,
                '04b',
                'Main Menu',
                30
            );
        mainMenuButton.anchor.setTo(0.5, 0.5);
        mainMenuButton.inputEnabled = true;
        mainMenuButton.events.onInputDown.add(this.returnToMain, this);
        
        // Load scores

        highScore = this.game.add.bitmapText(
                this.game.world.centerX,
                32,
                '04b-orange',
                'High Score',
                30
            );
        highScore.anchor.setTo(0.5, 0.5);
    

        highScoreCount = this.game.add.bitmapText(
                this.game.world.centerX,
                70,
                '04b',
                window.localStorage.getItem('highscore'),
                30
            );
        highScoreCount.anchor.setTo(0.5, 0.5);
        
        currentScore = this.game.add.bitmapText(
                this.game.world.centerX,
                110,
                '04b-orange',
                'Your Score',
                30
            );
        currentScore.anchor.setTo(0.5, 0.5);
        
        currentScoreCount = this.game.add.bitmapText(
                this.game.world.centerX,
                148,
                '04b',
                "" + count,
                30
            );
        currentScoreCount.anchor.setTo(0.5, 0.5);
        
        if(AdMob && Math.random()*100 < 30) {
            AdMob.showInterstitial();
        }
        
    },
    initGame: function(){
        this.game.state.start("StartGame");
    },
    returnToMain: function(){
        this.game.state.start("MainScreen");
    }
} 