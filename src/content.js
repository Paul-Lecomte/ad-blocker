document.addEventListener('DOMContentLoaded', function() {
    // Remove YouTube ad elements
    const adElements = document.querySelectorAll('.ytp-ad-module, .ytp-ad-text, #player-ads');
    adElements.forEach(element => {
        element.remove();
    });
});