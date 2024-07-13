// Import the Stack class from Stack.js
import Stack from './Stack.js';

// Initialize stack for undo and redo operations
const undoStack = new Stack();
let redoStack = new Stack(); // Change to let to allow reassignment

// Get elements from the DOM
const descriptionTextArea = document.getElementById('description');
const undoButton = document.getElementById('undoButton');
const redoButton = document.getElementById('redoButton');

// Function to update UI with current stack state
function updateUI() {
    descriptionTextArea.value = undoStack.peek() || ''; // Display current text in textarea
    undoButton.disabled = undoStack.isEmpty(); // Disable undo button if stack is empty
    redoButton.disabled = redoStack.isEmpty(); // Disable redo button if stack is empty
}

// Event listener for textarea input
descriptionTextArea.addEventListener('input', function () {
    const currentValue = this.value;
    undoStack.push(currentValue);
    redoStack = new Stack(); // Reassign redoStack to a new instance
    updateUI();
});

// Event listener for undo button
undoButton.addEventListener('click', function () {
    const undoneValue = undoStack.pop();
    if (undoneValue !== null) {
        redoStack.push(undoneValue);
        updateUI();
    }
});

// Event listener for redo button
redoButton.addEventListener('click', function () {
    const redoneValue = redoStack.pop();
    if (redoneValue !== null) {
        undoStack.push(redoneValue);
        updateUI();
    }
});

// Initial UI update
updateUI();
