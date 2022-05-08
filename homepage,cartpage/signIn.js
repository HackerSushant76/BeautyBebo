
  document.querySelector("#form").addEventListener("submit", mylogin);

  var userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);

  function mylogin() {
    event.preventDefault();
    var loginObj = {
      email: form.email.value,
      pass: form.loginpass.value,
    };

    for (var i = 0; i < userData.length; i++) {
      if (userData[i] === null) {
        return alert("Please create an Account!");
      } else if (
        userData[i].email === loginObj.email &&
        userData[i].pass === loginObj.pass
      ) {
        localStorage.setItem("usersign", JSON.stringify(userData[i]));
         window.location.href = "index.html";
        return alert("SignIN SucessFul!");
      }
         
       else {
        return alert("Account does not exist! Please Create Account ");
      }
    }
    }

  function gotocrate() {
    window.location.href = "signup.html";
  }
