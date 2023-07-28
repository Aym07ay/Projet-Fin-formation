document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const Number = document.getElementById('number').value;
    const Date= document.getElementById('date').value;
    
    alert(`Nom d'utilisateur : ${username}\nAdresse e-mail : ${email}\nMot de passe : ${password}\nDate de naissance:${Date}
    num portable : ${Number}`);
  });
