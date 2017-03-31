var highScore = function(game){}

highScore.prototype = {
    
    create: function() {
        
        this.game.add.image(0, 0, 'background')
        
        highScoreBanner = this.game.add.text(this.game.world.centerX, 64, "High Score", {
            font: "bold 50px Pixel",
            fill: "#ef2ab1",
            align: "center"
        });
        highScoreBanner.anchor.setTo(0.5, 0.5);
        
        if(window.localStorage.getItem('highscore') == null) {
            window.localStorage.setItem('highscore', 0)
        }
        
        highScoreCount = this.game.add.text(this.game.world.centerX, 200, window.localStorage.getItem('highscore'), {
            font: "bold 60px Pixel",
            fill: "#ffffff",
            align: "center"
        });
        highScoreCount.anchor.setTo(0.5, 0.5);
        
        // Load torches
        hsTorch1 = this.game.add.sprite(64, 154, 'torch');
        hsTorch2 = this.game.add.sprite(this.game.world.width - 96, 154, 'torch');
        
        // Load torch animations
        hsTorch1.animations.add('flame')
        hsTorch1.animations.play('flame', 10, true)
        hsTorch2.animations.add('flame');
        hsTorch2.animations.play('flame', 10, true);
        
        
        // Load buttons
        retryButton = this.game.add.text(this.game.world.centerX, 320, "Beat This Score!", {
            font: "bold 30px Pixel",
            fill: "#ef2ab1",
            align: "center"
        });
        retryButton.anchor.setTo(0.5, 0.5);
        retryButton.inputEnabled = true;
        retryButton.events.onInputDown.add(this.beatIt, this);
        
        mainMenuButton = this.game.add.text(this.game.world.centerX, 370, "Main Menu", {
            font: "30px Pixel",
            fill: "#ffffff",
            align: "center"
        });
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