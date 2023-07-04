const detail_formEl = document.getElementById("persDetsForm");
let showErrorEl = document.getElementById("nameError");

function salutation_func(sel) {
  var salValue = document.getElementById("title").value;
  if (salValue == " ") {
    console.log("");
    alert("you selected blank value.. Pls choose one.");
  } else {
    console.log("you selected: ", sel.options[sel.selectedIndex].text);
    document.getElementById("title").classList.add("success");
    // this will show you the selected option text content inside the select.option html tag
  }
}

function validateForm() {
  //   this.preventDefault();

  const firstName = document.getElementById("fnamebox").value;
  const nameFormat = /^[a-zA-Z.]*$/g;
  if (firstName == "") {
    showErrorEl.textContent = "Name shouldnt be Blank";
    console.log("name shouldnt be balnk");
  } else if (nameFormat.test(firstName) == false) {
    showErrorEl.textContent = "Invalid Name. Enter valid Name";
  } else {
    showErrorEl.textContent = "";
    document.getElementById("fnamebox").classList.add("success");
  }
}

// Add if keyup or kerreleased functionality for the same date of birth validation.
document.getElementById("dateofBirth").addEventListener("change", function () {
  const dateofBirth = document.getElementById("dateofBirth").value;
  console.log("Date of Birth: ", dateofBirth);
  if (dateofBirth >= "2000-01-01") {
    console.log("Date of birth should be before Jan-2000");
  } else {
    console.log("You are Elgible for rent.");
  }
});
