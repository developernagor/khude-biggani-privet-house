document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    window.location.href = "index.html"; // Redirect to the desired URL
});
