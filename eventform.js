const form = document.querySelector("#EventForm");
const typeSelect = document.querySelector("#type");
const extraField = document.querySelector("#extraField");
const extraInput = document.querySelector("#extraInput");
const output = document.querySelector("#output");

// Show Student ID field only when Student is selected
function updateStudentField() {
  if (typeSelect.value === "student") {
    extraField.hidden = false;
    extraInput.required = true;
  } else {
    extraField.hidden = true;
    extraInput.required = false;
    extraInput.value = "";
  }
}

typeSelect.addEventListener("change", updateStudentField);
updateStudentField();

// Check that the chosen date is after today
function updateStudentField() {
  if (typeSelect.value === "student") {
    extraField.style.display = "block";
    extraInput.required = true;
  } else {
    extraField.style.display = "none";
    extraInput.required = false;
    extraInput.value = "";
  }
}
form.addEventListener("submit", function (event) {
  event.preventDefault();

  output.innerHTML = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const availableDate = form.availableDate.value;
  const type = typeSelect.value;
  const studentId = extraInput.value.trim();

  // Validate date

  // Validate Student ID
  if (type === "student") {
    const studentPattern = /^\d{9}$/;

    if (!studentPattern.test(studentId)) {
      output.textContent =
        "Student I# must contain exactly 9 digits.";
      return;
    }
  }

  // Display results
  output.innerHTML = `
    <h2>Ticket Information</h2>
    <p>Name: ${firstName} ${lastName}</p>
    
    <p>Event Date: ${availableDate}</p>
    <p>Type: ${type}</p>
  `;

  form.reset();
  updateStudentField();
});