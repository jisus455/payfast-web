const cancelar = document.querySelector(".btn-cancelar");
const movPag = document.querySelector(".movPag");
const btn_adelante2 = document.querySelector(".sigPag");

const btn_atras1 = document.querySelector(".volver-pag1");
const btn_adelante3 = document.querySelector(".adelante-pag3");
const btn_atras2 = document.querySelector(".volver-pag2");
const btn_final = document.querySelector(".Fin");

const progressText = document.querySelectorAll(".paso p");
const progressCheck = document.querySelectorAll(".paso .check");
const num = document.querySelectorAll(".paso .num");

let max = 3;
let cont = 1;


btn_adelante2.addEventListener("click", function(e){
  
  e.preventDefault();
  var nombre = document.getElementById("nombres").value;
  var apellido1 = document.getElementById("apellido").value;

  if ( nombre=="" && apellido1==""){
    document.getElementById("nombres-error").innerHTML = "* Este campo no puede quedar vacío."
    document.getElementById("nombres").style.borderColor="#DA2A33"
    document.getElementById("apellido-error").innerHTML = "* Este campo no puede quedar vacío."
    document.getElementById("apellido").style.borderColor="#DA2A33"
  
    
  }else if ( (nombre=="" || apellido1=="") ||
            (nombre.length<2 || apellido1.length<2) ||
            (!verificarNombre(nombre) || !verificarNombre(apellido1))
          ){
    
    if ( nombre=="" ){
      document.getElementById("nombres-error").innerHTML = "* Este campo no puede quedar vacío."
      document.getElementById("nombres").style.borderColor="#DA2A33"      
    }else if ( nombre.length<2 ){
      document.getElementById("nombres-error").innerHTML = "* Debe tener 2 o más caractéres."
      document.getElementById("nombres").style.borderColor="#DA2A33"      
    }else if ( !verificarNombre(nombre) ){
      document.getElementById("nombres-error").innerHTML = "* Dato no válido."
      document.getElementById("nombres").style.borderColor="#DA2A33"      
    }else {
      document.getElementById("nombres-error").innerHTML = ""
      document.getElementById("nombres").style.borderColor="lightgrey"      
    }

    if ( apellido1=="" ){
      document.getElementById("apellido-error").innerHTML = "* Este campo no puede quedar vacío."
      document.getElementById("apellido").style.borderColor="#DA2A33"      
    }else if ( apellido1.length<2 ){
      document.getElementById("apellido-error").innerHTML = "* Debe tener 2 o más caractéres."
      document.getElementById("apellido").style.borderColor="#DA2A33"      
    }else if ( !verificarNombre(apellido1) ){
      document.getElementById("apellido-error").innerHTML = "* Dato no válido."
      document.getElementById("apellido").style.borderColor="#DA2A33"      
    }else {
      document.getElementById("apellido-error").innerHTML = ""
      document.getElementById("apellido").style.borderColor="lightgrey"      
    }
  }else{

    movPag.style.marginLeft = "-40%";
    num[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    cont += 1;

    document.getElementById("nombres-error").innerHTML = ""
    document.getElementById("nombres").style.borderColor="lightgrey"
    document.getElementById("apellido-error").innerHTML = ""
    document.getElementById("apellido").style.borderColor="lightgrey"
  

    var aux = nombre + ", " + apellido1;
    newUser = aux.toUpperCase();
  }

  function verificarNombre($n){
    var ExpRegular_Nombre = /^[A-Za-zÑñÁÉÍÓÚáéíóúüÜ]+((?:[\s{1}][A-Za-zÑñÁÉÍÓÚáéíóúüÜ]+)+)?$/;
    return ExpRegular_Nombre.test($n);
  }
  localStorage.setItem('nombre', nombre);
  localStorage.setItem('apellido', apellido1);
});

btn_adelante3.addEventListener("click", function(e){

  e.preventDefault();
  
  var fechaNac = document.querySelector('input[type="date"]').value;
  var sexo = document.getElementById("sexo").value;

  if ( sexo==-1 && fechaNac=="" ){
    document.getElementById("fechaNac-error").innerHTML = "* Seleccione una fecha."
    document.getElementById("fechaNac").style.borderColor="#DA2A33"
    document.getElementById("sexo-error").innerHTML = "* Seleccione una opción."
    document.getElementById("sexo").style.borderColor="#DA2A33"
    
  }else if ( sexo==-1 || fechaNac=="" ){
    
    if ( sexo==-1 ){
      document.getElementById("sexo-error").innerHTML = "* Seleccione una opción."
      document.getElementById("sexo").style.borderColor="#DA2A33"      
    }else {
      document.getElementById("sexo-error").innerHTML = ""
      document.getElementById("sexo").style.borderColor="lightgrey"      
    }

    if ( fechaNac=="" ){
      document.getElementById("fechaNac-error").innerHTML = "* Seleccione una fecha."
      document.getElementById("fechaNac").style.borderColor="#DA2A33"      
    }else {
      document.getElementById("fechaNac-error").innerHTML = ""
      document.getElementById("fechaNac").style.borderColor="lightgrey"      
    }
    
  } else {

    document.getElementById("sexo-error").innerHTML = ""
    document.getElementById("sexo").style.borderColor="lightgrey"
    document.getElementById("fechaNac-error").innerHTML = ""
    document.getElementById("fechaNac").style.borderColor="lightgrey"

    movPag.style.marginLeft = "-80%";
    num[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    cont += 1;

  }

  localStorage.setItem('fechaNac', fechaNac);
  localStorage.setItem('sexo', sexo);

});

btn_atras1.addEventListener("click", function(e){

  e.preventDefault();

  movPag.style.marginLeft = "0%";
  num[cont - 2].classList.remove("active");
  progressText[cont - 2].classList.remove("active");
  progressCheck[cont - 2].classList.remove("active");
  cont -= 1;
});

btn_atras2.addEventListener("click", function(e){

  e.preventDefault();

  movPag.style.marginLeft = "-40%";
  num[cont - 2].classList.remove("active");
  progressText[cont - 2].classList.remove("active");
  progressCheck[cont - 2].classList.remove("active");
  cont -= 1;
});



let c = 0;

btn_final.addEventListener("click", function(e){

  e.preventDefault();

    setTimeout(function(){
    
      let timerInterval;
      Swal.fire({
  
        allowOutsideClick: false,
        allowEscapeKey: false,
        stopKeydownPropagation: false,
  
        title: 'Realizando registro...',
        timer: 1000,
        timerProgressBar: true,
        onBeforeOpen: () => {
          Swal.showLoading()
          timerInterval = setInterval(() => {
            const content = Swal.getContent()
            if (content) {
              const b = content.querySelector('b')
              if (b) {
                b.textContent = Swal.getTimerRight()
              }
            }
          }, 100)
        },
        onClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          Swal.fire({
            title: '¡ATENCIÓN!',
            html: "Al continuar con el registro, <br>usted acepta los términos y condiciones.",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, continuar.',
            footer: '<a href="termCond.html" target="_blank">Ver términos y condiciones.</a>'
          }).then((result) => {
            if (result.value) {
              Swal.fire({
                icon: 'success',
                title: '¡Enhorabuena!',
      
                html: 'El usuario: <br>' +
                      '<b style="color: #0E2C48; font-size: px;";>' + 
                      newUser +'</b><br> Ha sido registrado con éxito.',
      
                confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> ACEPTAR',
                allowOutsideClick: false,
                allowEscapeKey: false,
                stopKeydownPropagation: false  
              }
              ).then((result) => {
                if (result.value) {
                  limpiar();
                  location.reload();            
                }
              })
            }else {
              cont -= 1;
            }
          })
        }
      });    
    });

  function verificarUsuario($n){
    var ExpRegular_Correo = /^[a-zA-Z][a-zA-Z0-9_]{3,9}$/;
    return ExpRegular_Correo.test($n);
  }

  function verificarContra($m){
    var ExpRegular_Num = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/; /* al menos un dígito, al menos una minúscula y al menos una mayúscula. */
    return ExpRegular_Num.test($m);
  }

  function limpiar(){
    document.getElementById("nombre").value = "";
    document.getElementById("apellido1").value = "";
    document.getElementById("apellido2").value = "";
    document.querySelector('input[type="date"]').value = "";
    document.getElementById("sexo").value = -1;
    document.getElementById("correo").value = "";
    document.getElementById("numCel").value = "";
  }

});
