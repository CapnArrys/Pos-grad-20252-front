const notas = [7,8,9,6,5];
console.log(notas)

console.log(notas[0]);
console.log(notas[notas.length - 1]);

console.log(notas.push(2));
console.log(notas)

console.log(notas.shift());
console.log(notas)


let result = ""; 
for (let flag = 0; flag < notas.length; flag++) { 
    result += notas[flag] + ' ';
    console.log(result)
} 

let soma = notas.reduce(function(acumulador, nota) {
    return acumulador + nota;
}, 0);
let media = soma / notas.length;
console.log(media)

console.log(notas.filter((value) => value > 7));

console.log(notas.sort());

let included = notas.includes(6.5)
console.log(`Nota 6.5 se encontra? ${included}`)


let index = notas.indexOf(8.0);
console.log(`o index da nota 8 é ${index}`)

let newnotas = notas.map((value) => value * value);
console.log(newnotas)
