Auto-Click and Close Modal Script for Bale Platform
This script is designed to automatically open gift packets on the Bale platform and close the modals that appear after clicking. It continuously checks for available gift packet buttons and clicks them. After a button is clicked, the modal window that opens is automatically closed.

Features:
Automatically clicks gift packet buttons on the Bale platform.
Automatically closes modals that appear after clicking the buttons.
Prevents clicking the same button multiple times.
Log messages to track actions in the console.
Sample Image of Gift Packet:
Here is a sample image of the gift packet:



How to Use:
1. Open the Bale platform in your web browser.
Navigate to the page where the gift packets are displayed.
2. Open the Developer Tools Console:
For Chrome: Press Ctrl + Shift + I (Windows) or Cmd + Option + I (Mac), and then click on the "Console" tab.
For Firefox: Press Ctrl + Shift + K (Windows) or Cmd + Option + K (Mac), and then click on the "Console" tab.
For Edge: Press F12 and click on the "Console" tab.
3. Paste the Script:
Copy and paste the following JavaScript code into the console:

javascript
Copy code
// Set to keep track of clicked buttons
const clickedButtons = new Set();

// Function to close the modal
function closeModal() {
    // Find the primary close button in the modal
    const closeButtons = document.querySelectorAll('.IconButton_innerWrapper__rOOEI.Modal_NavIconButton__83r4y');

    if (closeButtons.length > 0) {
        closeButtons.forEach(button => {
            button.click();
            console.log('Modal closed using a close button.');
        });
    } else {
        console.log('No modal close buttons found.');
    }
}

// Function to click buttons and handle modals
function autoClickAndClose() {
    // Find all buttons with the specified class
    const buttons = document.querySelectorAll('.NewButton_Button__nfU0M.NewButton_Small__Mfg3w.NewButton_Filled__-Io2I.GiftMessage_OpenButton__TARZz');

    buttons.forEach(button => {
        // If the button has not been clicked yet
        if (!clickedButtons.has(button)) {
            // Click the button
            button.click();
            console.log('Clicked a new button!');

            // Add to the clicked set
            clickedButtons.add(button);

            // Wait a moment to allow modal to appear and close it
            setTimeout(() => {
                closeModal();
            }, 500); // Adjust the delay as needed
        }
    });
}

// Set an interval to continuously check for new buttons
const intervalId = setInterval(autoClickAndClose, 1000); // Check every second

// Log how to stop the script
console.log('Auto-click and close modal script started. To stop it, type clearInterval(intervalId) in the console.');
4. Start the Script:
Once the script is pasted into the console, it will automatically start checking for available buttons to click. The script will continuously search for new gift packet buttons every second.

5. Stop the Script:
If you want to stop the script, simply type the following command in the console:

javascript
Copy code
clearInterval(intervalId);
This will stop the automatic clicking and modal closing process.

Notes:
The script is designed to run in a modern web browser (Chrome, Firefox, or Edge).
You may need to adjust the delay in the setTimeout function if the modal takes longer to load or close.
The button and modal class names are based on the Bale platform's current implementation. If these classes change, the script may need to be updated.
