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
