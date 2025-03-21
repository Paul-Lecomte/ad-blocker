// Remove ad elements from YouTube pages
function removeAds() {
    const adSelectors = [
        "ytd-ad-slot-renderer",
        ".ytp-ad-player-overlay",
        ".ytp-ad-text",
        ".ytp-ad-image",
        ".ad-showing"
    ];

    adSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => el.remove());
    });
}

// Run when page loads and observe for future ads
removeAds();
const observer = new MutationObserver(removeAds);
observer.observe(document.body, { childList: true, subtree: true });