function openNav() {
  document.getElementById("mySidenav").style.width = "450px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

document.addEventListener("click", function (event) {
  var card = document.getElementById("mySidenav");
  var button = document.querySelector(".notify-btn");

  if (!card.contains(event.target) && !button.contains(event.target)) {
    closeNav();
  }
});

function openProfile() {
  document.getElementById("profileCard").style.width = "300px";
}

function closeProfile() {
  document.getElementById("profileCard").style.width = "0";
}

document.addEventListener("click", function (event) {
  var card = document.getElementById("profileCard");
  var button = document.querySelector(".open-button");

  if (!card.contains(event.target) && !button.contains(event.target)) {
    closeProfile();
  }
});

// tooltip initialization

document.addEventListener("DOMContentLoaded", function () {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

function toggleCard() {
  var card = document.getElementById("profileCard");
  if (card.style.display === "none" || card.style.display === "") {
    card.style.display = "block";
  } else {
    card.style.display = "none";
  }
}

function toggleNotification() {
  const container = document.getElementById("notifications-container");
  if (container.classList.contains("show")) {
    container.classList.remove("show");
    setTimeout(() => {
      container.style.display = "none";
    }, 500); // Match the duration of the CSS transition
  } else {
    container.style.display = "block";
    setTimeout(() => {
      container.classList.add("show");
    }, 10);
  }
}

function handleFileUpload(input) {
  const file = input.files[0];
  if (file) {
    const uploadContent = document.getElementById("uploadContent");
    uploadContent.innerHTML = `
        <div class="d-flex justify-content-between align-items-center w-100">
            <p class="m-0">File: ${file.name}</p>
            <button type="button" class="btn btn-outline-secondary btn-sm m-5" onclick="removeFile()">Remove</button>
        </div>
    `;
  }
}

function removeFile() {
  const input = document.getElementById("companyLogo");
  input.value = "";
  const uploadContent = document.getElementById("uploadContent");
  uploadContent.innerHTML = `
    <div class="d-flex justify-content-center align-items-center upload-image-container">
        <img src="./assets/images/upload.png" alt="Upload Icon"/>
        <p>Upload logo</p>
    </div>
    <div class="d-flex flex-column align-items-center size-container">
        <p class="file-size">Maximum file size 2MB</p>
        <p class="file-format">Format jpg, png</p>
    </div>
  `;
}

$(document).ready(function () {
  fetchTable();
});

function adjustScrollY() {
  // Get current window height
  var screenHeight = window.innerHeight;

  // Determine new height based on window size using percentages
  var newHeight;
  if (screenHeight <= 800) {
    newHeight = "30vh"; // 80% of viewport height
  } else if (screenHeight > 800 && screenHeight <= 1100) {
    newHeight = "45vh"; // 70% of viewport height
  } else {
    newHeight = "60vh"; // 90% of viewport height
  }

  // Get elements with the class 'dt-scroll-body'
  var elements = document.getElementsByClassName("dt-scroll-body");

  // Loop through the elements and update their height
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    // Update the height style
    element.style.height = newHeight;
  }

  console.log("Updated dt-scroll-body heights to " + newHeight);
}

$(window).on("resize", function () {
  adjustScrollY();
});

// Form-validation
// https://codepen.io/Kathiravan-Arjunan/pen/zYVNRJQ?editors=1010

document.addEventListener("DOMContentLoaded", () => {
  const fields = [
    "indMedRep",
    "visaDoc",
    "workPermit",
    "onsiteVisaStatus",
    "travelOnsite",
    "onsiteDOJ",
    "medReport",
    "visaStamp",
    "onsiteIdStatus",
  ];

  function enableNextField(currentFieldId, nextFieldId, validValue) {
    const currentField = document.getElementById(currentFieldId);
    const nextField = document.getElementById(nextFieldId);

    currentField.addEventListener("change", () => {
      if (currentField.value === validValue) {
        nextField.disabled = false;
      } else {
        nextField.disabled = true;

        disableFollowingFields(nextFieldId);
      }
    });
  }

  function disableFollowingFields(startFieldId) {
    const startIndex = fields.indexOf(startFieldId);
    for (let i = startIndex + 1; i < fields.length; i++) {
      document.getElementById(fields[i]).disabled = true;
    }
  }

  // Enable next field only if the current field has a specific valid value
  enableNextField("indMedRep", "visaDoc", "fit");
  enableNextField("visaDoc", "workPermit", "collected");
  enableNextField("workPermit", "onsiteVisaStatus", "received");
  enableNextField("onsiteVisaStatus", "travelOnsite", "received");
  enableNextField("travelOnsite", "onsiteDOJ", "booked");
  enableNextField("onsiteDOJ", "medReport", "2024-07-30");
  enableNextField("medReport", "visaStamp", "1st test fit");
  enableNextField("visaStamp", "onsiteIdStatus", "received");
  enableNextField("onsiteIdStatus", "", "received");
});

// chat gpt

function validateForm() {
  // Clear previous errors
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("ageError").innerText = "";

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;

  let isValid = true;

  // Validate name
  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required";
    isValid = false;
  }

  // Validate email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    document.getElementById("emailError").innerText = "Email is required";
    isValid = false;
  } else if (!email.match(emailPattern)) {
    document.getElementById("emailError").innerText = "Enter a valid email";
    isValid = false;
  }

  // Validate age
  if (age === "") {
    document.getElementById("ageError").innerText = "Age is required";
    isValid = false;
  } else if (isNaN(age) || age < 1 || age > 120) {
    document.getElementById("ageError").innerText =
      "Enter a valid age between 1 and 120";
    isValid = false;
  }

  return isValid;
}

