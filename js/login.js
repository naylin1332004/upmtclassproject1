document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
  
    if (user === 'admin' && pass === 'upmt123') {
      localStorage.setItem('loggedIn', 'true');
      window.location.href = './about.html';
    } else {
      document.getElementById('errorMsg').textContent = 'passcode or username is incorrect!!! please try again';
    }
  });
  