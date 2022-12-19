if (document.getElementById("app")) {
    const { createApp } = Vue

    createApp({
        data() {
            return {
                usuarios: [],
                errored: false,
                loading: true,
                url: "https://felipegonsebatt.pythonanywhere.com/usuarios",
                productos: [],
                errored2: false,
                loading2: true,
                url2: "https://felipegonsebatt.pythonanywhere.com/productos",
                // u: document.getElementById("txtUser"),
                // pas: document.getElementById("txtPassw")


            }

        },

        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.usuarios = data;
                        this.loading = false;
                    })
                    .catch(err => {
                        this.errored = true
                    })
            },
            // inicioSesion() {
            //     fetch(url)
            //         .then(res => res.json())
            //         .then(data => {
            //             this.usuarios = data;
            //             alert(u)
            //             for (usuario in usuarios) {

            //                 if (usuario.user == u && usuario.passw == pas) {
            //                     window.location.href = "users.html";

            //                 } else {
            //                     alert("Usuario o contraseña incorrecto.")
            //                 }
            //             }
            //         })
            // },
            // login() {
            //     const url3 = 'https://felipegonsebatt.pythonanywhere.com/usuarios/login';
            //     var options = {
            //         method: 'POST',
            //     }
            //     fetch(url3, options)
            //         .then(res => res.text()) // or res.json()
            //         .then(res => {
                       
            //         })
            // },
            eliminar(usuario) {
                const url = 'https://felipegonsebatt.pythonanywhere.com/usuarios/' + usuario;
                var options = {
                    method: 'DELETE',
                }
                fetch(url, options)
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                        location.reload();
                    })
            },
            fetchDataPr(url2) {
                fetch(url2)
                    .then(response => response.json())
                    .then(data2 => {
                        this.productos = data2;
                        this.loading2 = false;

                    })
                    .catch(err => {
                        this.errored2 = true
                    })
            },
            eliminarPr(producto) {
                const url2 = 'https://felipegonsebatt.pythonanywhere.com/productos/' + producto;
                var options2 = {
                    method: 'DELETE',
                }
                fetch(url2, options2)
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                        location.reload();
                    })
            }

            // cerrarSesion() {
            //     sessionStorage.removeItem('logueado')
            //     this.logueado = sessionStorage.getItem('logueado')
            //     this.limpiarCampos()
            // },
            // limpiarCampos() {
            //     this.Usuario.user = ""
            //     this.Usuario.password = ""
            // }
        },
        created() {
            this.fetchData(this.url)
            this.fetchDataPr(this.url2)
        }
    }).mount('#app')
}
