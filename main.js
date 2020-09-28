function generadorExcusas () {
    let quien = ["Mi abuela", "Mi perro","El gato","El cartero rabioso"];
    let accion = ["cocinó a", "destrozó a", "se comió a", "le tiró una granada a", "hizo popó en", "amenazó con una batidora a"];
    let que = ["mis deberes", "mis cuadernos", "mi hermanita","un vecino"];
    let cuando = ["al volver del colegio", "hace un rato", "al bajar del helicóptero", "en la puerta de casa"];
    let posicionQuien = Math.floor(Math.random() * 4);  // returns a random integer from 0 to 3. Da la posición del valor del array
    let posicionAccion = Math.floor(Math.random() * 6);
    let posicionQue = Math.floor(Math.random() * 4);
    let posicionCuando = Math.floor(Math.random() * 4);
    let myExcuse = (quien[posicionQuien]+" "+accion[posicionAccion]+" "+que[posicionQue]+" "+cuando[posicionCuando]);
//       window.onload = function () {
//       let myExcuse = "My excuse";
//        }
        return myExcuse;
}
