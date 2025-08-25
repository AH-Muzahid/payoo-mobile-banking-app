// Login button click event listener
document.getElementById('login-btn').addEventListener('click', function(event) {
    event.preventDefault(); 
    const phnNUmber = parseInt(document.getElementById('phn-number').value);
    const pin = parseInt(document.getElementById('pin').value);
    if (phnNUmber === 12345678910 && pin === 1234) {
        window.location.href = './home.html';
    } else {
        alert('Invalid Phone number or PIN. Please try again.');
    }
    });