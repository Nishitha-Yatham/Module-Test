function submitForm() {
    let firstname=document.getElementById('N1').value;
    let lastname=document.getElementById('N2').value;
    let email=document.getElementById('N3').value;
    let reason=document.getElementById('N4').value;
    console.log(firstname,lastname,email,reason);
    if(firstname && lastname && email && reason){
        alert("Form Submitted Successfully!")
    }
    else{
        alert("All fields are required!")
    }


}