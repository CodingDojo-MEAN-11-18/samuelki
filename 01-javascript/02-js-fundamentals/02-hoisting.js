// 1. GIVEN
console.log(hello);                                   
var hello = 'world';                                 
// AFTER HOISTING BY THE INTERPRETER
var hello;
console.log(hello); // logs undefined
hello = 'world';

// 2. GIVEN
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}
// AFTER HOISTING BY THE INTERPRETER
var needle;
function test(){
    var needle;
    needle = 'magnet'
    console.log(needle) // logs 'magnet'
}
needle = 'haystack';
test();

// 3. GIVEN
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
// AFTER HOISTING BY THE INTERPRETER
var brendan;
function  print(){
    bredan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool'
console.log(brendan); // logs 'super cool'

// 4. GIVEN
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
// AFTER HOISTING BY THE INTERPRETER
var food;
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food); 
}
food = 'chicken';
console.log(food); // logs 'chicken'
eat(); // logs 'half-chicken'

// 5. GIVEN
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
// AFTER HOISTING BY THE INTERPRETER
var mean;
mean(); // logs error, mean is not a function
console.log(food);
mean = function() {
    var food;
    food = "chicken";
    console.log(food); 
    food = "fish";
    console.log(food); 
}
console.log(food);

// 6. GIVEN
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
// AFTER HOISTING BY THE INTERPRETER
var genre;
function rewind(){
    var genre;
    genre = "rock";    
    console.log(genre); // logs 'rock'
    genre = "r&b";
    console.log(genre); // logs 'r&b'
}
genre = "disco";
console.log(genre); // logs 'disco'

// 7. GIVEN
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
// AFTER HOISTING BY THE INTERPRETER
function learn(){
    var dojo;
    dojo = "seattle";
    console.log(dojo); 
    dojo = "burbank";
    console.log(dojo); 
}
dojo = "san jose";
console.log(dojo); // logs 'san jose'
learn(); // logs 'seattle' and 'burbank'
console.log(dojo); // logs 'san jose'

// 8. GIVEN
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}
// AFTER HOISTING BY THE INTERPRETER
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){  
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "close for now";
    }
    // can't set dojo since it is a const
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));