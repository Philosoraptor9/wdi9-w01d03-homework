
// for(let i = 1; i <= 20; i++){
// console.log(i);
// }

// for(let i = 0; i <= 200; i++){
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }


// EXCITED KITTEN

const randomCat = ["...human...why you taking pictures of me?...", "...the catnip made me do it...",  "...why does the red dot always get away..."]
let randomPhrase = Math.floor(Math.random() * randomCat.length);

for(let i = 1; i <= 20; i++){
    if (i % 2 === 0){ 
    console.log(randomCat[randomPhrase]);
    } else {
    console.log("Love me, pet me! HSSSSSS!"); 
}
}



