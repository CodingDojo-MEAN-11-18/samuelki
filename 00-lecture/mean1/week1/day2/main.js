// function sayHello(name) {
//     var hello = 'hello';
//     console.log(hello + ' ' + name);
//     // interpolation
//     console.log(`${hello} ${name}`);
//     return hello;
// }
// console.log(sayHello('Patrick'))


// function call(func){
//     console.log('func ', func);
// }

// call(sayHello);

function counter(){
    var count = 0;
    
    function childScope(){
        return count += 1;
    }

    return childScope;
}
counter = counter();

console.log(counter())
// 1
console.log(counter())
// 2
console.log(counter())
// 3
console.log(counter())
// 4
console.log(counter())
// 5
console.log(counter())
// 6


function Person(name, items){
    if (!(this instanceof Person)) {
        console.log(name + ' is not a person ')
        return new Person(name, items);
    }

    // const person = { name };
    this.name = name;

    // dont do this
    // this = {}

    this.items = items;

}

Person.prototype.take = function take(item, target) {

    console.log(`${this.name} is taking`)
    if (!target || !Array.isArray(target.items)) {
        throw new Error('target must have an items array');
    } 

    for (let index = 0; index < target.items.length; index++) {
        if (item === target.items[index]) {
            console.log('found', item);
            // slice ['glue', 'paint', 'gold'] => ['glue', 'paint', 'gold] -- makes copy
            // splice [] => ['glue', 'paint', 'gold'] -- mutates
            target.items.splice(index, 1);
            this.items.push(item);

            return true;
        }
    }

    return false;
};

const bob = Person('Bob', ['glue', 'paint', 'gold']);
const sally = new Person('Sally', ['crackers', 'money', 'sand']);

console.log(bob)
console.log(sally)
// console.log(bob.name)


sally.take('gold', bob);


bob.take('sand', sally);

console.log(bob)
console.log(sally)


const backpack = {
    items: ['compass', 'map', 'snacks']
};

backpack.take = bob.take;
console.log(backpack);
bob.take('compass', backpack);

console.log(bob);
console.log(backpack);

backpack.take('sand', bob);

// bob.take.call(backpack, 'gold', sally);
bob.take.apply(backpack, ['gold', sally]);

console.log(bob);
console.log(sally);
console.log(backpack);