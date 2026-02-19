# View Source Chrome Extension

A simple and elegant Chrome extension that adds `view-source:` to the beginning of any URL with just one click, allowing you to quickly inspect the source code of any webpage.

## Features

✨ **Quick View Source** - Click the extension icon to view the page source code
📋 **Copy Source URL** - Copy the view-source URL to your clipboard
📌 **Pin for Quick Access** - Easily pin the extension to your toolbar
🎨 **Beautiful UI** - Modern, user-friendly interface
⚡ **Fast & Lightweight** - Minimal performance impact

## Installation

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable **Developer Mode** (toggle in the top right)
4. Click **Load unpacked** and select the folder containing this extension
5. The extension should now appear in your extensions list

## How to Use

### Method 1: Click the Icon
1. Click the View Source extension icon in your toolbar
2. Click **"View Source Code"** to open the page source in a new tab
3. Or click **"Copy Source URL"** to copy the view-source URL to your clipboard

### Method 2: Pin the Extension (Recommended)
1. Click the **Extensions icon** (puzzle piece) in your Chrome toolbar
2. Find **"View Source"** in the list
3. Click the **pin icon** next to it to pin it to your toolbar
4. Now you can quickly access it with a single click!

## File Structure

```
view-source/
├── manifest.json      # Extension configuration
├── popup.html         # Popup interface
├── popup.js          # Popup functionality
├── style.css         # Styling
├── README.md         # This file
└── images/           # Extension icons (optional)
    ├── icon-16.png
    ├── icon-48.png
    └── icon-128.png
```

## How It Works

The extension:
1. Gets the URL of the currently active tab
2. Prepends `view-source:` to the URL
3. Opens it in a new tab or copies it to your clipboard
4. Chrome then renders the HTML source code in a readable format

## Example

- **Current URL:** `https://example.com`
- **View Source URL:** `view-source:https://example.com`

## Browser Compatibility

- ✅ Chrome 88+
- ✅ Edge 88+
- ✅ Brave
- ✅ Other Chromium-based browsers

## License

MIT License - Feel free to use and modify

## Tips & Tricks

- **Keyboard Shortcut:** You can set a keyboard shortcut for the extension in `chrome://extensions/` by scrolling down and clicking "Keyboard shortcuts"
- **Works on Any Site:** This extension works on any website, including Google, GitHub, and more
- **View Source vs Developer Tools:** This gives you the raw HTML source, while Developer Tools shows the DOM (which may have been modified by JavaScript)

## Troubleshooting

**Q: The extension doesn't appear in my toolbar**
A: Make sure you've enabled Developer Mode and properly loaded the unpacked extension

**Q: I can't find where to pin the extension**
A: Click the puzzle piece icon in your Chrome toolbar, find "View Source", and click the pin icon

**Q: The view-source tab shows a blank page**
A: This sometimes happens on pages with strict security policies. Try using Developer Tools (F12) instead

## Future Enhancements

- [ ] Keyboard shortcuts support
- [ ] Settings page for customization
- [ ] View formatted/minified source toggle
- [ ] Syntax highlighting themes
- [ ] Export source code functionality

## Contributing

Feel free to fork this repository and submit pull requests for any improvements!