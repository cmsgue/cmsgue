//validasi jenis browser
function detectBrowser() {
    let userAgent = navigator.userAgent;
    let browserName;
  
    if (userAgent.match(/chrome|chromium|crios/i)) {
      browserName = "Chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
      browserName = "Firefox";
    } else if (userAgent.match(/safari/i)) {
      browserName = "Safari";
    } else if (userAgent.match(/opr\//i)) {
      browserName = "Opera";
    } else if (userAgent.match(/edg/i)) {
      browserName = "Edge";
    } else if (userAgent.match(/android/i)) {
      browserName = "Android";
    } else if (userAgent.match(/iphone/i)) {
      browserName = "iPhone";
    } else {
      browserName = "Unknown";
    }
  
    return browserName;
}
 
// //|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|AppleWebKit 
// if (!navigator.userAgent.match(/Android/i))
// {
//     window.location = BASE_URL_DETECTED;   
// }

// if(detectBrowser()!=="Chrome"){
//     window.location = BASE_URL_CHROME;
// }

// //validasi rotate
// const portrait = window.matchMedia("(orientation: portrait)").matches;
// const landscape = window.matchMedia("(orientation: landscape)").matches;
// if(!portrait){
//     window.location = BASE_URL_POTRAIT;   
// }

// if ("ontouchstart" in document.documentElement)
// {
//   // content for touch-screen (mobile) devices
// }
// else
// {
//   // everything else (desktop)
// }

var absensi = {
    device:function(match){
        //|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|AppleWebKit 
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|AppleWebKit/i.test(navigator.userAgent)==match)
        {
            window.location = BASE_URL_DETECTED;   
        }        
    }, 
    browser:function(){
        if(detectBrowser()!=="Chrome"){
            window.location = BASE_URL_CHROME;
        }        
    },
    orientasi:function(){
        //validasi rotate
        const portrait = window.matchMedia("(orientation: portrait)").matches;
        const landscape = window.matchMedia("(orientation: landscape)").matches;
        if(!portrait){
            window.location = BASE_URL_POTRAIT;   
        }        
    }
}