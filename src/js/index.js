let email = document.getElementById('email');
let btn = document.getElementById('btn');        
let error = document.getElementsByClassName('error')[0];

btn.addEventListener('click', function(event){
    event.preventDefault();
    verificarEmail();
});

function verificarEmail(){
    let emailValor = email.value;

    if(emailValor.includes('@') && emailValor.includes('.com') && emailValor.includes('.com')){
        error.innerHTML = 'Email succesfully added';
        error.style.display = 'block';
        error.style.color = 'green';
        email.style.border = '1px solid green';
        console.log(`${emailValor} is a valid e-mail`);
    }else{
        error.innerHTML = 'Please provide a valid email address';
        error.style.display = 'block';
        error.style.color = 'hsl(354, 100%, 66%)';
        email.style.border = '1px solid hsl(354, 100%, 66%)';
        console.log(`${emailValor} is not a valid e-mail`);
    }
}


