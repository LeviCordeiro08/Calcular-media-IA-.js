// ============================================================
// SISTEMA ACADÊMICO SIMPLES (versão 2)
// ============================================================

const MEDIA_MINIMA = 7; // média necessária para ser aprovado

// 1) ARRAY DE ALUNOS
// Obs.: a nota2 do Diego (11) é INVÁLIDA de propósito, para
// mostrar a validação funcionando. Troque por 7.0 para corrigir.
const alunos = [
  { nome: "Ana Souza",      matricula: "2026001", nota1: 8.5, nota2: 9.0 },
  { nome: "Bruno Lima",     matricula: "2026002", nota1: 5.0, nota2: 6.5 },
  { nome: "Carla Mendes",   matricula: "2026003", nota1: 9.5, nota2: 10.0 },
  { nome: "Diego Ferreira", matricula: "2026004", nota1: 6.0, nota2: 11 },
  { nome: "Elisa Costa",    matricula: "2026005", nota1: 3.5, nota2: 5.0 },
];

// 2) VALIDAÇÃO DE NOTA
// Uma nota é válida se for um número entre 0 e 10.
function notaValida(nota) {
  return typeof nota === "number" && !Number.isNaN(nota) && nota >= 0 && nota <= 10;
}

// 3) VALIDAÇÃO DO ALUNO
// Devolve uma lista de erros. Lista vazia = aluno sem problemas.
function validarAluno(aluno) {
  const erros = [];

  if (!notaValida(aluno.nota1)) {
    erros.push(`nota1 inválida (${aluno.nota1})`);
  }
  if (!notaValida(aluno.nota2)) {
    erros.push(`nota2 inválida (${aluno.nota2})`);
  }

  return erros;
}

// 4) CÁLCULO DA MÉDIA
function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

// 5) SITUAÇÃO: Aprovado ou Reprovado
function definirSituacao(media) {
  return media >= MEDIA_MINIMA ? "Aprovado" : "Reprovado";
}

// 6) PROCESSAMENTO
// Separa os alunos em três grupos: válidos, com notas inválidas.
// Só calcula a média DEPOIS de validar.
function processarAlunos(listaDeAlunos) {
  const processados = [];
  const invalidos = [];

  for (const aluno of listaDeAlunos) {
    const erros = validarAluno(aluno);

    if (erros.length > 0) {
      invalidos.push({ aluno, erros });
    } else {
      const media = calcularMedia(aluno.nota1, aluno.nota2);
      processados.push({ ...aluno, media, situacao: definirSituacao(media) });
    }
  }

  return { processados, invalidos };
}

// 7) FUNÇÕES DE EXIBIÇÃO
function exibirTitulo(texto) {
  console.log(`\n===== ${texto} =====`);
}

function exibirListaCompleta(processados) {
  exibirTitulo("TODOS OS ALUNOS");
  for (const a of processados) {
    console.log(
      `${a.matricula} | ${a.nome.padEnd(15)} | Média: ${a.media.toFixed(2)} | ${a.situacao}`
    );
  }
}

function exibirApenas(processados, situacao, titulo) {
  const filtrados = processados.filter((a) => a.situacao === situacao);

  exibirTitulo(`${titulo} (${filtrados.length})`);
  if (filtrados.length === 0) {
    console.log("Nenhum aluno nesta lista.");
    return;
  }
  for (const a of filtrados) {
    console.log(`- ${a.nome} (${a.media.toFixed(2)})`);
  }
}

function exibirInvalidos(invalidos) {
  exibirTitulo(`NOTAS INVÁLIDAS (${invalidos.length})`);
  if (invalidos.length === 0) {
    console.log("Nenhuma nota inválida encontrada.");
    return;
  }
  for (const { aluno, erros } of invalidos) {
    console.log(`- ${aluno.nome} (${aluno.matricula}): ${erros.join(", ")}`);
  }
  console.log("(Notas devem ser números entre 0 e 10. Esses alunos ficaram fora dos cálculos.)");
}

// 8) FUNÇÃO PRINCIPAL
function main() {
  const { processados, invalidos } = processarAlunos(alunos);

  exibirInvalidos(invalidos);
  exibirListaCompleta(processados);
  exibirApenas(processados, "Aprovado", "APROVADOS");
  exibirApenas(processados, "Reprovado", "REPROVADOS");
}

main();