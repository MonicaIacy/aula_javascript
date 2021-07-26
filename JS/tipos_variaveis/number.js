const myNumber = 10.600;

//trandforma o número em string
const numberAsString = myNumber.toString();
console.log('Número transformado em string:', typeof numberAsString); //typeof fala qual tipo de variável que é

//retorna número com número das casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais:', fixedTwoDecimals);

//transforma uma string em float
console.log('\nString parseada para float:', parseFloat('10.44'));

//transforma uma string em int
console.log('\nString parseada para int:', parseInt('10.20'));

//obs.: parseInt e parseFloat são number