// optimal code

function validateForm() {
  // Fields to validate
  const fields = [
    { id: "name", errorId: "nameError", message: "Name is required" },
    {
      id: "email",
      errorId: "emailError",
      message: "Email is required",
      pattern: /^[^ ]+@[^ ]+\.[a-z]{2,3}$/,
      patternMessage: "Enter a valid email",
    },
    {
      id: "age",
      errorId: "ageError",
      message: "Age is required",
      validate: (value) => !isNaN(value) && value >= 1 && value <= 120,
      validateMessage: "Enter a valid age between 1 and 120",
    },
  ];

  let isValid = true;

  fields.forEach(
    ({
      id,
      errorId,
      message,
      pattern,
      patternMessage,
      validate,
      validateMessage,
    }) => {
      const value = document.getElementById(id).value;
      const errorElement = document.getElementById(errorId);

      // Clear previous error
      errorElement.innerText = "";

      // Basic required field validation
      if (value === "") {
        errorElement.innerText = message;
        isValid = false;
        return;
      }

      // Pattern validation (if provided)
      if (pattern && !pattern.test(value)) {
        errorElement.innerText = patternMessage;
        isValid = false;
        return;
      }

      // Custom validation (if provided)
      if (validate && !validate(value)) {
        errorElement.innerText = validateMessage;
        isValid = false;
        return;
      }
    }
  );

  return isValid;
}

