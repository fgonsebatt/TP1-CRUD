console.log(location.search)     // lee los argumentos pasados a este formulario
var args = location.search.substr(1).split('&');  
//separa el string por los “&” creando una lista [“id=3” , “nombre=’tv50’” , ”precio=1200”,”stock=20”]
console.log(args)
var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
//decodeUriComponent elimina los caracteres especiales que recibe en la URL 
document.getElementById("txtId").value = decodeURIComponent(parts[0][1])
document.getElementById("txtUser").value = decodeURIComponent(parts[1][1])
document.getElementById("txtPassw").value = decodeURIComponent(parts[2][1])
document.getElementById("txtEmail").value =decodeURIComponent( parts[3][1])
function modificar() {x
    let id = document.getElementById("txtId").value
    let n = document.getElementById("txtUser").value
    let p = document.getElementById("txtPassw").value
    let e = document.getElementById("txtEmail").value
    let usuario = {
        user: n,
        passw: p,
        email: e
    }
    let url = "https://felipegonsebatt.pythonanywhere.com/usuarios/"+id
    var options = {
        body: JSON.stringify(usuario),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")
            window.location.href = "./users.html";  //NUEVO 
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al Modificar")
        })      
}
