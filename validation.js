const floatingInput=document.getElementById('floatingInput');
const email_error=document.getElementById('email_error');
const form=document.getElementById('form');

form.addEventListener('submit', (e) =>{
    
    
    if(floatingInput.value === ''|| floatingInput.value == null){
        console.log("hii");
        e.preventDefault();
        email_error.innerHTML="email is required";
     }
    else if (!validateEmail(emailInput.value)) {
        email_error.innerHTML = 'Please enter a valid email address';
        return;
    }
    
})
