let quien = ["Mi abuela", "Mi perro","El gato","El cartero rabioso"];
let accion = ["cocinó", "destrozó", "se comió", "le tiró una granada", "se hizo popó", "le dió un abrazo"];
let que = ["mis deberes", "un asado", "a mi hermanita","al vecino cantautor"];
let cuando = ["al volver del colegio", "hace un rato", "al bajar del helicóptero", "en la puerta de casa"];
let posicionQuien = Math.floor(Math.random() * 4);  // returns a random integer from 0 to 3. Da la posición del valor del array
let posicionAccion = Math.floor(Math.random() * 6);
let posicionQue = Math.floor(Math.random() * 4);
let posicionCuando = Math.floor(Math.random() * 4);
console.log (quien[posicionQuien]+" "+accion[posicionAccion]+" "+que[posicionQue]+" "+cuando[posicionCuando]);

