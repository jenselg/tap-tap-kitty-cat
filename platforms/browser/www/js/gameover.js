var gameOver = function(game){}

var retryText = ["Play Again!", "Don't Give Up!", "Only Losers Quit!", "Click Me!", "Retry...", "Rinse, Repeat.", "AHHHH!", "ASDHJKSD", "Don't Lose Hope!", "The Chikins!", "Are You Hungry?", "Pig <3", "#bouncypig", "The Game.", "...", "Maybe, Just Maybe...", "Andale!", "Porkchop!", "Too Hard? Too Bad.", "...Stay Calm.", "Stop Fantasizing!", "Terrible.", "For The Economy!", "Challenge Accepted.", "Counting Sheep?", "#REKT", "WEAKSAUCE!", "(INSERT WITTY LINE HERE)", "Slow And Steady.", "Have You No Honor?", "Smart People Don't Quit.", "To Da Moon!", "Stay Calm And Bounce.", "You Know The Drill."];

gameOver.prototype = {
    
    create: function(){
        
        var retryTextId = Math.round((Math.random())*(retryText.length - 1));
        var retryButtonText = retryText[retryTextId];
        
        // Load background
        this.game.add.image(0, 0, 'background')
        //this.game.add.image(64, 64, 'title');
        
        // Load pig
        pig = this.game.add.sprite(143, 230, 'deadpig');
        
        // Load buttons
        retryButton = this.game.add.text(this.game.world.centerX, 320, retryButtonText, {
            font: "bold 30px Pixel",
            fill: "#ef2ab1",
            align: "center"
        });
        retryButton.anchor.setTo(0.5, 0.5);
        retryButton.inputEnabled = true;
        retryButton.events.onInputDown.add(this.initGame, this);
        
        mainMenuButton = this.game.add.text(this.game.world.centerX, 370, "Main Menu", {
            font: "30px Pixel",
            fill: "#ffffff",
            align: "center"
        });
        mainMenuButton.anchor.setTo(0.5, 0.5);
        mainMenuButton.inputEnabled = true;
        mainMenuButton.events.onInputDown.add(this.returnToMain, this);
        
        // Load scores
        highScore = this.game.add.text(this.game.world.centerX, 64, "High Score", {
            font: "bold 30px Pixel",
            fill: "#ef2ab1",
            align: "center"
        });
        highScore.anchor.setTo(0.5, 0.5);
    
        highScoreCount = this.game.add.text(this.game.world.centerX, 96, window.localStorage.getItem('highscore'), {
            font: "bold 30px Pixel",
            fill: "#ffffff",
            align: "center"
        });
        highScoreCount.anchor.setTo(0.5, 0.5);
        
        currentScore = this.game.add.text(this.game.world.centerX, 152, "Your Score", {
            font: "bold 30px Pixel",
            fill: "#ef2ab1",
            align: "center"
        });
        currentScore.anchor.setTo(0.5, 0.5);
        
        currentScoreCount = this.game.add.text(this.game.world.centerX, 184, "" + count, {
            font: "bold 30px Pixel",
            fill: "#ffffff",
            align: "center"
        });
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