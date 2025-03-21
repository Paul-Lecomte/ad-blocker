# YouTube Ad Blocker

## Overview
This project is a custom-built ad blocker for YouTube. It removes intrusive ads by blocking ad requests and hiding ad elements directly on the page. The initial focus is on YouTube, with plans to expand support for other websites in the future.

## Features
- Blocks pre-roll, mid-roll, and banner ads on YouTube
- Removes ad-related elements from the page
- Uses a Chrome extension for easy integration
- Blocks network requests to known ad servers
- Lightweight and efficient solution

## Technologies Used
- JavaScript
- Chrome Extension API
- HTML/CSS (for optional UI components)

## How It Works
1. **Blocking Ad Requests:**
   - Uses the `chrome.webRequest` API to block requests to known YouTube ad URLs.
2. **Hiding Ad Elements:**
   - Uses a content script to remove ad-related elements from the DOM.
3. **Permissions Required:**
   - `activeTab` to access the current tab
   - `webRequest` and `webRequestBlocking` to intercept and block ad requests
   - `storage` to save user preferences (if needed)

## Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/Paul-Lecomte/ad-blocker.git
   ```
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" (toggle in the top-right corner).
4. Click "Load unpacked" and select the cloned project folder.
5. The extension is now installed and should start blocking ads on YouTube.

## File Structure
```
├── src/              # Source code for the ad blocker
│   └── content.js    # Removes ad elements from the DOM
├── tools/            # Utility scripts and tools
│   └── background.js # Handles network request blocking
├── .gitignore        # Specifies files to ignore in version control
├── manifest.json     # Chrome extension configuration
└── README.md         # Project documentation
```

## Future Improvements
- Add UI for user customization
- Expand ad blocking to other websites
- Improve detection of new YouTube ad formats

## Contributions
Feel free to submit pull requests or open issues for any improvements!