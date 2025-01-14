# Auto-Click and Close Modal Script for Bale Platform

This script is designed to automatically open gift packets on the Bale platform and close the modals that appear after clicking. It continuously checks for available gift packet buttons and clicks them. After a button is clicked, the modal window that opens is automatically closed.

## Features:
- Automatically clicks gift packet buttons on the Bale platform.
- Automatically closes modals that appear after clicking the buttons.
- Prevents clicking the same button multiple times.
- Log messages to track actions in the console.

## Sample Image of Gift Packet:
Here is a sample image of the gift packet:

![Sample Gift Packet](https://raw.githubusercontent.com/MfademReal/Bale-packet-auto-opener/refs/heads/main/main/packet.png)

## How to Use:

### 1. Open the Bale platform in your web browser.
- Navigate to the page where the gift packets are displayed.

### 2. Open the Developer Tools Console:
- **For Chrome:** Press `Ctrl + Shift + I` (Windows) or `Cmd + Option + I` (Mac), and then click on the "Console" tab.
- **For Firefox:** Press `Ctrl + Shift + K` (Windows) or `Cmd + Option + K` (Mac), and then click on the "Console" tab.
- **For Edge:** Press `F12` and click on the "Console" tab.

### 3. Paste the Script:
Copy and paste the [JavaScript code](https://github.com/MfademReal/Bale-packet-auto-opener/blob/main/main/main.js) into the console:


// Set an interval to continuously check for new buttons
const intervalId = setInterval(autoClickAndClose, 1000); // Check every second

// Log how to stop the script
console.log('Auto-click and close modal script started. To stop it, type clearInterval(intervalId) in the console.');


### 4. Start the Script:
Once the script is pasted into the console, it will automatically start checking for available buttons to click. The script will continuously search for new gift packet buttons every second.

### 5. Stop the Script:
If you want to stop the script, simply type the following command in the console:

```javascript
clearInterval(intervalId);
