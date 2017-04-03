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
            banner: 'ca-app-pub-8133264651158274/9632619748',
            interstitial: 'ca-app-pub-8133264651158274/3306884540'
        }
    } else if (device.platform == "iOS") {
        admobid = {
            banner: 'ca-app-pub-8133264651158274/7737084141',
            interstitial: 'ca-app-pub-8133264651158274/1690550541'
        }
    }

    initAdMob(); 
}

document.addEventListener("deviceready", allIsGood, false) ;
