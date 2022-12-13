const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const message = document.getElementById('errorMessage');

let isValid = false;

function validateForm() {

    isValid = form.checkValidity();
    // If the form isn't valid
    if (!isValid) {
        // Style main message for an error
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
    }
    if (!/^[a-zA-Z]+$/.test(fullname.value)) {
        isValid = false;
        message.textContent = 'Please Enter a valid name.';
        message.style.color = 'red';
    }
    else {
        isValid = true;
    }
}


form.addEventListener('submit', (e) => {
    // Validate Form
    validateForm();

    if (isValid){
        // Do something
        message.textContent = 'Very nice. Great Success!';
        message.style.color = 'green';
        //Preventing form submission to avoid program crashing since its not submitting it to anywhere now
        e.preventDefault();
    }
    else {
        e.preventDefault();
    }
})