export const GuradarEnStorage = (clave, elemento) =>{

    // Conseguir los elementos que ya tenemos en el local storage
    let elementos = JSON.parse(localStorage.getItem(clave));

    // Comprobar si es un array
    if(Array.isArray(elementos)){
        // Añadir un elemento nuevo al array
        elementos.push(elemento);
    }else{
        // Crear un array nueva (de un elemento, el elemento de parametro)
        elementos = [elemento];
    }
    
    // Guardad en el local storage
    localStorage.setItem(clave, JSON.stringify(elementos));

    // Devolver objeto guardado
    return elemento;

}

