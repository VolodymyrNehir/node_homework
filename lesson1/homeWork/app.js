const path = require("path");
const fs = require("fs");

//
// fs.mkdir(path.join(__dirname, "main", "online"), {recursive: true}, ((err => {
//     if (err) {
//         console.log(err);
//         throw err
//     }
//     onlineUser.forEach(users => {
//         for (let user in users) {
//             fs.appendFile(path.join(__dirname, "main", "online", `${users.name}.txt`), `\n${user}:${users[user]}`, (err) => {
//                 if (err) {
//                     console.log(err);
//                     throw err
//                 }
//
//             });
//         }
//     });
// })));
// fs.mkdir(path.join(__dirname, "main", "inPersons"), {recursive: true},((err) => {
//     if (err) {
//         console.log(err);
//         throw err
//     }
//     inPersonsUser.forEach(users => {
//         for (let user in users) {
//             fs.appendFile(path.join(__dirname, "main", "inPersons", `${users.name}.txt`), `\n${user}:${users[user]}`, (err) => {
//                 if (err) {
//                     console.log(err);
//                     throw err
//                 }
//
//             });
//         }
//     });
// }));
// create directory


let onlineUser = [{name: "Andrii", age: 22, city: "Lviv"}];
let inPersonsUser = [{name: "Oleg", age: 24, city: "Lviv"}];
// create users


const substitute = () => {
    fs.readdir(path.join(__dirname, "main", "online"), (err,item ) => {
       for (const data1 of item) {


           if (err) {
               console.log(err);
               throw err
           }

           fs.readdir(path.join(__dirname, "main", "inPersons"), (err, item2) => {
               for (const data2 of item2) {


                   if (err) {
                       console.log(err);
                       throw err
                   }

                   fs.appendFile(path.join(__dirname, "main", "online"), data2, {flag: "w"}, (err) => {
                       if (err) {
                           console.log(err);
                           throw err
                       }

                       fs.appendFile(path.join(__dirname, "main", "inPersons"), data1, {flag: "w"}, (err) => {
                           if (err) {
                               console.log(err);
                               throw err
                           }

                       });
                   });

               }
           });
       }
    });
};
substitute();



