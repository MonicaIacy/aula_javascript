const user = {
    name: 'Mônica',
    lastName: 'Iacy Mendes'
};

//recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user));

//recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.values(user));

//recupera um array de arrays contendo [nome_prop, valor_prop]
console.log('\nLista de propriedades e valores:', Object.entries(user));

//Mergear propriedades de objetos
Object.assign(user, {fullName: 'Mônica Iacy Mendes'});
//assign(onde var mergear - "target", n outros objetos) - add o fullName ao user

console.log('\nAdiciona a propriedade fullName no objeto user', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais obejtos', Object.assign({}, user, {age: 24}));
//colocando o array vazio {} não alteramos o target, apenas criamos outro array a partir dele

//Previne todas as alterações de um objeto (congela tudo)
const newObj = {foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObject após as alterações:', newObj);

//permite apenas a alteração de propriedades existentes em um objeto (não pode criar ou deletar)
const person = {name: 'Mônica'};
Object.seal(person);

person.name = 'Mônica Mendes';
delete person.name;
person.age = 24;

console.log('\nVariável person após as alterações:', person);

