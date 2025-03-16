function Alterar(){
    let email = document.getElementById('email').value.trim()

    if(email === ""){
        alert("Por favor, preencha todos os campos.")
    } else {
        alert('Código Enviado')
        window.location = './newPassword.html'
    }
}