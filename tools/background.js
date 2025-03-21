chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        const adUrls = [
            "https://www.youtube.com/api/stats/watchtime?ads=true",
            "https://googleads.g.doubleclick.net/*"
        ];
        if (adUrls.some(url => details.url.includes(url))) {
            return { cancel: true };
        }
    },
    { urls: ["*://www.youtube.com/*"] },
    ["blocking"]
);