let registros = [];

function validarCampos(email, password) {
  if (email.trim() === '' || password.trim() === '') {
    alert('Por favor, no deje campos en blanco');
    return false;
  }
  return true;
}

function validarCorreoElectronico(email) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, ingrese un correo electrónico con un formato válido');
    return false;
  }
  return true;
}

function agregarRegistroATabla(email, password) {
  registros.push({ email, password });

  let tabla = '<table class="table table-bordered">';
  tabla += '<thead><tr><th>Correo electrónico</th><th>Contraseña</th></tr></thead>';
  tabla += '<tbody>';

  for (const registro of registros) {
    tabla += `<tr><td>${registro.email}</td><td>${registro.password}</td></tr>`;
  }

  tabla += '</tbody></table>';

  document.getElementById('tablaRegistros').innerHTML = tabla;
}


function imprimirDatos(){

    const email = document.getElementById('email1').value;
    const password = document.getElementById('password1').value;

    if (!validarCampos(email, password) || !validarCorreoElectronico(email)) {
      return;
    }
    
    console.log(`Correo Electrónico: ${email}`);
    console.log(`Contraseña: ${password}`);

alert('Datos guardados');

agregarRegistroATabla(email, password);

}


$(document).ready( function () {
  $('#myTable').DataTable();
} );

$(function(){
  
  $('#eye').click(function(){
       
        if($(this).hasClass('fa-eye-slash')){
           
          $(this).removeClass('fa-eye-slash');
          
          $(this).addClass('fa-eye');
          
          $('#password1').attr('type','text');
            
        }else{
         
          $(this).removeClass('fa-eye');
          
          $(this).addClass('fa-eye-slash');  
          
          $('#password1').attr('type','password');
        }
    });
});