// Se declara la variable nuevoCifrado de forma global y se inicializa como una string vacía
window.cipher = {
//Se crea la función encode
encode: (offset, str)=>{
  let nuevoCifrado="";
  //La variable offset se convierte en numero entero
  let offsetNuevo = parseInt(offset);

/* Se crea un ciclo for donde se aplica la formula para trasladar
la posicion de la letra en codigo ascii
se inicializa i en 0 y va aumentando una posicion conforme aumente
el largo del String*/
for(let i=0; i<str.length; i++){
    let letraAscii = str.charCodeAt(i);

    if (letraAscii >=65 && letraAscii<=90){
      let formula = (letraAscii-65+offsetNuevo)%26+65;
      let resultado = String.fromCharCode(formula);
      nuevoCifrado+=resultado;
    }

    else if (letraAscii >=97 && letraAscii<=122) {
      let formula = (letraAscii-97+offsetNuevo)%26+97;
      let resultado = String.fromCharCode(formula);
      nuevoCifrado+=resultado;
    }

    else {
      let resultado = String.fromCharCode(letraAscii);
      nuevoCifrado+=resultado;
  }

}
    return (nuevoCifrado);
},
  decode: (offset, str)=>{
    let nuevoCifrado="";
    let offsetNuevo = parseInt(offset)


      for(let i=0; i<str.length; i++){
          let letraAscii = str.charCodeAt(i);

          if (letraAscii >=65 && letraAscii<=90){
            let formula = (letraAscii+65-offsetNuevo)%26+65;
            let resultado = String.fromCharCode(formula);
            nuevoCifrado+=resultado;
          }

          else if (letraAscii >=97 && letraAscii<=122) {
            let formula = (letraAscii+97+offsetNuevo)%26+97;
            let resultado = String.fromCharCode(formula);
            nuevoCifrado+=resultado;
          }
          else {
            let resultado = String.fromCharCode(letraAscii);
            nuevoCifrado+=resultado;
          }
      }
      return (nuevoCifrado);
    }
};

/*
window.cipher = {
  // ...
  encode: (offset, str)=> {},
  decode: (offset, str)=> {}

};
*/
