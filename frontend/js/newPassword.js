function Redefinir(event) {
    event.preventDefault()
    const newPassword = document.getElementById("new-password").value
    const confirmPassword = document.getElementById("confirm-password").value

    if (newPassword !== confirmPassword) {
      alert("As senhas não coincidem!")
      return false
    } else if (newPassword === "" || confirmPassword === "") {
        alert("Por favor, preencha todos os campos.")
    } else {
        alert("Senha redefinida com sucesso!")
        window.location.href = './sing-up.html'

    }
    
}