import { secretButton, secretParagraph } from './dom-loader.js';

var showSecret = false;

secretButton.addEventListener("click", toggelSecretState);
updateSecretParagraph();

function toggelSecretState() {
    showSecret = !showSecret;
    updateSecretParagraph();
    updateSecretButton();
}

function updateSecretParagraph() {
    if (showSecret) {
        secretButton.textContent = 'Hide the Secret';
    } else {
        secretButton.textContent = 'Show the Secret';
    }
}

function updateSecretButton() {
    if (showSecret) {
        secretParagraph.style.display = 'block';
    } else {
        secretParagraph.style.display = 'none';
    }
}
