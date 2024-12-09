document.getElementById('myForm').addEventListener('submit', function (event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('All fields are required.');
        event.preventDefault();
        return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
});
document.getElementById('menuButton').addEventListener('click', function () {
    const menu = document.getElementById('dropdownMenu');
    menu.classList.toggle('visible');
});
document.getElementById('loadDataButton').addEventListener('click', function () {
    fetch('https://api.example.com/data')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('content').innerHTML = `
                <h3>${data.title}</h3>
                <p>${data.description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('content').textContent = 'Failed to load data.';
        });
});
function sanitizeInput(input) {
    const tempDiv = document.createElement('div');
    tempDiv.textContent = input; 
    return tempDiv.innerHTML;
}

document.getElementById('submitButton').addEventListener('click', function () {
    const userInput = document.getElementById('userInput').value;
    const sanitizedInput = sanitizeInput(userInput);

    document.getElementById('output').innerHTML = `You entered: ${sanitizedInput}`;
});
