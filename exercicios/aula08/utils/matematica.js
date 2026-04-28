// ========================================
// Aula 08 — Named Exports
// ========================================
// Implemente as quatro funções abaixo e exporte cada uma com "export".
// Todas recebem dois números (a, b) e retornam o resultado da operação.

export function somar(a, b) {
  // escreva seu código aqui 
  return a + b
}

export function subtrair(a, b) {
  // escreva seu código aqui
  return a - b
}

export function multiplicar(a, b) {
  // escreva seu código aqui
  return a * b
}

export function dividir(a, b) {
  // escreva seu código aqui
  if(b == 0){
    return null
  }
  return a / b
}
