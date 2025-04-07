function encontrarPalabraMasLarga(texto) {
    // Dividir el texto en palabras
    const palabras = texto.split(" ");
    // Inicializar la palabra más larga con una cadena vacía
    let palabraMasLarga = "";
    // Deslizar la ventana (recorrer el arreglo de palabras)
    for (let i = 0; i < palabras.length; i++) {
        // Si la palabra actual es más larga que la guardada, actualízala
        if (palabras[i].length > palabraMasLarga.length) {
            palabraMasLarga = palabras[i];
        }
    }

    return palabraMasLarga;
}

function buscarPalabra() {
    const texto = document.getElementById("textoInput").value;
    const palabra = encontrarPalabraMasLarga(texto);
    document.getElementById(
        "resultado"
    ).textContent = `La palabra más larga es: ${palabra}`;
}
