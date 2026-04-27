// ========================================
// Aula 07 — Async/Await e JSON
// ========================================
// Implemente cada função abaixo.
// Rode os testes com: npx vitest run exercicios/aula07
// Não mexa no arquivo index.test.js.

// Exercício 1 — objetoParaJSON
export function objetoParaJSON(objeto) {
  // escreva seu código aqui
  const objetoo = JSON.stringify(objeto)
  return objetoo
}

// Exercício 2 — jsonParaObjeto
export function jsonParaObjeto(texto) {
  // escreva seu código aqui
  const textoJSON = JSON.parse(texto)
  return textoJSON
}

// Exercício 3 — clonarObjeto
export function clonarObjeto(objeto) {
  // escreva seu código aqui
  const objetoClone = structuredClone(objeto)
  return objetoClone
}

// ──────────────────────────────────────────────────
// Função auxiliar — simula uma consulta ao banco que demora 100ms
// NÃO MEXA nesta função — ela já está pronta
// ──────────────────────────────────────────────────
function simularConsulta(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, nome: `Aluno ${id}`, cidade: 'Salinas' })
    }, 100)
  })
}

// Exercício 4 — buscarDados
export async function buscarDados(id) {
  // escreva seu código aqui
  const consultaDados = await simularConsulta(id)
  return consultaDados
}

// Exercício 5 — dividirSeguro
export async function dividirSeguro(a, b) {
  // escreva seu código aqui
  try {
    const numberA = await buscarDados(a)
    const numberB = await buscarDados(b)
    if (numberB.id == 0) {
      throw new Error("Divisão por zero")
    }

    return numberA.id / numberB.id
  } catch (erro) {
    throw new Error("Divisão por zero")
  }
}
