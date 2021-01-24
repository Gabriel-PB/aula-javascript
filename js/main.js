//Multiplicação Simples
let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let total = valor1 * valor2; // Altere o valor da variável com o cálculo esperado 
console.log("PROD = " + total);

//Visita na feira
let line = gets().split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);
let total = A + B; // Altere o valor da variável com o cálculo esperado
console.log("X = " + total);

//Folha de pagamento
let numero_colaborador = parseInt(gets());
let horas_trabalhadas = parseInt(gets());
let valor_hora = parseFloat(gets());
let salary = parseFloat(100 * 5.50).toFixed(2); // Digite aqui o calculo do salário
console.log("NUMBER = " + numero_colaborador);
console.log("SALARY = U$ " + salary);
