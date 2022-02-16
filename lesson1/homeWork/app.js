const path = require("path");
const fs = require("fs");


fs.mkdir(path.join(__dirname, "main", "online"), {recursive: true}, ((err => {
    if (err) {
        console.log(err);
        throw err
    }
    onlineUser.forEach(users=>{
        for (let user in users){
            fs.appendFile(path.join(__dirname,"main","online",`${users.name}.txt`),`\n${user}:${users[user]}`,(err)=>{
                if (err){
                    console.log(err);
                    throw err
                }

            })
        }
    })
})));
fs.mkdir(path.join(__dirname, "main", "inPersons"), ((err) => {
    if (err) {
        console.log(err);
        throw err
    }
    inPersonsUser.forEach(users=>{
        for (let user in users){
            fs.appendFile(path.join(__dirname,"main","inPersons",`${users.name}.txt`),`\n${user}:${users[user]}`,(err)=>{
                if (err){
                    console.log(err);
                    throw err
                }

            })
        }
    })
}))
// create directory


let onlineUser = [{name: "Andrii", age: 22, city: "Lviv"}];
let inPersonsUser = [{name: "Oleg", age: 24, city: "Lviv"}];
// create users




// const substitute = () => {
//     fs.readFile(path.join(__dirname, "main", "online", "Andrii.txt"), (err, data1) => {
//         if (err) {
//             console.log(err);
//             throw err
//         }
//
//         fs.readFile(path.join(__dirname, "main", "inPersons", "Oleg.txt"), (err, data2) => {
//             if (err) {
//                 console.log(err);
//                 throw err
//             }
//
//             fs.appendFile(path.join(__dirname, "main", "online", "Andrii.txt"), data2, {flag: "w"}, (err) => {
//                 if (err) {
//                     console.log(err);
//                     throw err
//                 }
//
//                 fs.appendFile(path.join(__dirname, "main", "inPersons", "Oleg.txt"), data1, {flag: "w"}, (err) => {
//                     if (err) {
//                         console.log(err);
//                         throw err
//                     }
//
//                 });
//             });
//         });
//     });
// };
// substitute();



