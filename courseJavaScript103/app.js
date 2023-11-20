/*

*/

/* destructuring
let colors = ['red', 'green', 'black']
let [firstcolor, secondcolor, thirdcolor = 'blue'] = colors
console.log(firstcolor, secondcolor, thirdcolor)
*/

/* destructuring nasted arrays
let numbers = [1, 2, [3, 4]]
let [first, second, [firstVal, secondVal]] = numbers
console.log(first, second, firstVal, secondVal)
*/

/* destructuring swap
let first = 5 , second = 7;
[first, second] = [1,2]
console.log(first, second)
*/

/* lvalue rvalue
let colors = ['red', 'green'];
[colors[0], colors[1]] = ['blue', 'black', 'white']
console.log(colors)
*/

/* destructuring on object
let student = {
    name : 'Ali',
    age : 25
}

let {name: youtName, age: yourAge} = student
console.log(youtName, yourAge)
*/

/* destructuring on nested object
let student = {
    name : {
        fName : 'Ali',
        lName : 'alahmadi'
    },
    age : 25
}

let {name: {lName: yourLName}, age: yourAge} = student
console.log(yourLName, yourAge)
*/

/* rest destructuring
let numbers = [1, 2, 3, 4, 5]
let [first, second, ...others] = numbers
console.log(first, second, others)
*/

/* spead operator
let first = [1, 2, 3]
let second = [4, 5]
let third = [...first , ...second]

console.log(third)
*/

