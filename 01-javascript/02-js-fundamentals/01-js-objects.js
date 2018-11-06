// Challenge 1
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
// for(let i = 0; i < students.length; i++){
//     console.log("Name: " + students[i].name + ", Cohort: " + students[i].cohort)
// };
for(let student of students){
    console.log(`Name: ${student.name}, Cohort: ${student.cohort}`)
};

// Challenge 2
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
// console.log("EMPLOYEES")
// for(let i = 0; i < users.employees.length; i++){
//     console.log(users.employees[i].last_name + ", " + users.employees[i].first_name)
// }
// console.log("MANAGERS")
// for(let i = 0; i < users.managers.length; i++){
//     console.log(users.managers[i].last_name + ", " + users.managers[i].first_name)
// }
for(let key in users){
    console.log(key.toUpperCase());
    for(let i = 0; i < users[key].length; i++){
        let num = i + 1;
        let fname = users[key][i].first_name.toUpperCase();
        let lname = users[key][i].last_name.toUpperCase();
        let length = fname.length + lname.length;
        console.log(`${num} - ${lname}, ${fname} - ${length}`)
    }
}