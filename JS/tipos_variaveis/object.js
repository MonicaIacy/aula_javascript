//permite que registremos tributos e propriedades dele

let user = {
    name: 'Mônica'
};

//alterando a propriedade de um objeto
console.log(user);

user.name = 'Mariana';
console.log(user);
user['name'] = 'Marilda';
console.log(user);

const prop = 'name';
user[prop] = 'Verona';

console.log(user);

//criando uma propriedade
user.lastName = 'Iacy Mendes';
console.log(user);

//deletando uma propriedade
delete user.name;
console.log(user);