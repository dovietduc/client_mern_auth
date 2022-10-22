function handleRegister() {
    // 1. lay value tren form
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // 2. gui value from client to serve

    axios.post('http://localhost:5000/api/auth/register', {
        username: username,
        email: email,
        password: password
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

}