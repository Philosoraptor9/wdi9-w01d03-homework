
// for(let i = 1; i <= 20; i++){
// console.log(i);
// }

// for(let i = 0; i <= 200; i++){
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }


EXCITED KITTEN

const randomCat = ["...human...why you taking pictures of me?...", "...the catnip made me do it...",  "...why does the red dot always get away..."]

for(let i = 1; i <= 20; i++){
    if (i % 2 === 0){ 
    let randomPhrase = Math.floor(Math.random() * randomCat.length);
    console.log(randomCat[randomPhrase]);
    } else {
    console.log("Love me, pet me! HSSSSSS!"); 
}
}

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
    for (i = 0; i < ninjaTurtles.length; i++){
        ninjaTurtles[i] = ninjaTurtles[i].toUpperCase();
        console.log(ninjaTurtles[i]);
}

// RETURN OF THE CLOSETS

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];

//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

//  // Alien attire
//   let kristynsShoe = kristynsCloset[0];
//   kristynsCloset.splice(0, 1)
//   console.log(kristynsShoe);
//   thomsCloset.push(kristynsShoe);
//   console.log(thomsCloset);

// // Dress 'em up
// let kristynsOutfit = Math.floor(Math.random() * kristynsCloset.length); 
// let random = kristynsOutfit[kristynsCloset];

// console.log(random);
// console.log(kristynsOutfit);

// // Dirty laundry
// for (i = 0; i <= kristynsCloset.length; i++){
//     console.log("WHIRR: Now washing " + kristynsCloset[i]);
// }

// // Inventory
// for (i = 0; i <= thomsCloset.length; i++){
//     console.log(thomsCloset[i]);
// }


// // MULTIPLES OF 3 AND 5

// let total = 0;

// for(i = 0; i < 1000; i++) {
//   if(i % 3 == 0 || i % 5 == 0) {
//     total += i;
//   }
// }
// console.log(total);
