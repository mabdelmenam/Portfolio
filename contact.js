function contact(){
    var info = { 
        subject: document.getElementById("subject"),
        email: document.getElementById("email"),
        message: document.getElementById("message"),
        submit: document.getElementById("submit"),
        name: document.getElementById("name")
    };
    /*if(info.name.value == ""){
        console.log("entered");
        document.getElementById('name_error').innerHTML="Name is Required";
        return false;
    }*/
    empty(info.name.value, "name_error");
    empty(info.email.value, "email_error");
    empty(info.message.value, "message_error");
    empty(info.subject.value, "subject_error");

    /*var msg = "";
    if((info.name.value && info.email.value && info.subject.value && info.message.value) != ""){
        msg = "Your email has been sent, thanks";
        info.name.value = info.email.value = info.subject.value = info.message.value = "";
    }
    else if((info.subject.value && info.name.value ) == ""){

    }
    else{
        msg = "Not Sent";
        return;
    }
*/
    const requestData = `subject=${info.subject.value}&email=${info.email.value}&message=${info.message.value}&submit=${info.submit.value}&name=${info.name.value}`;

    var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("msg").innerHTML = "Sent"; 
    }
      };
      xhttp.open("POST", "sendEmail.php", true);
      xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhttp.send(requestData);
}
function empty(input, id){
    if(input == ""){
        document.getElementById(id).innerHTML="Field cannot be empty.";
        return false;
    }
    else{
        document.getElementById(id).innerHTML="";
        return true;
    }
}