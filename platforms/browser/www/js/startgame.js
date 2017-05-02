var startGame = function(game){}

startGame.prototype = {

    interstitialAd: function(){
        AdMob.prepareInterstitial({
            adId: admobid.interstitial, 
            autoShow:false
        });
    },
    
    init: function(){
        var oppX = 0;
        var oppY = 0;
        var clickPoint = 0;

        if(window.localStorage.getItem('sound') == 'on') {
            jump = this.game.add.audio('jump');
            hurt = this.game.add.audio('hurt');
            getcoin = this.game.add.audio('coin');
        }

        if (AdMob && device.platform != 'browser') {
            this.interstitialAd();
        }
    },
    
    create: function(){

        this.game.world.setBounds(0, 0, 320, 480);
        
        // Load background
        background = this.game.add.sprite(0, 0, 'background');
        
        // Load score text
        count = 0;
        score = this.game.add.bitmapText(
            this.game.world.centerX, 
            130,
            '04b',
             "" + count,
            50 
        );
        score.anchor.setTo(0.5, 0.5);
 
        // Load coin
        coin = this.game.add.sprite(Math.floor(Math.random()*((this.game.world.width - 32)-32+1)+32), Math.floor(Math.random()*((this.game.world.height - 64)- 64 +1 )+64), 'coin');
        coin.animations.add('spin');
        coin.animations.play('spin', 10, true);
        this.game.physics.arcade.enable(coin);


        evilCloud = this.game.add.sprite(0, 0, 'evilcloud');
        evilCloud.animations.add('float');
        evilCloud.animations.play('float', 2, true);
        brickSpike = this.game.add.sprite(0, this.game.world.height - 32, 'brickspike');
        
        // Physics
        this.game.physics.arcade.enable([evilCloud, brickSpike]);
        evilCloud.body.immovable = true;
        brickSpike.body.immovable = true;

        // Load character
        cat = this.game.add.sprite(this.game.world.centerX, 230, 'cat');
        cat.animations.add('bounce');
        cat.anchor.setTo(0.5, 0.5);
        cat.inputEnabled = true;

        // Enable character physics
        this.game.physics.arcade.enable(cat);
        cat.body.gravity.y = 800;  
        cat.body.collideWorldBounds = true;
        cat.body.bounce.set(1.3);
        
    },
    
    jump: function(){
        if(window.localStorage.getItem('sound') == 'on') {
            jump.play();
        }

        oppX = this.game.physics.arcade.distanceToPointer(cat)*Math.cos(this.game.physics.arcade.angleToXY(cat, this.game.input.x, this.game.input.y) + Math.PI);
        oppY = this.game.physics.arcade.distanceToPointer(cat)*Math.sin(this.game.physics.arcade.angleToXY(cat, this.game.input.x, this.game.input.y) + Math.PI);
        cat.body.velocity.x = oppX*4;
        cat.body.velocity.y = oppY*4;
        cat.animations.play('bounce', 10, false);


        if (count > 0) {
            countTmp = count - 0.1;
            count = Math.round(countTmp *10)/10;
        }

        score.setText(count);
    },
    
    update: function(){
        
        this.game.input.onDown.addOnce(this.jump, this);

        if(this.game.physics.arcade.collide(coin, cat)) {
            if(window.localStorage.getItem('sound') == 'on') {
                getcoin.play();
            }
            count = count + 1;
            score.setText(count);
            coin.kill();
            coin.reset(Math.floor(Math.random()*((this.game.world.width - 32)-32+1)+32), Math.floor(Math.random()*((this.game.world.height - 64)- 64 +1 )+64));
        }
        
        if(this.game.physics.arcade.collide(evilCloud, cat) || this.game.physics.arcade.collide(brickSpike, cat)) {
            if(window.localStorage.getItem('sound') == 'on') {
            hurt.play();
            }
            this.endGame();
        }
    
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
