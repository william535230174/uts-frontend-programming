document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var inputs = document.querySelectorAll('.pay-inputBox input');
    var allFilled = true; 
    var errorMessage = document.querySelector('.error-message'); 
    
    errorMessage.style.display = "none";
    
    inputs.forEach(function(input) {
        if (input.value.trim() === "") {
            allFilled = false;
            input.style.border = "2px solid red"; 
        } else {
            input.style.border = ""; 
        }
    });

    if (!allFilled) {
        errorMessage.style.display = "block"; 
    } else {
        window.location.href = "thank-you.html";
    }
});