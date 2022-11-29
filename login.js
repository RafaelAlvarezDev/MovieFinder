const logform = document.getElementById('login-form');

logform.addEventListener('submit', event => {
    // event.preventDefault();
    const formdata = new FormData(logform); 
    const data = Object.fromEntries(formdata);
    
    var emailField = document.getElementById('emailtext').value;
    console.log(emailField);
    console.log(data);
    
    
    
    
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
   
});



