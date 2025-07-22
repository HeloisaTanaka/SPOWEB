// Var: mais antigo, escopo global ou de função
// Let: mais recente, escopo de bloco
// Const: imutável
// Função: sub-rotina, possui nome, parâmetros e retorno
// floor: função de arredondamento do número para o numb anterior
// == compara o conteúdo das variáveis
// === além da comparação, verifica o posicionamento da memória

let x = 10;
let y = 3;

console.log('x = ' + x);
console.log('y = ' + y);
console.log('-x = ' + (-x));
console.log('x/y = ' + (x/y));
console.log('Resto de x por y = ' + (x%y));
console.log('Inteiro de x por y = ' + (Math.floor(x/y)));
console.log('x + 1 = ' + (++x)); //incrementa antes, ainda no print, ent printa o novo valor
console.log('x = ' + x);
console.log('x + 1 = ' + (x++)); //incrementa depois, printa primeiro o valor antigo, mas o valor da var é alterado
console.log('x = ' + x); //nesse print, o novo valor é exibido
