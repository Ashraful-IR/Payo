document.getElementById("login-btn").addEventListener("click", function () {
  // Get the mobile number and pin values
  const mobileNumber = document.getElementById("mobile-number");
  const mbleNumberInput = mobileNumber.value;
  console.log(mbleNumberInput);

  const pin = document.getElementById("pin");
  const pinInput = pin.value;
  console.log(pinInput);

  if (mbleNumberInput === "1234567890" && pinInput === "1234") {
    alert("Login successful!");
  } else {
    alert("Invalid mobile number or pin.");
  }

  // Simulate login success
  alert("Login successful!");
  // Redirect to dashboard or another page
  window.location.href = "Pages/Home.html"; // 
});
