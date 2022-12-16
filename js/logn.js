logueado= sessionStorage.getItem('logueado')
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("logn").addEventListener('submit', validarLogin); 
  });
  
  function validarLogin(evento) {
    evento.preventDefault();
    
    if (logueado != null) {
      
      return;
    } else {
      alert("User o password incorrecto")
  
    }
    
    this.submit();
  };