// ============================================================
// SISTEMA ACADÊMICO SIMPLES
// ============================================================

// 1) ARRAY DE ALUNOS
// Um array é uma lista. Cada item da lista é um objeto,
// que guarda várias informações de um aluno.
const alunos = [
  { nome: "Ana Souza",      matricula: "2026001", nota1: 8.5, nota2: 9.0 },
  { nome: "Bruno Lima",     matricula: "2026002", nota1: 5.0, nota2: 6.5 },
  { nome: "Carla Mendes",   matricula: "2026003", nota1: 9.5, nota2: 10.0 },
  { nome: "Diego Ferreira", matricula: "2026004", nota1: 6.0, nota2: 7.0 },
  { nome: "Elisa Costa",    matricula: "2026005", nota1: 3.5, nota2: 5.0 },
];

// 2) FUNÇÃO QUE CALCULA A MÉDIA
// Recebe duas notas e devolve (return) a média entre elas.
function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

// 3) FUNÇÃO QUE DEFINE A SITUAÇÃO
// Se a média for 7 ou mais, o aluno está aprovado.
function definirSituacao(media) {
  if (media >= 7) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

// 4) FUNÇÃO QUE MOSTRA UM ALUNO NO TERMINAL
function exibirAluno(aluno) {
  const media = calcularMedia(aluno.nota1, aluno.nota2);
  const situacao = definirSituacao(media);

  console.log(`Nome: ${aluno.nome}`);
  console.log(`Matrícula: ${aluno.matricula}`);
  console.log(`Notas: ${aluno.nota1} e ${aluno.nota2}`);
  console.log(`Média: ${media.toFixed(2)}`);
  console.log(`Situação: ${situacao}`);
  console.log("-----------------------------");
}

// 5) FUNÇÃO PRINCIPAL
// Percorre o array e chama exibirAluno() para cada aluno.
function main() {
  console.log("===== SISTEMA ACADÊMICO =====\n");

  for (const aluno of alunos) {
    exibirAluno(aluno);
  }
}

// 6) EXECUTA O PROGRAMA
main();
