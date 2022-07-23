// Creamos funcion contador (cuenta caracteres)
const contador = (string) => {
    return string.split('').reduce((total, letter) => {
        total[letter] ? total[letter]++ : total[letter] = 1;
        return total;
    }, {});
}

// Depositamos el resultado que retorna la funcion a una variable
let resultado = contador('Holaá mundo');

console.log(resultado);


