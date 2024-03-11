//Variables con los botones
const botonUno = document.getElementById('botonUno');
const botonDos = document.getElementById('botonDos');
//Eventos de los botones
botonUno.addEventListener('click', codificar);
botonDos.addEventListener('click', decodificar);
function codificar() {
    let texto = document.getElementById('texto').value; //Obtengo el texto ingresado para trabajar con él
    let textarea = document.getElementById('texto'); //Creo un elemento con el objeto textarea
    let miTexto; //Defino una variable donde guardar el texto nuevo
    //Creo el texto nuevo cambiando las letras
    miTexto = texto.replace(/a/ig, '1').replace(/o/ig, '2').replace(/r/ig, '3').replace(/b/ig, 'a').replace(/c/ig, 'o').replace(/d/ig, 'r').replace(/q/ig, 'b').replace(/u/ig, 'c').replace(/e/ig, 'd').replace(/n/ig, 'q4').replace(/l/ig, 'u5').replace(/s/ig, 'e6').replace(/t/ig, 'n').replace(/m/ig, 'l').replace(/f/ig, 's').replace(/g/ig, 't7').replace(/i/ig, 'm8').replace(/p/ig, 'f').replace(/y/ig, 'g9').replace(/v/ig, 'i0');
    textarea.value = miTexto; //Cambio el valor del textarea por el nuevo texto
    //Modifico los botones
    botonUno.innerText = 'Copiar';
    botonUno.removeEventListener('click', codificar);
    botonUno.addEventListener('click', copiar);
    botonDos.innerText = 'Borrar';
    botonDos.removeEventListener('click', decodificar);
    botonDos.addEventListener('click', borrar);
}
function decodificar() {
    let texto = document.getElementById('texto').value;
    let textarea = document.getElementById('texto');
    let miTexto = textarea.value;
    miTexto = texto.replace(/s/ig, 'f').replace(/t7/ig, 'g').replace(/m8/ig, 'i').replace(/f/ig, 'p').replace(/g9/ig, 'y').replace(/i0/ig, 'v').replace(/l/ig, 'm').replace(/n/ig, 't').replace(/e6/ig, 's').replace(/u5/ig, 'l').replace(/q4/ig, 'n').replace(/d/ig, 'e').replace(/c/ig, 'u').replace(/b/ig, 'q').replace(/r/ig, 'd').replace(/o/ig, 'c').replace(/a/ig, 'b').replace(/3/ig, 'r').replace(/2/ig, 'o').replace(/1/ig, 'a');
    textarea.value = miTexto;
    botonUno.innerText = 'Copiar';
    botonUno.removeEventListener('click', codificar);
    botonUno.addEventListener('click', copiar);
    botonDos.innerText = 'Borrar';
    botonDos.removeEventListener('click', decodificar);
    botonDos.addEventListener('click', borrar);
}
function copiar() {
    let textarea = document.getElementById('texto');
    navigator.clipboard.writeText(textarea.value);
}
function borrar() {
    let textarea = document.getElementById('texto');
    textarea.value = '';
    botonUno.innerText = 'Codificar';
    botonUno.removeEventListener('click', copiar);
    botonUno.addEventListener('click', codificar);
    botonDos.innerText = 'Decodificar';
    botonDos.removeEventListener('click', borrar);
    botonDos.addEventListener('click', decodificar);
}
