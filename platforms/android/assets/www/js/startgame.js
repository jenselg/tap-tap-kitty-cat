var startGame = function(game){}

startGame.prototype = {
    
    init: function(){
        var oppX = 0;
        var oppY = 0;
        var clickPoint = 0;
        oink = this.game.add.audio('snort');
        die = this.game.add.audio('die');
        if (AdMob) {
            AdMob.prepareInterstitial({
                adId: admobid.interstitial, 
                autoShow:false
            });
        }
    },
    
    create: function(){

        this.game.world.setBounds(0, 0, 320, 480);
        
        // Load background
        background = this.game.add.sprite(0, 0, 'background');
        
        // Load torches
        torch1 = this.game.add.sprite(64, 92, 'torch');
        torch2 = this.game.add.sprite(this.game.world.width - 96, 92, 'torch');
        
        // Load torch animations
        torch1.animations.add('flame')
        torch1.animations.play('flame', 10, true)
        torch2.animations.add('flame');
        torch2.animations.play('flame', 10, true);
        
        // Load coin
        coin = this.game.add.sprite(this.game.world.randomX, 150, 'coin');
        coin.animations.add('spin');
        coin.animations.play('spin', 10, true);
        this.game.physics.arcade.enable(coin);
        // Load score text
        count = 0;
        score = this.game.add.bitmapText(
            this.game.world.centerX, 
            130,
            '04b',
             "" + count,
            30 
        );
        score.anchor.setTo(0.5, 0.5);
 

        // Load spikewalls
        //spikewallLeft = this.game.add.sprite(0, 32, 'spikewall-left');
        //spikewallRight = this.game.add.sprite(this.game.world.width - 32, 32, 'spikewall-right')
        spikewallTop = this.game.add.sprite(32, 0, 'spikewall-top');
        spikewallBottom = this.game.add.sprite(32, this.game.world.height - 32, 'spikewall-bottom');
        
        // Spikewall physics
        this.game.physics.arcade.enable([spikewallBottom, /*spikewallLeft, spikewallRight,*/ spikewallTop]);
        //spikewallLeft.body.immovable = true;
        //spikewallRight.body.immovable = true;
        spikewallTop.body.immovable = true;
        spikewallBottom.body.immovable = true;
        
        // Load corners
        cornerBlockBottomLeft = this.game.add.sprite(0, this.game.world.height - 32, 'redlight');
        cornerBlockBottomRight = this.game.add.sprite(this.game.world.width - 32, this.game.world.height - 32, 'redlight');
        cornerBlockTopLeft = this.game.add.sprite(0, 0, 'redlight');
        cornerBlockTopRight = this.game.add.sprite(this.game.world.width - 32, 0, 'redlight');

        // Load pig 
        pig = this.game.add.sprite(159, 230, 'pig');
        pig.animations.add('bounce');
        pig.anchor.setTo(0.5, 0.5);
        pig.inputEnabled = true;

        // Enable pig physics
        this.game.physics.arcade.enable(pig);
        //pig.body.collideWorldBounds = true;
        pig.body.gravity.y = 800;  

        
    },
    
    updateScore: function(){
        oink.play();
        if (count > 0) {
            countTmp = count - 0.1;
            count = Math.round(countTmp *10)/10;
        }
        score.setText(count);
    },
    
    update: function(){
        
        this.game.input.onDown.addOnce(this.updateScore, this);

        if(this.game.physics.arcade.collide(coin, pig)) {
            count = count + 1;
            score.setText(count);
            coin.kill();
            coin.reset(this.game.world.randomX, 150);
        }
        
        if(this.game.physics.arcade.collide(spikewallBottom, pig) || /*this.game.physics.arcade.collide(spikewallLeft, pig) || this.game.physics.arcade.collide(spikewallRight, pig) ||*/ this.game.physics.arcade.collide(spikewallTop, pig)) {
            die.play();
            this.endGame();
        }
        
        if(this.game.input.activePointer.isDown && this.game.input.activePointer.duration < 100) {
            oppX = this.game.physics.arcade.distanceToPointer(pig)*Math.cos(this.game.physics.arcade.angleToXY(pig, this.game.input.x, this.game.input.y) + Math.PI);
            oppY = this.game.physics.arcade.distanceToPointer(pig)*Math.sin(this.game.physics.arcade.angleToXY(pig, this.game.input.x, this.game.input.y) + Math.PI);
            pig.body.velocity.x = oppX*4;
            pig.body.velocity.y = oppY*4;
            pig.animations.play('bounce', 10, false);
        }

        this.game.world.wrap(pig, 0, true);
    
    },
    
    endGame: function(){
        
        if(window.localStorage.getItem('highscore') == null) {
            window.localStorage.setItem('highscore', count);
        } else {
            if(count > window.localStorage.getItem('highscore')) {
                window.localStorage.setItem('highscore', count)
            }
        }
        
        this.game.state.start("GameOver");
    }
     

}
