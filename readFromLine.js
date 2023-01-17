// const readline=require('readline');
// const rl=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// rl.question('Plz enter your name',(name)=>{
//     console.log(`Hello ${name}`);
//     rl.close();
// })
const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("Enter Your Name",(name)=>{
    console.log("Hello"+ name);
    rl.close()
})
