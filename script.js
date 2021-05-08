function validate() {
  let name = document.getElementById("name").value;
  let subject = document.getElementById("subject").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let error_message = document.getElementById("error_message");

  error_message.style.padding = "10px";

  var text;
  if (name.length < 5) {
    text = "Please Enter Valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if (subject.length < 10) {
    text = "Please Enter Correct Subject";
    error_message.innerHTML = text;
    return false;
  }
  if (isNaN(phone) || phone.length != 10) {
    text = "Please Enter Valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please Enter Valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if (message.length <= 140) {
    text = "Your message is very short! (Min. 140 characters)";
    error_message.innerHTML = text;
    return false;
  }
  alert("Thank you for your message!");
  return true;
}