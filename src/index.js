/*Se declaran las variables correspondientes para cada sección del html*/
const pantalla1 = document.getElementById('pantalla1');
const pantalla2 = document.getElementById('pantalla2');
const pantalla3 = document.getElementById('pantalla3');

/*Se declaran las variables correspondientes a cada boton del html*/
const codificar = document.getElementById('azul');
const morado = document.getElementById('morado');
const decodificar = document.getElementById('verde');

/*Se declara una variable donde se llama el input del html
en cual el usuario va a ingresar su texto*/
const str1 = document.getElementById('mensaje');

/*Se llama al objeto html (donde el usuario va a ingresar o elegir el offset)
mediante su id*/
let offset1 = document.getElementById('opcion');

/* Se implementa el evento click para el boton que va a codificar,
para que lleve deve de la pantalla 1 o 3 a la 2, que es la que muestra el resultado
y ahí mismo se obtiene el valor del texto y del offset */
codificar.addEventListener('click', () => {
  let offset = offset1.value;
  let str = str1.value;
  pantalla1.classList.add('hide');
  pantalla3.classList.add('hide');
  pantalla2.classList.remove('hide');
  let resultadoCifrado = window.cipher.encode(offset, str);
  document.getElementById("msjcifrado").innerHTML = resultadoCifrado;
});

/* Se implementa el evento click para el boton que va regresar al usuario a la pantalla 1,
desde la pantalla 2 y 3, y que pueda volver a ingresar un texto y un offset*/
morado.addEventListener('click', () => {
  location.reload(true);
  pantalla3.classList.add('hide');
  pantalla2.classList.add('hide');
  pantalla1.classList.remove('hide');
});

/* Se implementa el evento click para el boton que va a decodificar,
para que lleve deve de la pantalla 1 o 2 a la 3, que es la que muestra el resultado
y ahí mismo se obtiene el valor del texto y del offset */
decodificar.addEventListener('click', () => {
  let offset = offset1.value;
  let str = str1.value;
  pantalla1.classList.add('hide');
  pantalla2.classList.add('hide');
  pantalla3.classList.remove('hide');
  let resultadoCifrado = window.cipher.decode(offset, str);
  document.getElementById("msjdescifrado").innerHTML = resultadoCifrado;
});
