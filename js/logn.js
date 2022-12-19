


















// console.log(location.search)     // lee los argumentos pasados a este formulario
// var args = location.search.substr(1).split('&');  
// //separa el string por los “&” creando una lista [“id=3” , “nombre=’tv50’” , ”precio=1200”,”stock=20”]
// console.log(args)
// var parts = []
// for (let i = 0; i < args.length; ++i) {
//     parts[i] = args[i].split('=');
// }
// document.getElementById("txtUser").value = decodeURIComponent(parts[0][1])
// document.getElementById("txtPassw").value = decodeURIComponent(parts[1][1])
// function login() {
    
//     let u = document.getElementById("txtUser").value
//     let pas = document.getElementById("txtPassw").value

 
//     var usuario = {
//         user: u,
//         passw: pas
//     }
//     let url = "https://felipegonsebatt.pythonanywhere.com/usuarios"

//     fetch(url, usuario)
//         .then(response => response.json())
//         .then(data => {
//             this.usuarios = data;
            
                                 
//         })
//         .catch(err => {
//             //this.errored = true
//             alert("Error" )
//             console.error(err);
//         })
//         for (usuario of this.usuarios) {
                
//             if (usuario.user == u && usuario.passw == pas) {
//                 window.location.href = "./users.html";

//             } else {
//                 alert("Usuario o contraseña incorrecto.")
//             }
//         }   
 
// }

// const form = {
//     us: document.getElementById("txtUser"),
//     pass: document.getElementById("txtPassw"),
//     submit: document.querySelector("#signin-submit"),

//   };
//   let button = form.submit.addEventListener("click", (e) => {
//     e.preventDefault();
//     const login = "https://felipegonsebatt.pythonanywhere.com/usuarios";
  
//     fetch(login, {
//       method: "POST",
//       headers: {
//         Accept: "application/json, text/plain, */*",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         us: form.user.value,
//         pass: form.password.value,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         // code here //
//         if (data.error) {
//           alert("Error Password or Username"); /*displays error message*/
//         } else {
//           window.open(
//             "users.html"
//           ); /*opens the target page while Id & password matches*/
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });