let fullNameEl = document.getElementById("fname");
let emailAddEl = document.getElementById("email");
let passwrdEl = document.getElementById("passwrd");
let rptPassEl = document.getElementById("rptPass");
let formEl = document.getElementById("signup");
let fnameerrEl = document.getElementById("fname_err");
let emailerrEl = document.getElementById("email_err");





formEl.addEventListener('submit', function (e) {
    e.preventDefault();

    const fullName = fullNameEl.value.trim();
    const emailAdd = emailAddEl.value.trim();
    const passwrd = passwrdEl.value.trim();
    const rptpass = rptPassEl.value.trim();

    //Name Validation
    if (fullName == "") {
        fnameerrEl.textContent = "Name shouldnt be Blank";
        document.getElementById("fname").focus();
    } else if (!/^[a-zA-Z.]*$/g.test(fullName)) {
        fnameerrEl.textContent = "Name doesnt include special chars only dot accepted";
        document.getElementById("fname").focus();
    } else {
        document.getElementById("fname").classList.add('success');
        fnameerrEl.textContent = "";
    }
    // return fullName;

    //Email Validation
    //let emailChk = (?: [a - z0 - 9!#$ %& '*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&' * +/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]);
    let emailChk = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log("Check email id return: ", emailChk.test(emailAdd));

    if (emailAdd == "") {
        emailerrEl.textContent = "Email shouldnt be Blank";
        document.getElementById("email").focus();
    } else if (emailChk.test(emailAdd) == false) {
        emailerrEl.textContent = "Enter a Valid EmailId";
        document.getElementById("email").focus();
        document.getElementById("email").classList.add('success');
        emailerrEl.textContent = "";
    } else {
        document.getElementById("email").classList.remove('success');
    }
    // return emailAdd;

    console.log({ fullName, emailAdd, passwrd, rptpass });

})







