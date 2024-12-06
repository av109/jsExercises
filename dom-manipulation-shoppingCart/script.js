// Select elements from the DOM
const itemList = document.getElementById("itemList");
const inputElement = document.getElementById("item");
const addButton = document.getElementById("addbutton");

// Function to handle adding items to the list
const addItem = () => {
    // Get the current value of the input
    const itemValue = inputElement.value;

    // Check if the input is not empty
    if (itemValue.trim() === "") {
        alert("Please enter an item.");
        return;
    }

    // Clear the input field
    inputElement.value = '';

    // Create new list item elements
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");

    // Set text content for span and button
    span.textContent = itemValue;
    deleteButton.textContent = "Delete";

    // Append span and button to the list item
    listItem.appendChild(span);
    listItem.appendChild(deleteButton);

    // Append the list item to the unordered list
    itemList.appendChild(listItem);

    // Attach event handler to delete button
    deleteButton.addEventListener("click", () => {
        itemList.removeChild(listItem);
    });

    // Focus on the input element for next entry
    inputElement.focus();
};

// Attach event listener to add button
addButton.addEventListener("click", addItem);

// Optional: Allow pressing Enter key to add an item
inputElement.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addItem();
    }
});
