function guardar() {
    
    let u = document.getElementById("txtUser").value
    let pas = document.getElementById("txtPassw").value
    let e = document.getElementById("txtEmail").value
 
    let usuario = {
        username: u,
        passw: pas,
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
            window.location.href = "../users.html";  //NUEVO  
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
 
}
function guardarpr() {
 
    let n = document.getElementById("txtNombre").value
    let p = parseFloat(document.getElementById("txtPrecio").value)
    let s = parseInt(document.getElementById("txtStock").value)
    let im = document.getElementById("txtImagen").value
    let des = document.getElementById("txtDescripcion").value
 
    let producto = {
        nombre: n,
        precio: p,
        stock: s,
        imagen: im,
        descripcion: des
    }
    let url = "https://felipegonsebatt.pythonanywhere.com/productos"
    var options = {
        body: JSON.stringify(producto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
       // redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            window.location.href = "./users.html";  //NUEVO  
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
 
}
