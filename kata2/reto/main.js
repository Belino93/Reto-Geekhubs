// Creamos cadena de texto
let cadena = "HoLa MúNdO";

// Creamos funcion contador (cuenta caracteres)
const contador = (string) => {
    return string.split('').reduce((total, letter) => {
        total[letter] ? total[letter]++ : total[letter] = 1;
        return total;
    }, {});
};

// Funcion que convierte string en minúscula y elimina espacios
const evaluar = (string) => {
    let texto = string.toLowerCase();
    texto = texto.replace(/\s+/g, '');
    return removeElements(texto);
};

// Funcion elimina acentos
const removeElements = (string) => {
    return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}; 




// Depositamos el resultado que retorna la funcion a una variable
let resultado = contador(evaluar(cadena));


console.log(resultado);


