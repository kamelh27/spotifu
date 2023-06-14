

function expandInput() {
    let inputContainer = document.querySelector('.input-container');
    inputContainer.classList.add('focus');
  }
  
  function contractInput() {
    let inputContainer = document.querySelector('.input-container');
    inputContainer.classList.remove('focus');
  }

  let botonCambiarSeccion = document.querySelectorAll('.buttonIcon');
  const fondoPantalla  = document.querySelector('.layout-main')
  let seccionCerrar = document.querySelector('.playlist-section')


  for (let i = 0; i < botonCambiarSeccion.length; i++) {
    botonCambiarSeccion[i].addEventListener('click', (e) => {
      e.preventDefault();
      let seccionActual = document.querySelector('.seccion-actual');
      

      if(seccionActual){
        seccionActual.classList.remove('seccion-actual');
        fondoPantalla.classList.add('background-container')
        if(seccionCerrar){
          seccionCerrar.classList.add('seccion-cerrar')
        }
      }
    })
  }


const btnCambiarMansio = document.querySelectorAll('.table-button')

  for (let i=0 ; i<btnCambiarMansio.length; i++){
    btnCambiarMansio[i].addEventListener('click', (eve) =>{
      eve.preventDefault();
      const seccion = document.querySelector('.ocultar')
      const seccionOcultar = document.querySelector('.albumDetail')

      if(seccion){
        seccion.classList.remove('ocultar')
        if(seccionOcultar){
          seccionOcultar.classList.add('cerrar')
          fondoPantalla.classList.remove('background-container')
        }
      }
    })
  }
