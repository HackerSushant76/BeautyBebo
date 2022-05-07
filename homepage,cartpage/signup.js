
 var user_arr = JSON.parse(localStorage.getItem("userData"))|| [] ;

document.querySelector("#form").addEventListener("submit", signUP);
 
function signUP() {
  event.preventDefault();
  var obj_Arr = {
    fName: form.fname.value,
    lName: form.lname.value,
    check: form.check.value,
    email: form.email.value,
    phone: form.phone.value,
    pass: form.pass.value,
    Rpass: form.Rpass.value,
  };

  if (obj_Arr.fname === "") {
    setErrorFor(fname, " This is a required field.");
  } else {
    setSuccessFor(fname);
  }

  if (obj_Arr.lName === "") {
    setErrorFor(lname, " This is a required field.");
  } else {
    setSuccessFor(lname);
  }
  // if (obj_Arr.check === "") {
  //   setErrorFor(check, " This is a required field.");
  // } else {
  //   setSuccessFor(check);
  // }

  if (obj_Arr.email === "") {
    setErrorFor(email, " This is a required field.");
  }  else {
    setSuccessFor(email);
  }
  if (obj_Arr.phone === "") {
    setErrorFor(phone, "This is a required field.");
  } else {
    setSuccessFor(pass);
  }
  // password
  if (obj_Arr.pass === "") {
    setErrorFor(pass, "This is a required field.");
  } else {
    setSuccessFor(pass);
  }
//  confirm password
  if (obj_Arr.Rpass === "") {
    setErrorFor(Rpass, "This is a required field.");
  } else if (obj_Arr.pass !== obj_Arr.Rpass) {
    setErrorFor(Rpass, "Passwords does not match");
  } else {
    setSuccessFor(Rpass);
    user_arr.push(obj_Arr);
    localStorage.setItem("userData", JSON.stringify(user_arr));
    alert("Account Create SucessFully!!")

    window.location.href = "signIn.html";
  }
  
  
  
}
  


function setErrorFor(input, message) {
  var formControl = input.parentElement;
  var small = formControl.querySelector("small");
  //formControl.className = "form-control error";
  small.innerText = message;
  small.style.color = "red";
}
function setSuccessFor(input) {
    var formControl = input.parentElement;
  // formControl.className = "form-control success";
     var small = formControl.querySelector("small");
     small.innerText = ""
   }





