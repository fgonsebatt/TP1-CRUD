if (document.getElementById("app")) {
    const { createApp } = Vue
 
    createApp({
        data() {
            return {
                usuarios: [],
                errored: false,
                loading: true,
                url: "https://felipegonsebatt.pythonanywhere.com/usuarios",
                logueado: sessionStorage.getItem('logueado')
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
            inicioSesion() {
                fetch(this.url + '/' + this.Usuario.user)
                    .then(res => res.json())
                    .then(data => {
                        if (data.user == this.Usuario.user && data.passw == this.Usuario.passw) {
                            this.logueado = data.user
                            sessionStorage.setItem('logueado', data.user)
                            this.limpiarCampos()                      
                        } else {
                            alert("Usuario o contraseña incorrecto.")
                        }
                    })
            },
            cerrarSesion() {
                sessionStorage.removeItem('logueado')
                this.logueado = sessionStorage.getItem('logueado')
                this.limpiarCampos()
            },
            limpiarCampos() {
                this.Usuario.user = ""
                this.Usuario.password = ""
            }
        },
        created() {
            this.fetchData(this.url)
        }
    }).mount('#app')
}
