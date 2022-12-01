const logform = document.getElementById('login-form');
const email = document.getElementById("emaildata");
const password = document.getElementById("passworddata");

logform.addEventListener('submit', event => {
    let warnings = "";
    let emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let passRegEx = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,20}$/;
    let passcheck = false;

    if(password.value.length<8){
        warnings += 'Password must be at least 8 characters long'
        alert(warnings);
    } else if(password.value.length>20){
        warnings += 'Password must be less than 20 characters long'
        alert(warnings);

    }else if(passRegEx.test(password.value)==false){
        warnings += 'Password must contain an uppercase a simbol and a number'
        alert(warnings);

    }else{
        passcheck = true;
    }

    if(emailRegEx.test(email.value)==true && passcheck==true){
        event.preventDefault();
        const formdata = new FormData(logform); 
        const data = Object.fromEntries(formdata); 
        warnings += 'Success'
        alert(warnings); 
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }else if(emailRegEx.test(email.value)==false && passcheck==true) {
        warnings += 'Enter a valid email'
        alert(warnings);
    }
    
    
   
    
});



