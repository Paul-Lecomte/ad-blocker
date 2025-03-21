// Background script is used for ad-blocking in both Chrome and Firefox

// Log any errors or rule matches (useful for debugging)
chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((info) => {
    console.log('Rule matched:', info);
});

// Check and log the dynamic rules (useful for debugging)
chrome.declarativeNetRequest.getDynamicRules((rules) => {
    console.log('Dynamic Rules:', rules);
});