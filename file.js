const fs = require('fs');
// syncronus returns data
// a-syncronus is a void function

// After syncronus, asynchonus data executes


fs.writeFileSync('./text.txt', 'Hey There Amresh');

// console.log(fs.readFile('./text.txt', 'utf-8'));

// fs.copyFileSync('./text.txt', './copy.txt');

// // deletes the file
// fs.unlinkSync('./copy.txt')

fs.appendFileSync('./text.txt', `\nTodays Date: ${new Date().toUTCString()}`)

fs.readFileSync('./text.txt', 'utf-8', (error, result) => {
    if (error)
        console.log('Error :', error);
    else
        console.log(result);
})

console.log(fs.statSync('./text.txt'))