const removeAds = () => {
    const adElements = document.querySelectorAll(
        '.ytp-ad-module, .ytp-ad-text, #player-ads, .ytp-ad-overlay-container'
    );
    adElements.forEach(el => el.remove());

    // Auto-skip video ads
    const skipButton = document.querySelector('.ytp-ad-skip-button');
    if (skipButton) {
        skipButton.click();
    }
};

// Run function every second to continuously remove ads
setInterval(removeAds, 1000);