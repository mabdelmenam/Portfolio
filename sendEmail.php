<?php
    use PHPMailer\PHPMailer\PHPMailer;
    include_once "PHPMailer/PHPMailer.php";
    include_once "PHPMailer/Exception.php";
    include_once "PHPMailer/SMTP.php";

    $msg = "";
    global $msg;
    if(isset($_POST['submit'])){
        $subject = $_POST['subject'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        $name = $_POST['name'];
    
        $mail = new PHPMailer();
        //if want to send via SMTP
        $mail->Host = "smtp.gmail.com";
        $mail->isSMTP();
        $mail->SMTPAuth = true;
        $mail->Username = 'mabdelmenam511@gmail.com';
        $mail->Password = 'yup';
        $mail->SMTPSecure = "tls";//tls //ssl
        $mail->Port = 587; // TLS is 587 // 465

        $mail->addAddress('mabdelmenam511@gmail.com');
        $mail->setFrom($email);
        $mail->AddReplyTo($email, $name);
        $mail->Subject = $subject;
        $mail->isHTML(true);
        $mail->Body = $message;

        if($mail->send()){
            $msg = "Your email has been sent, thanks";
        }
        else{
            $msg = "Not sent";
        }

        if($msg != ''){
            echo "<h3>$msg</h3>";
          }
          
    }
?>