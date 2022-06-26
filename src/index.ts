function dimensionArreglo(): number[] {
  let longitud = Number(prompt("Ingrese dimension del arreglo:"));
  let vector: number[] = new Array(longitud);

  for (let indice = 0; indice < vector.length; indice++) {
    vector[indice] = Math.floor(Math.random() * 100);
  }
  return vector;
}

function mostrarArreglo(vector: number[]) {
  for (let indice = 0; indice < vector.length; indice++) {
    console.log(vector[indice]);
  }
}

function MenorDelArreglo(vector: number[]): number {
  let minimo: number = vector[0];
  for (let indice = 0; indice < vector.length; indice++) {
    if (vector[indice] < minimo) {
      minimo = vector[indice];
    }
  }
  return minimo;
}
let vectorResultado: number[] = dimensionArreglo();
mostrarArreglo(vectorResultado);
console.log("El menor del arreglo: " + MenorDelArreglo(vectorResultado));
