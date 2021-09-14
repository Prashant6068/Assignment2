let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let mail = document.getElementById("email");
let phone = document.getElementById("phn");
let error1 = document.getElementById("err1");
let error2 = document.getElementById("err2");
let error3 = document.getElementById("err3");
let error4 = document.getElementById("err4");
let msg = document.getElementById("subject");
let error5 = document.getElementById("err5");

function valid() {
  error1.innerHTML = "";
  fname.style.border = "2px solid green";
 
 

  let name = fname.value;
  if (name == "") {
    error1.innerHTML= "<b>This field is required</b>";
    error1.className = "alert alert-warning";
   
    fname.style.border = "2px solid red";
   

   
    return false;
  } else return true;
}

function valid1() {
  error2.innerHTML = "";
  lname.style.border = "2px solid green";

  let name1 = lname.value;
  if (name1 == "") {
    error2.innerHTML = "<b>This field is required</b>";
    error2.className = "alert alert-warning";
    lname.style.border = "2px solid red";
    
    
    // error2.style.color = "black";
    return false;
  } else return true;
}

function valid2() {
  error3.innerHTML = "";
  mail.style.border = "2px solid green";

  let em = mail.value;
  let ss = em.substring(em.indexOf("@") + 1);
  if (em == "") {
    error3.innerHTML = "<b>This field is required</b>";
    error3.className = "alert alert-warning";
    mail.style.border = "2px solid red";
    

    return false;
  } else if (!em.includes("@") || ss === "") {
    error3.innerHTML = "<b>Invalid Email</b>";
    error3.className = "alert alert-warning";
    mail.style.border = "2px solid red";
    

    return false;
  } else return true;
}

function valid3() {
  error4.innerHTML = "";
  phone.style.border = "2px solid green";
  let num = phone.value;
  if (num == "") {
    error4.innerHTML = "<b>This field is required</b>";
    error4.className = "alert alert-warning";
    phone.style.border = "2px solid red";
    
    return false;
  } else if (num.length < 10 || num.length > 10) {
    error4.innerHTML = "<b>Please Enter 10-digit mnumber</b>";
    error4.className = "alert alert-warning";
    phone.style.border = "2px solid red";
    

    return false;
  } else return true;
}

function valid4() {
  error5.innerHTML = "";
  msg.style.border = "2px solid green";

  let massage = msg.value;
  if (massage == "") {
    error5.innerHTML = "<b>This field is required</b>";
    error5.className = "alert alert-warning";
    msg.style.border = "2px solid red";
    
    return false;
  } else return true;
}

function validateForm() {
  let cond1 = valid();
  let cond2 = valid1();
  let cond3 = valid2();
  let cond4 = valid3();

  return cond1 && cond2 && cond3 && cond4;
}

function validateForm1() {
  let cond1 = valid();
  let cond2 = valid1();
  let cond3 = valid2();
  let cond5 = valid4();

  return cond1 && cond2 && cond3 && cond5;
}



