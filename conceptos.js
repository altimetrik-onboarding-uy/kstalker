let arrayFunct = (arr) => {
    /*unshift sirve para agregar elementos al principio del array
    retorno: (console.log ej, devuelve la cantidad de elementos en el array) */
    arr.unshift(true, 'JPG'); 

    arr.push('Last Item'); // agrega al final del array

    //splice() 2 parametros(de momento), recibe la posicion y la cantidad de elementos a ser borrados desde esa pos
    arr.splice(2.2); //retornaria (todo menos el 2,3)

}

arrayFunct([2,3,4,'Hello', false]);
