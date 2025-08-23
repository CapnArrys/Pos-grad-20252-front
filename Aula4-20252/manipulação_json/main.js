let aluno = {
    "nome": "Sicrano FUleiro",
    "idade": 16,
    "curso": "Engenharia Elétrica",
    "notas": [7,8,7]
}

console.log(aluno.nome + " " + aluno.notas[0])


console.log(aluno.idade = 22)
aluno.notas.push(9)
console.log(aluno.notas)

let stringfied = JSON.stringify(aluno)
console.log(stringfied)

let parsefied = JSON.parse(stringfied)
console.log(parsefied)

for (let propriedade in aluno) {
  console.log(`${propriedade}: ${aluno[propriedade]}`);
}

let soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
let media = soma / aluno.notas.length;
console.log(media);


aluno.endereco = {
  rua: "Rua Ayrton Senna da Silva",
  cidade: "São Paulo",
  estado: "São paulo"
};
console.log(aluno)

console.log(aluno.endereco.cidade + " " + aluno.endereco.estado)

let alunos = [
    {
    "nome": "Sicrano FUleiro",
    "idade": 16,
    "curso": "Engenharia Elétrica",
    "notas": [7,8,7]
    },
    {
    "nome": "Malati Sil",
    "idade": 26,
    "curso": "Medicina",
    "notas": [9,10,7]
    },
    {
    "nome": "Sull vahn",
    "idade": 46,
    "curso": "Engenharia civil",
    "notas": [7,8,7]
    }

]
console.log(alunos)

let mediaMaiorQue8 = alunos.filter(aluno => {
  let media = aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length;
  return media > 8;
});
console.log(mediaMaiorQue8);