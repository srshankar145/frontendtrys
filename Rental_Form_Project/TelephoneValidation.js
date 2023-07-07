// https://www.twilio.com/blog/international-phone-number-input-html-javascript

function validateTele() {
  var phoneNumber = document.getElementById("mobile_Number").value;
  var phNumPattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

  if (!phNumPattern.test(phoneNumber)) {
    showPhError.textContent = " Enter valid phone no";
    return false;
  } else {
    showPhError.textContent = "";
    return true;
  }
}

function formatPhoneNumber(phoneNumberString) {
  var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return match[1] + "-" + match[2] + "-" + match[3];
    phoneNumber.addEventListener("change", (event) => {
      showPhError.textContent = "";
    });
  }
  return null;
}

function updatePhoneNumber() {
  var phoneNumber = document.getElementById("mobile_Number");
  phoneNumber.value = formatPhoneNumber(phoneNumber.value);
}
