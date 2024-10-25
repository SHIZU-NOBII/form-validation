const form = document.getElementById('form'),
      userName = document.getElementById('username'),
      userEmail = document.getElementById('email'),
      userNumber = document.getElementById('number'),
      password = document.getElementById('password'),
      Cpassword = document.getElementById('cpassword')

form.addEventListener('submit', e=>{
    e.preventDefault()
    validate()
})

const sendData = (usernameVal, count, Srate)=>{
    if(count === Srate){
        // alert('Registration Successfull')
        swal('Welcome ' + usernameVal, 'Registration Successfull', 'success')
    }
}

const successMsg =(usernameVal)=>{
    let fromCon = document.getElementsByClassName('form-control') 
    let count = fromCon.length - 1
    for (let index = 0; index < fromCon.length; index++) {
        const element = fromCon[index];
        if(element.className === 'form-control success'){
            let Srate = 0 + index
            sendData(usernameVal,count, Srate)
        }else {
            return false
        }
    }  
}

const checkEmail = (emailVal)=>{
    var atSymbol = emailVal.indexOf('@')
    if(atSymbol < 1) return false
    var dot = emailVal.lastIndexOf('.')
    if(dot <= atSymbol + 3) return false
    if(dot === emailVal.length-1) return false
    return true
}

const validate = ()=>{
    const usernameVal = userName.value.trim();
    const emailVal = userEmail.value.trim()
    const phoneNumberVal = userNumber.value.trim()
    const passwordVal = password.value.trim()
    const cpasswordVal = Cpassword.value.trim()

    //VALIDATE USERNAME
    if(usernameVal === ''){
        setErroramsg(userName, 'Username Must Not Be Blank')
    }else if(usernameVal.length < 6){
        setErroramsg(userName, 'Username Must Have 6 Character')
    }else{
        setSuccesMsg(userName)
    }

    //VALIDATE EMAIL ADDRESS
    if(emailVal === ''){
        setErroramsg(userEmail, 'Invalid EmailAddress')
    }else if(!checkEmail(emailVal)){
        setErroramsg(userEmail, 'Please Enter Valid Email')
    }else{
        setSuccesMsg(userEmail)
    }

    //VALIDATE PHONE NUMBER
    if(phoneNumberVal === ''){
        setErroramsg(userNumber, 'Invalid Number')
    }else if(phoneNumberVal.length < 10 || phoneNumberVal.length > 12){
        setErroramsg(userNumber, 'Phonenumber Must Between 10 to 12 Characters')
    }else{
        setSuccesMsg(userNumber)
    }

    //VALIDATE PASSWORD
    if(passwordVal === ''){
        setErroramsg(password, 'Invalid Password')
    }else if(passwordVal.length < 6 || passwordVal.length > 20){
        setErroramsg(password, 'Password Must Be 6 or 20 Character')
    }else{
        setSuccesMsg(password)
    }

    //VALICATE CONFIRM PASSWORD
    if(cpasswordVal === ''){
        setErroramsg(Cpassword, 'Invalid Password')
    }else if(passwordVal !== cpasswordVal){
        setErroramsg(Cpassword, 'Password Not Matched')
    }else{
        setSuccesMsg(Cpassword)
    }

    successMsg(usernameVal)
}


function setErroramsg(input, error) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('span'); // Corrected the typo here
    small.innerText = error;
    // Optionally, you can add a class to style the error
    formControl.className = ('form-control error'); // Add an error class
}


function setSuccesMsg(input){
    const formControl = input.parentElement;
    formControl.className = ('form-control success');
}