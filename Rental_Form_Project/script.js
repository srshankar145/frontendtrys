const detail_formEl = document.getElementById("persDetsForm");
let showNmError = document.getElementById("nameError");
let showSalError = document.getElementById("salError");
let showDobError = document.getElementById("dobError");
let showGenError = document.getElementById("genderError");
let showPhError = document.getElementById("phError");
let showMstaError = document.getElementById("marstaError");

function salutation_func(sel) {
  var salValue = document.getElementById("title").value;
  if (salValue == " ") {
    console.log("blank value . chose one title");
    showSalError.textContent = "blank value.. Pls choose one.";
  } else {
    showSalError.textContent = "";
    document.getElementById("title").classList.add("success");
    // console.log("you selected: ", sel.options[sel.selectedIndex].text);
    // this will show you the selected option text content inside the select.option html tag
  }

  document.getElementById("title").addEventListener("change", (event) => {
    showSalError.textContent = "";
  });
}

function martialSta_Check(sel) {
  var mstatus = document.getElementById("marital_status").value;
  if (mstatus == "") {
    console.log("blank value choose one status");
    showMstaError.textContent = "blank status.. Pls choose single.";
  } else {
    showMstaError.textContent = "";
    document.getElementById("marital_status").classList.add("success");
  }
  document
    .getElementById("marital_status")
    .addEventListener("change", (event) => {
      showMstaError.textContent = "";
    });
}

function validateForm(event) {
  event.preventDefault();

  const firstName = document.getElementById("fnamebox").value;
  const nameFormat = /^[a-zA-Z.]*$/g;
  if (firstName == "") {
    showNmError.textContent = "Name shouldnt be Blank";
    console.log("name shouldnt be balnk");
  } else if (nameFormat.test(firstName) == false) {
    showNmError.textContent = "Invalid Name. Enter valid Name";
  } else {
    showNmError.textContent = "";
    document.getElementById("fnamebox").classList.add("success");
  }

  document
    .getElementById("title")
    .addEventListener("change", salutation_func(this));

  // genderCheck();
  validateGen();
  validateTele();
  document
    .getElementById("marital_status")
    .addEventListener("change", martialSta_Check(this));
}

// Add if keyup or kerreleased functionality for the same date of birth validation.
document.getElementById("dateofBirth").addEventListener("change", function () {
  const dateofBirth = document.getElementById("dateofBirth").value;
  console.log("Date of Birth: ", dateofBirth);
  if (dateofBirth >= "2010-01-01") {
    showDobError.textContent = "Uneligibile for rent. Age above 25 allowed";
  } else {
    showDobError.textContent = "";
    // showDobSuccess.textContent = "You are Elgible for rent.";
    document.getElementById("dateofBirth").classList.add("success");
  }
});

function genderCheck() {
  var gender = document.getElementsByName("gender");
  const undisclose = document.getElementById("undisclose");
  console.log("Gender choosed:", gender);

  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      console.log("one button checked", gender[i].checked);
      showGenError.textContent = "";
      // document.getElementById(`gender${i}`).classList.add("success");
    } else {
      console.log("pls select one choice");
      showGenError.textContent = " pls select one choice";
      document.getElementsByName("gender")[3].focus();
    }
  }
  console.log("coming out of loop");
  // return false;
}

function validateGen() {
  var radios = document.getElementsByName("gender");
  var formValid = false;

  var i = 0;
  while (!formValid && i < radios.length) {
    if (radios[i].checked) formValid = true;
    i++;
  }
  if (!formValid) {
    document.getElementById("genderError").innerHTML =
      "Please choose one option";
    return false;
  } else {
    document.getElementById("genderError").innerHTML = "";
    return true;
  }
}

// Clear the error message when a radio button is clicked
var radios = document.getElementsByName("gender");
for (var i = 0; i < radios.length; i++) {
  radios[i].addEventListener("click", function () {
    document.getElementById("genderError").innerHTML = "";
  });
}

function validateTele() {
  var countryCode = document.getElementById("country-code").value;
  var phoneNumber = document.getElementById("mobile_Number").value;
  var phNumPattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

  if (!phNumPattern.test(phoneNumber)) {
    showPhError.textContent = " Enter valid phone no";
    return false;
  } else {
    showPhError.textContent = "";
  }

  phoneNumber = formatPhoneNumber(phoneNumber);
  return true;
}

function formatPhoneNumber(phoneNumberString) {
  var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }
  return null;
}

// function updatePhoneNumber() {
//   var phoneNumber = document.getElementById("mobile_Number");
//   phoneNumber.value = formatPhoneNumber(phoneNumber.value);
// }
