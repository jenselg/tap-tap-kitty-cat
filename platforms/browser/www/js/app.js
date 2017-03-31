var admobid = {
    banner: 'ca-app-pub-3614469044994240/2813887539',
    interstitial: 'ca-app-pub-3614469044994240/2342882738'
}

function initAdMob(){
    if(AdMob){
    
        AdMob.createBanner({
            adId: admobid.banner,
            position: AdMob.AD_POSITION.BOTTOM_CENTER,
            autoShow: true
        });
        
    }
}

function allIsGood() {
    if(navigator.splashscreen) {   // Cordova API detected
        navigator.splashscreen.hide();
    }
    initAdMob(); 
}

document.addEventListener("deviceready", allIsGood, false) ;
