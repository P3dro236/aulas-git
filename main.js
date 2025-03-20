const alunos = [
    { nome: "João", nota: 7.2 },
    { nome: "Maria", nota: 9.2 },
    { nome: "Pedro", nota: 5.5 },
    { nome: "Ana", nota: 5.9 },
    { nome: "José", nota: 6 },
]

const alunosAprovados = array =>{
    let aprovados = array.filter(aluno => aluno.nota >= 6) 
    return aprovados
}

console.log(alunosAprovados(alunos))