function initAdMob(){
    if(AdMob && device.platform != 'browser'){
        AdMob.createBanner({
            adId: admobid.banner,
            position: AdMob.AD_POSITION.BOTTOM_CENTER,
            autoShow: true
        });

    }
}

function allIsGood() {

    if(navigator.splashscreen) {
        navigator.splashscreen.hide();
    }

    if (device.platform == "Android") {
        admobid = {
            banner: 'REMOVED',
            interstitial: 'REMOVED'
        }
    } else if (device.platform == "iOS") {
        admobid = {
            banner: 'REMOVED',
            interstitial: 'REMOVED'
        }
    }

    initAdMob();

    var game = new Phaser.Game(320, 480, Phaser.CANVAS, "game");
    game.state.add("Boot", boot);
    game.state.add("Preload", preload);
    game.state.add("MainScreen", mainScreen);
    game.state.add("StartGame", startGame);
    game.state.add("GameOver", gameOver);
    game.state.add("HighScore", highScore);
    game.state.add("HowTo", howTo);
    game.state.start("Boot");

}

document.addEventListener("deviceready", allIsGood, false) ;