// saravanan validation

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("addEmployee")
    .addEventListener("submit", function (event) {
      let isValid = true;

      // Validate First Name

      // Validate Middle Name (optional)
      const middleName = document.getElementById("middleName").value;
      const middleNameError = document.getElementById("middleNameError");
      middleNameError.textContent = "";
      if (middleName.length > 65) {
        middleNameError.textContent =
          "Middle name must be up to 65 characters.";
        isValid = false;
      }

      // Validate Last Name
      const lastName = document.getElementById("lastName").value;
      const lastNameError = document.getElementById("lastNameError");
      lastNameError.textContent = "";
      if (!lastName) {
        lastNameError.textContent = "This field is required.";
        isValid = false;
      } else if (lastName.length < 1 || lastName.length > 65) {
        lastNameError.textContent =
          "Last name must be between 1 and 65 characters.";
        isValid = false;
      }

      // Validate Department
      const department = document.getElementById("department").value;
      const departmentError = document.getElementById("departmentError");
      departmentError.textContent = "";
      if (!department) {
        departmentError.textContent = "This field is required.";
        isValid = false;
      }

      // Validate Passport Number
      const passportNumber = document.getElementById("passportNumber").value;
      const passportNumberError = document.getElementById(
        "passportNumberError"
      );
      passportNumberError.textContent = "";
      const passportRegex = /^[A-PR-WYa-pr-wy][1-9]\d\s?\d{4}[1-9]$/;
      if (!passportNumber) {
        passportNumberError.textContent = "This field is required.";
        isValid = false;
      } else if (!passportRegex.test(passportNumber)) {
        passportNumberError.textContent = "Invalid passport number.";
        isValid = false;
      }

      // Validate Date of Birth
      const birthday = document.getElementById("birthday").value;
      const birthdayError = document.getElementById("birthdayError");
      birthdayError.textContent = "";
      if (!birthday) {
        birthdayError.textContent = "This field is required.";
        isValid = false;
      } else {
        const today = new Date();
        const birthDate = new Date(birthday);
        if (birthDate > today) {
          birthdayError.textContent = "Future date cannot be selected.";
          isValid = false;
        } else {
          let age = today.getFullYear() - birthDate.getFullYear();
          const monthDiff = today.getMonth() - birthDate.getMonth();
          if (
            monthDiff < 0 ||
            (monthDiff === 0 && today.getDate() < birthDate.getDate())
          ) {
            age--;
          }
          if (age < 18) {
            birthdayError.textContent = "Age should be above 18.";
            isValid = false;
          }
        }
      }

      // Validate Date of Joining
      const dateOfJoining = document.getElementById("dateOfJoining").value;
      const dateOfJoiningError = document.getElementById("dateOfJoiningError");
      dateOfJoiningError.textContent = "";
      if (!dateOfJoining) {
        dateOfJoiningError.textContent = "This field is required.";
        isValid = false;
      } else {
        const today = new Date();
        const joiningDate = new Date(dateOfJoining);
        if (joiningDate > today) {
          dateOfJoiningError.textContent = "Future date cannot be selected.";
          isValid = false;
        }
      }

      if (!isValid) {
        event.preventDefault();
      }
    });
});
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("addEmployee")
    .addEventListener("submit", function (event) {
      let isValid = true;

      // Validate First Name
      const firstName = document.getElementById("firstName").value;
      const firstNameError = document.getElementById("firstNameError");
      firstNameError.textContent = "";
      if (!firstName) {
        firstNameError.textContent = "This field is required.";
        isValid = false;
      } else if (firstName.length < 1 || firstName.length > 65) {
        firstNameError.textContent =
          "First name must be between 1 and 65 characters.";
        isValid = false;
      }

      // Validate Middle Name (optional)
      const middleName = document.getElementById("middleName").value;
      const middleNameError = document.getElementById("middleNameError");
      middleNameError.textContent = "";
      if (middleName.length > 65) {
        middleNameError.textContent =
          "Middle name must be up to 65 characters.";
        isValid = false;
      }

      // Validate Last Name
      const lastName = document.getElementById("lastName").value;
      const lastNameError = document.getElementById("lastNameError");
      lastNameError.textContent = "";
      if (!lastName) {
        lastNameError.textContent = "This field is required.";
        isValid = false;
      } else if (lastName.length < 1 || lastName.length > 65) {
        lastNameError.textContent =
          "Last name must be between 1 and 65 characters.";
        isValid = false;
      }

      // Validate Department
      const department = document.getElementById("department").value;
      const departmentError = document.getElementById("departmentError");
      departmentError.textContent = "";
      if (!department) {
        departmentError.textContent = "This field is required.";
        isValid = false;
      }

      // Validate Passport Number
      const passportNumber = document.getElementById("passportNumber").value;
      const passportNumberError = document.getElementById(
        "passportNumberError"
      );
      passportNumberError.textContent = "";
      const passportRegex = /^[A-PR-WYa-pr-wy][1-9]\d\s?\d{4}[1-9]$/;
      if (!passportNumber) {
        passportNumberError.textContent = "This field is required.";
        isValid = false;
      } else if (!passportRegex.test(passportNumber)) {
        passportNumberError.textContent = "Invalid passport number.";
        isValid = false;
      }

      // Validate Date of Birth
      const birthday = document.getElementById("birthday").value;
      const birthdayError = document.getElementById("birthdayError");
      birthdayError.textContent = "";
      if (!birthday) {
        birthdayError.textContent = "This field is required.";
        isValid = false;
      } else {
        const today = new Date();
        const birthDate = new Date(birthday);
        if (birthDate > today) {
          birthdayError.textContent = "Future date cannot be selected.";
          isValid = false;
        } else {
          let age = today.getFullYear() - birthDate.getFullYear();
          const monthDiff = today.getMonth() - birthDate.getMonth();
          if (
            monthDiff < 0 ||
            (monthDiff === 0 && today.getDate() < birthDate.getDate())
          ) {
            age--;
          }
          if (age < 18) {
            birthdayError.textContent = "Age should be above 18.";
            isValid = false;
          }
        }
      }

      // Validate Date of Joining
      const dateOfJoining = document.getElementById("dateOfJoining").value;
      const dateOfJoiningError = document.getElementById("dateOfJoiningError");
      dateOfJoiningError.textContent = "";
      if (!dateOfJoining) {
        dateOfJoiningError.textContent = "This field is required.";
        isValid = false;
      } else {
        const today = new Date();
        const joiningDate = new Date(dateOfJoining);
        if (joiningDate > today) {
          dateOfJoiningError.textContent = "Future date cannot be selected.";
          isValid = false;
        }
      }

      if (!isValid) {
        event.preventDefault();
      }
    });
});
