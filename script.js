document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Perform simple validation
    if (username === '' || password === '') {
      document.getElementById('error-message').style.display = 'block';
      document.getElementById('error-message').innerText = 'Please enter both username and password';
      return;
    }
  
    // Perform authentication (Replace this with your authentication logic)
    if (username === 'user' && password === 'password') {
      alert('Login successful');
      window.location.href = 'success.html'; // Redirect to success page
    } 
  });
  