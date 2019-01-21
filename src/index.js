const pantalla1 = document.getElementById('pantalla1');
const pantalla2= document.getElementById('pantalla2');
const pantalla3 = document.getElementById('pantalla3');

const codificar = document.getElementById('azul');
const morado = document.getElementById('morado');
const decodificar = document.getElementById('verde');

//Se declara una variable por cada objeto del HTML (inputs y parrafo)  que se llama mediante su ID
const str1 = document.getElementById("mensaje");
/*Se llama al objeto HTML donde el usuario va a ingresar o elegir el offset
mediante su id, definiendose la variable offset */
let offset1 = document.getElementById("opcion");



codificar.addEventListener('click',()=> {
  let offset=offset1.value;
  let str=str1.value;
  pantalla1.classList.add('hide');
  pantalla3.classList.add('hide');
  pantalla2.classList.remove('hide');
  let resultadoCifrado = window.cipher.encode(offset, str);
  document.getElementById("msjcifrado").innerHTML=resultadoCifrado;
});

 morado.addEventListener('click',()=> {
  location.reload(true);
  pantalla3.classList.add('hide');
  pantalla2.classList.add('hide');
  pantalla1.classList.remove('hide');
});

 decodificar.addEventListener('click',()=> {
  let offset=offset1.value;
  let str=str1.value;
  pantalla1.classList.add('hide');
  pantalla2.classList.add('hide');
  pantalla3.classList.remove('hide');
  let resultadoCifrado = window.cipher.decode(offset, str);
  document.getElementById("msjdescifrado").innerHTML=resultadoCifrado;
});


// addEventListener('click', ()=>{
//   window.cipher.encode(offset, str)
// })

//document.getElementById("msjcifrado").innerHTML=nuevoCifrado;
//document.getElementById("msjdescifrado").innerHTML=nuevoCifrado;
