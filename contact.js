function contact() {
    var info = {
        subject: document.getElementById("subject"),
        email: document.getElementById("email"),
        message: document.getElementById("message"),
        submit: document.getElementById("submit"),
        name: document.getElementById("name")
    };

    var a = empty(info.name.value, "name_error");
    var b = empty(info.email.value, "email_error");
    var c = empty(info.message.value, "message_error");
    var d = empty(info.subject.value, "subject_error");

    if (a == false || b == false || c == false || d == false) {
        return false;
    }
    else {
        const requestData = `subject=${info.subject.value}&email=${info.email.value}&message=${info.message.value}&submit=${info.submit.value}&name=${info.name.value}`;

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("msg").innerHTML = "Sent";
                setTimeout(function () {
                    document.getElementById("msg").innerHTML = "";
                }, 5000);
            }
        };
        xhttp.open("POST", "sendEmail.php", true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.send(requestData);
    }
}
function empty(input, id) {
    notEmpty = false;
    if (input == "") {
        document.getElementById(id).innerHTML = "Field cannot be empty.";
        console.log(notEmpty)
        return notEmpty; // false
    }
    else {
        document.getElementById(id).innerHTML = "";
        notEmpty = true;
        console.log(notEmpty);
        return notEmpty; //true
    }
}