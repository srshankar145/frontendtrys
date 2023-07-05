const detail_formEl = document.getElementById("persDetsForm");
let showNmError = document.getElementById("nameError");
let showSalError = document.getElementById("salError");
let showDobError = document.getElementById("dobError");
let showGenError = document.getElementById("genderError");

function salutation_func(sel) {
  var salValue = document.getElementById("title").value;
  if (salValue == " ") {
    console.log("");
    showSalError.textContent = "blank value.. Pls choose one.";
  } else {
    showSalError.textContent = "";
    // console.log("you selected: ", sel.options[sel.selectedIndex].text);
    // this will show you the selected option text content inside the select.option html tag
    document.getElementById("title").classList.add("success");
  }
}

function validateForm() {
  // preventDefault();

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

  // document.getElementById("gender").addEventListener;
  // genderCheck();
  validateGen();
  validateTele();
}

// Add if keyup or kerreleased functionality for the same date of birth validation.
document.getElementById("dateofBirth").addEventListener("change", function () {
  const dateofBirth = document.getElementById("dateofBirth").value;
  console.log("Date of Birth: ", dateofBirth);
  if (dateofBirth >= "2010-01-01") {
    // console.log("Date of birth should be before Jan-2000");
    showDobError.textContent = "Uneligibile for rent. Age above 25 allowed";
  } else {
    // console.log("You are Elgible for rent.");
    showDobError.textContent = "";
    // showDobSuccess.textContent = "You are Elgible for rent.";
    document.getElementById("dateofBirth").classList.add("success");
  }
});

// if (document.querySelector('input[name="gender"]:checked') == null) {
//   window.alert("You need to choose an option!");
// }

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
  // window.alert("You need to choose an option!");
  // document.getElementById("undisclose").focus();

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
      "Please select your gender";
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

  var phoneNumberPattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

  if (!phoneNumberPattern.test(phoneNumber)) {
    document.getElementById("error").innerHTML =
      "Please enter a valid phone number";
    return false;
  } else {
    document.getElementById("error").innerHTML = "";
    return true;
  }
}
