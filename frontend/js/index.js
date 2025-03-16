function Entrar(){
    let email = document.getElementById('email').value.trim()
    let password = document.getElementById('password').value.trim()
    console.log(email)
    console.log(password)

    if(email === "" || password === ""){
        alert("Por favor, preencha todos os campos.")
    } else {
        alert("Login realizado com sucesso!")
        window.location = './sign-in.html'
    }
}