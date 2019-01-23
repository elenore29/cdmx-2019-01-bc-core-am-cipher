window.cipher = {
  //Se crea la función encode
  encode: (offset, str) => {
    // Se inicializa la variable nuevoCifrado que va a contener el resultado de la función
    let nuevoCifrado = "";
    //La variable offset se convierte en número entero
    let offsetNuevo = parseInt(offset);

    /* Se crea un ciclo for donde obtiene el código ascii de cada carácter
    se inicializa i en 0 y va aumentando una posición conforme aumente
    el largo del String*/
    for (let i = 0; i < str.length; i++) {
      let letraAscii = str.charCodeAt(i);
      /*Se implementa un if que indica que si el código ascii del carácter ingresado
      esta entre el rango 65 y 90 (A-Z), se aplique la formula correspondiente para obtener su nueva posición en el código ascii
      y que devuelva el carácter de esa posición*/
      if (letraAscii >= 65 && letraAscii <= 90) {
        let formula = (letraAscii - 65 + offsetNuevo) % 26 + 65;
        let resultado = String.fromCharCode(formula);
        nuevoCifrado += resultado;
      }
      /*Se implementa un else if para que si el código ascii del carácter ingresado
      esta entre el rango 97 y 122 (a-z), se aplique la formula correspondiente para obtener su nueva posición en el código ascii
      y que devuelva el carácter de esa posición*/
      else if (letraAscii >= 97 && letraAscii <= 122) {
        let formula = (letraAscii - 97 + offsetNuevo) % 26 + 97;
        let resultado = String.fromCharCode(formula);
        nuevoCifrado += resultado;
      }
      /*Se implementa un else para que si no se cumplen las primeras dos condiciones,
      devuelva el mismo carácter*/
      else {
        let resultado = String.fromCharCode(letraAscii);
        nuevoCifrado += resultado;
      }
    }
    return (nuevoCifrado);
  },
  //Se crea la función encode
  decode: (offset, str) => {
    // Se inicializa la variable nuevoCifrado que va a contener el resultado de la función
    let nuevoCifrado = "";
    //La variable offset se convierte en número entero
    let offsetNuevo = parseInt(offset)

    /* Se crea un ciclo for donde obtiene el código ascii de cada carácter
    se inicializa i en 0 y va aumentando una posición conforme aumente
    el largo del String*/
    for (let i = 0; i < str.length; i++) {
      let letraAscii = str.charCodeAt(i);
      /*Se implementa un if que indica que si el código ascii del carácter ingresado
      esta entre el rango 65 y 90 (A-Z), se aplique la formula correspondiente para obtener su nueva posición en el código ascii
      y que devuelva el carácter de esa posición*/
      if (letraAscii >= 65 && letraAscii <= 90) {
        let formula = (letraAscii + 65 - offsetNuevo) % 26 + 65;
        let resultado = String.fromCharCode(formula);
        nuevoCifrado += resultado;
        /*Se implementa un else if para que si el código ascii del carácter ingresado
        esta entre el rango 97 y 122 (a-z), se aplique la formula correspondiente para obtener su nueva posición en el código ascii
        y que devuelva el carácter de esa posición*/
      } else if (letraAscii >= 97 && letraAscii <= 122) {
        let formula = (letraAscii - 122 - offsetNuevo) % 26 + 122;
        let resultado = String.fromCharCode(formula);
        nuevoCifrado += resultado;
        /*Se implementa un else para que si no se cumplen las primeras dos condiciones,
        devuelva el mismo carácter*/
      } else {
        let resultado = String.fromCharCode(letraAscii);
        nuevoCifrado += resultado;
      }
    }
    return (nuevoCifrado);
  }
};
