function guardar() {
    
    let n = document.getElementById("txtUser").value
    let p = document.getElementById("txtPassw").value
    let e = document.getElementById("txtEmail").value
 
    let usuario = {
        user: n,
        passw: p,
        email: e
    }
    let url = "https://felipegonsebatt.pythonanywhere.com/usuarios"
    var options = {
        body: JSON.stringify(usuario),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
       // redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            window.location.href = "../frontend/users.html";  //NUEVO  
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
 
}
