// Simple form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent actual form submission
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if(name && email) {
    document.getElementById("formMsg").innerText = "Message Sent Successfully!";
    document.getElementById("formMsg").style.color = "green";
  } else {
    document.getElementById("formMsg").innerText = "Please fill all fields!";
    document.getElementById("formMsg").style.color = "red";
  }
});
