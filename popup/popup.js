// Function to retrieve the TOTP key from local storage
function getToTpkey() {
   
    try {
        // chrome.storage.local.get
        chrome.storage.local.get('totpKey', (data) => {
            const totpKey  = data['totpKey'];
            if (totpKey ) {
                const totpKeyElement = document.getElementById("totp-key");
                console.log("tf")
                if (totpKeyElement) {
                    totpKeyElement.textContent = totpKey;
                }
            }
            else {
                const totpKeyElement = document.getElementById("totp-key");
                if (totpKeyElement) {
                    totpKeyElement.textContent = 'No TOTP key found';
                }
            }
        });
    } catch (error) {
        console.error('Error retrieving TOTP key from storage:', error);
    }
}

const totpInput = document.getElementById('totp-input') 

const saveButton = document.getElementById('save-button');


saveButton.addEventListener('click', function(){
    var userProvidedTOTPKey = totpInput.value;
    if (userProvidedTOTPKey) {
        chrome.storage.local.set({ 'totpKey': userProvidedTOTPKey }, function(){
            console.log('TOTP key stored successfully:', userProvidedTOTPKey);
            // Clear input field
            totpInput.value = '';
            // Update display with stored TOTP key
            getToTpkey();
        });
    }
});

document.addEventListener('DOMContentLoaded', getToTpkey);
