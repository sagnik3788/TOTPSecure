// chrome.runtime.onMessage.addListener((message, sender, sendResponse)=>{
//    if(message.action==='storeTOTPKey'){
//     var totpKey = message.totpKey
//     if(totpKey){
//          // Store the TOTP key in local storage
//          chrome.storage.local.set({ 'totpKey': totpKey },function(){
//             console.log('TOTP key stored successfully:', totpKey);
//          })
//     }
//    }
// })