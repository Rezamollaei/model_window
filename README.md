This project demonstrates how to create and control modal windows using JavaScript, HTML, and CSS. The modal window can be opened by clicking buttons and closed by either clicking a close button, the overlay, or pressing the "Escape" key.

Features
Open Modal: Clicking any of the "Show Modal" buttons opens the modal window.
Close Modal: The modal can be closed by clicking the close button, overlay, or pressing the "Escape" key.
Overlay: The overlay fades in behind the modal window when it is open.
How It Works
HTML Elements:

The modal is initially hidden by default.
There are multiple "Show Modal" buttons to trigger the opening of the modal.
The modal contains a close button and an overlay for closing the modal.
Opening the Modal:

When a "Show Modal" button is clicked, the openmodall() function is triggered.
This function removes the hidden class from both the modal and the overlay, making them visible.
Closing the Modal:

Clicking the close button or the overlay triggers the closemodall() function.
This function adds the hidden class back to both the modal and the overlay, hiding them again.
Closing with "Escape" Key:

If the "Escape" key is pressed while the modal is open, the modal will close automatically.
The keydown event listener checks for the "Escape" key and closes the modal if it is not hidden.
How to Use
Opening the Modal:

Click any of the "Show Modal" buttons to open the modal window.
Closing the Modal:

Click the close button or click anywhere on the overlay to close the modal.
Alternatively, press the "Escape" key to close the modal window.
Technologies Used
HTML for the structure of the modal and buttons.
CSS for styling and hiding/showing the modal.
JavaScript for controlling the modal's behavior and adding event listeners.
This project showcases how to work with DOM elements, event listeners, and keyboard events in JavaScript to create an interactive UI component like a modal window.







