console.log("this is projet4");
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validEmail = false;
let validPhone = false;
let validUser = false;
$('#failure').hide();
$('#success').hide();

// console.log(name, email, phone)
name.addEventListener('blur', () => {
    console.log("name is blue");
    //valid for name
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('ist matched');
        name.classList.remove('is-invalid');
        validUser = true;
    } else {
        console.log('your name is not vailid');
        name.classList.add('is-invalid');
        validUser = false;

    }
})
email.addEventListener('blur', () => {
    console.log("email is blue");
    //valid for email
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('ist matched');
        email.classList.remove('is-invalid');
        validEmail = true;
    } else {
        console.log('your email is not vailid');
        email.classList.add('is-invalid');
        validEmail = false;

    }
})
phone.addEventListener('blur', () => {
    console.log("phone is blue");
    //valid for phone
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('ist matched');
        phone.classList.remove('is-invalid');
        validPhone = true;
    } else {
        console.log('your phone is not vailid');
        phone.classList.add('is-invalid');
        validPhone = false;

    }
})
let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("you clicked on submit");
    //sumbit your from
    if (validEmail && validUser && validPhone) {
        console.log("phone,email and user are valid ");
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');

        $('#failure').hide();
        $('#success').show();



    } else {
        console.log("one of phone ,email and use are in valid ");
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');

        $('#failure').show();
        $('#success').hide();

    }

})