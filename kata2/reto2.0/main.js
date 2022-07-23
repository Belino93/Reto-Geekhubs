// Creamos cadena de texto
let cadena = "HoLa MúNdO";



// Creamos funcion contador (cuenta caracteres)
const contador = (string) => {
    return string.split('').reduce((total, letter) => {
        total[letter] ? total[letter]++ : total[letter] = 1;
        return total;
    }, {});
};

// Creamos funcion contador palabras
const contadorPalabras = (string) => {
    return string.split(' ').reduce((total, word) =>{
        total[word] ? total[word]++ : total[word] = 1;
        return total;
    }, {})
};

// Funcion que convierte string en minúscula y elimina acentos
const evaluar = (string) => {
    let texto = string.toLowerCase();
    texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return espacios(texto);
};

// Elimina espacios 
const espacios = string => {
    texto = string.replace(/\s+/g, '');
    return texto;
}


// Depositamos el resultado que retorna la funcion a una variable
let resultado = contador(evaluar(cadena));




console.log(contadorPalabras(cadena));
console.log(contador(evaluar(cadena)));





