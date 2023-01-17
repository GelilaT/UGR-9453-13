// const myForm=document.querySelector('.form'); 
// const inputs=document.querySelectorAll('input');
// const required=["full name", "booking-email","phone_number"]; 
console.log('hiii') 

document.querySelector(".button1").addEventListener("click", formValidator);

function formValidator(e) {

    const fullname=document.getElementById("full name").value
    const email=document.getElementById("booking-email").value
    const phone=document.getElementById("phone").value
    const people = document.getElementById("number of people").value
    console.log('yess')
    // e.preventDefault();
    if (fullname.length == 0 || email.length == 0 || phone.length == 0 || people.length == 0){
        console.log('nooo')
        const div=document.createElement('div')
        div.className='message'
        div.appendChild(document.createTextNode("Please enter all fields"))
        const containerof = document.querySelector('.infoo')
        const myForm=document.querySelector('#book-form')
        containerof.insertBefore(div, myForm)
        setTimeout(() => document.querySelector('.message').remove(), 3000)
    }
   
}

const form=document.getElementById("book-form")
form.addEventListener("submit", formValidator)
