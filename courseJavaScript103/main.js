/*

*/

const mystring = 'I Love JavaScript and java and python'

/* test function
const regex = /JavaScript/
const containsRegex = regex.replace(mystring)
console.log(containsRegex)
*/

/* replace function
const regex = /JavaScript/
let newstring = mystring.replace(regex, 'Kotlin')
console.log(newstring)
*/

/* search function
let newstring = mystring.search(/JavaScript/)
console.log(newstring)
*/


/* match function
let myRegex = mystring.match(/and/g)
console.log(myRegex)
*/

//--------------------------------------------------------

/* using callback
console.log('start')
function userInfo(name, callback){
    setTimeout(() => {
        console.log('** User info received **')
        callback(name)
    }, 3000)
}
letuserName = userInfo('khalid', name =>{
    console.log(`Your name is ${name}`)
})

console.log('End')
*/

/* promise
console.log('start')
const newUser = new Promise((resolve, reject) =>{
    setTimeout(() => {
        const userInfo ={
            name: 'Khalid',
            age: 19
        }
        resolve(userInfo)
    }, 3000)
})
newUser.then(res => {
    console.log('** User info received **')
    console.log(res)
})

console.log('End')
*/

/* promise Resolve
const newUser = new Promise((resolve, reject) =>{
    setTimeout(() => {
        const userInfo ={
            name: 'Khalid',
            age: 19
        }
        resolve(userInfo)
    }, 3000)
})

const addNewUser = userInfo => {
    let userAge = userInfo.age
    let adultAge;
    if(userAge >= 18){
        adultAge = `${userInfo.name} is an Adult`
    }else {
        adultAge = `${userInfo.name} is NOT an Adult`
    }
    return Promise.resolve(adultAge)
}

newUser
    .then(addNewUser)
    .then(res => {
    console.log('** User info received **')
    console.log(res)
})
*/

/* catch
const newUser = new Promise((resolve, reject) =>{
    setTimeout(() => {
        const userInfo ={
            name: 'Khalid',
            age: 11
        }
        resolve(userInfo)
    }, 3000)
})

const addNewUser = userInfo => {
    let userAge = userInfo.age
    let adultAge;
    if(userAge >= 18){
        adultAge = `${userInfo.name} is an Adult`
        return Promise.resolve(adultAge)
    }else {
        adultAge = `${userInfo.name} is NOT an Adult`
        return Promise.reject(new Error(adultAge))
    }
    
}

newUser
    .then(addNewUser)
    .then(res => {
    console.log('** User info received **')
    console.log(res)
})
.catch(err => {
    console.log(err.message)
})
*/




