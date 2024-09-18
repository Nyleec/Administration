// Predefined user credentials (for demo purposes)
const validCredentials = {
    username: 'barbara.deale@yahoo.com',
    password: 'Littlety1$'
};

function login() {
    const enteredUsername = document.getElementById('username').value.trim().toLowerCase(); // Convert input to lowercase
    const enteredPassword = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    // Clear previous messages
    messageDiv.innerHTML = '';

    // Check if the credentials match
    if (enteredUsername === validCredentials.username && enteredPassword === validCredentials.password) {
        messageDiv.innerHTML = '<p class="success-message">Login successful! Redirecting...</p>';
        
        // Redirect to another page after a short delay
        setTimeout(() => {
            window.location.href = 'dashboard.html'; // Replace with the actual path of the target HTML page
        }, 2000); // 2 seconds delay before redirection
    } else {
        messageDiv.innerHTML = '<p class="error-message">Invalid username or password.</p>';
    }
}

// Listen for "Enter" key while typing in the password field
document.getElementById('password').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        login();
    }
});

// Function to save data to localStorage
function saveData() {
    const key = document.getElementById('dataKey').value;
    const value = document.getElementById('dataValue').value;

    if (key && value) {
        localStorage.setItem(key, value);
        alert('Data saved successfully!');
    } else {
        alert('Please enter both key and value.');
    }
}

// Function to load data from localStorage and display it in a grid
function loadData() {
    const gridDisplay = document.getElementById('gridDisplay');
    gridDisplay.innerHTML = ''; // Clear previous data

    // Loop through localStorage and display each key-value pair
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        // Create grid items for key and value
        const keyElement = document.createElement('div');
        keyElement.classList.add('grid-item');
        keyElement.textContent = key;

        const valueElement = document.createElement('div');
        valueElement.classList.add('grid-item');
        valueElement.textContent = value;

        // Append key and value to the grid
        gridDisplay.appendChild(keyElement);
        gridDisplay.appendChild(valueElement);
    }
}

// Function to get all data from localStorage
function getAllStoredData() {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        try {
            data[key] = JSON.parse(value);
        } catch (e) {
            data[key] = value;
        }
    }
    return data;
}

// Function to display the current data from localStorage
/*
function updateDataDisplay() {
    const dataContainer = document.getElementById('data-display');
    dataContainer.innerHTML = ''; // Clear previous display

    const dataStorage = getAllStoredData(); // Get all data from localStorage

    if (Object.keys(dataStorage).length === 0) {
        dataContainer.innerHTML = '<p>No data available.</p>';
        return;
    }

    for (let key in dataStorage) {
        const entry = dataStorage[key];
        dataContainer.innerHTML += `<p><strong>${key}:</strong> ${JSON.stringify(entry)}</p>`;
    }
}
*/
// Function to show the input box when the button is clicked
function showInputBox() {
    const inputBox = document.getElementById('input-box');
    inputBox.style.display = 'block'; // Show the input box
}

// Function to remove a data entry based on the entered dataKey
function submitDataKey() {
    const dataKey = document.getElementById('dataKeyInput').value;

    if (dataKey && localStorage.getItem(dataKey)) {
        localStorage.removeItem(dataKey); // Remove the entry
        alert('Data entry removed for key: ' + dataKey);
        updateDataDisplay();
    } else {
        alert('No data found for key: ' + dataKey);
    }

    // Clear input and hide the input box after submission
    document.getElementById('dataKeyInput').value = '';
    document.getElementById('input-box').style.display = 'none';
}

// On page load, display the stored data
/*
window.onload = function() {
    updateDataDisplay();
};
*/
