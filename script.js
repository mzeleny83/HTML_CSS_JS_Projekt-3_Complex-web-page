function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle("dark-mode");
}

document
  .getElementById("passwordForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get password inputs
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    // Check if passwords match
    if (password1 !== password2) {
      document.getElementById("passwordMismatch").style.display = "block";
    } else {
      document.getElementById("passwordMismatch").style.display = "none";
      // Submit form if passwords match
      this.submit();
    }
  });

// Show/Hide Scroll to Top Button
window.addEventListener("scroll", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.documentElement.scrollTop > 1) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

// Scroll to Top Function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
