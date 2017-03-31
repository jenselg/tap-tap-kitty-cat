var howTo = function(game){}

howTo.prototype = {
    
    create: function(){
        // Load background
        this.game.add.image(0, 0, 'background');
        
        highScoreBanner = this.game.add.text(this.game.world.centerX, 48, "How To Play", {
            font: "bold 50px Pixel",
            fill: "#ef2ab1",
            align: "center"
        });
        highScoreBanner.anchor.setTo(0.5, 0.5); 
        
        instructionText = "Bouncy Pig is really easy to play.\nAll you have to do is click under\nthe pig in order to make it jump.\n\nBouncy Pig is a game of precision.\nThe area where you click is\nimportant. The power of the\npig's jump depends on how far\nunder (or over) you click from it.\nThe direction of the jump also\ndepends on where you click\nunder (or over) the pig.";
        
        instructionTextArea = this.game.add.text(this.game.world.centerX, 246, instructionText, {
            font: "20px Pixel",
            fill: "#ffffff",
            align: "center"
        });
        instructionTextArea.anchor.setTo(0.5, 0.5);
        
        mainMenuButton = this.game.add.text(this.game.world.centerX, this.game.world.height - 32, "Main Menu", {
            font: "30px Pixel",
            fill: "#ffffff",
            align: "center"
        });
        
        mainMenuButton.anchor.setTo(0.5, 0.5);
        mainMenuButton.inputEnabled = true;
        mainMenuButton.events.onInputDown.add(this.backToMainScreen, this);
        
    },
    
    update: function(){
        
    },
    
    backToMainScreen: function() {
        this.game.state.start("MainScreen");
    }
    
}