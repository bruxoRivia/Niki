function cadastrarUsuario() {
    // Obtem os dados do formulário
    let buttom = document.getElementById('buttom')

    buttom.addEventListener("click", (event)=>{
    event.preventDefault()
    console.log('teste')
    let newUser = document.getElementById('newUsername').value;
    let userEmail = document.getElementById('email').value;
    let confirmEmail = document.getElementById('confirmEmail').value;
    let newPassword = document.getElementById('newPassword').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let userPhone = document.getElementById('phone').value;
    
    if (userEmail !== confirmEmail) {
        alert('Os emails não coincidem!');
        return;
    }

    if (newPassword !== confirmPassword) {
        alert('As senhas não coincidem!');
        return;
    }

    // Cria um objeto com os dados do usuário
    let userData = {
        username: newUser,
        email: userEmail,
        password: newPassword,
        phone: userPhone
    };

    // Converte o objeto para uma string JSON
    let userDataJSON = JSON.stringify(userData);

    // Armazena os dados no Local Storage
    localStorage.setItem('userData', userDataJSON);

    // Limpa os campos do formulário após o cadastro
    document.getElementById('cadastroForm').reset();

    alert('Cadastro realizado com sucesso!');
    })

}
cadastrarUsuario()