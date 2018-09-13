
// for(let i = 1; i <= 20; i++){
// console.log(i);
// }

// for(let i = 0; i <= 200; i++){
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }


// EXCITED KITTEN

// const randomCat = ["...human...why you taking pictures of me?...", "...the catnip made me do it...",  "...why does the red dot always get away..."]
// let randomPhrase = Math.floor(Math.random() * randomCat.length);

// for(let i = 1; i <= 20; i++){
//     if (i % 2 === 0){ 
//     console.log(randomCat[randomPhrase]);
//     } else {
//     console.log("Love me, pet me! HSSSSSS!"); 
// }
// }

// FIZZBUZZ

// for (let i = 1; i <= 100; i++){
//     if(i % 3 === 0 && i % 5 !== 0){
//     console.log('Fizz');
//     } else if 
//     (i % 5 === 0 && i % 3 !== 0){
//     console.log('Buzz');    
//     } else if
//     (i % 3 === 0 && i % 5 === 0){
//     console.log('FizzBuzz');
//     } else {
//     console.log(i);
//     }
// }


// GETTING TO KNOW YOU

// const shahzad = ["Shahzad", 1000, "Austin"];
// const jim = ["Jim", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
// const daniel = ["Daniel", 186, "Dallas"];
// const ryan = ["Ryan", 65, "Denver"];

// // 1.
// shahzad.splice(0, 1, "Gameboy");
// console.log(shahzad);

// // 2. 
// daniel.splice(1, 1, daniel[1] + 1);
// console.log(daniel);

// // 3.
// ryan.splice(2, 1, "Gotham");
// console.log(ryan);

// // 4.
// reuben.pop()
// reuben.push("Chicago");
// console.log(reuben);

// // 5.
// jim.pop();
// jim.push("Albequerque", "Tuscon", "Salt Lake City");
// console.log(jim);

// // 6.
// jim.splice(2, 1)
// console.log(jim);


// YELL AT NINJA TURTLES

let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
let TMNT = [];
    for (i = 0; i <= ninjaTurtles.length; i++){
        ninjaTurtles[0] = ninjaTurtles[0].toUpperCase();
        ninjaTurtles[1] = ninjaTurtles[1].toUpperCase();
        ninjaTurtles[2] = ninjaTurtles[2].toUpperCase();
        ninjaTurtles[3] = ninjaTurtles[3].toUpperCase();
        console.log(ninjaTurtles);
}