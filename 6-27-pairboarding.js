// Write a method, digitalRoot(num). It should sum the digits of a positive integer.
// If it is greater than or equal to 10, sum the digits of the resulting number.
// Keep repeating until there is only one digit in the result, called the "digital root".
// Do not use string conversion within your method.



// 2136 => 2 + 1 + 3 + 6 => 12

// function digitalRoot(num) {
//   while (num > 10) {
//       num = digitalRootStep(num); // 1235, 11, 2
//     }
    
//     return num; //2
// }

// function digitalRootStep(num) {
//     let root = 0;
    
//     while (num > 0) {
//         //1235, 11

//       root += num % 10; //5, 3 => 8, 2 => 10, 1 => 11
//         //1, 1 => 2
//       console.log('root', root);
//       num = Math.floor(num/10); // 123, 12, 1, 0
//         //1, 0
//       console.log('num', num);
//     }
    
//     return root; //11
//         //2
// }




// console.log(digitalRoot(1235)); //=> 11 => 2

// console.log(digitalRoot(135)); //=> 9
// console.log(digitalRoot(5)); //=> 5




// Write a function that takes a message and an increment amount and outputs the same
// letters shifted by that amount in the alphabet. Assume lowercase and no punctuation. Preserve spaces.

// a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z
// 3

// hello, 2 => jgnnq

function caesarCipher(string, incr) {

    // create an array with the alphabet
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    // create a new empty string
    let output = '';

    // have a for loop to iterate over the input string characters
    for (let i = 0; i < string.length; i++) {   
        if (string[i] === ' ') {
            output += ' ';
        }
        else {

            // find the index of that character in the input array
            const oldChar = alphabet.indexOf(string[i]);
            // console.log('oldChar', oldChar);
            
            // add the increment to the index of current character to grab the output character
            let newChar = oldChar + incr;
            
            newChar = newChar % 26;
            
            // add that character to the output string
            output += alphabet[newChar];
        }

    }
    
    //return newly created string
    return output;
    
}


console.log(caesarCipher('hello', 2));
console.log(caesarCipher("zebra", 2));
console.log(caesarCipher("hello", 100));
console.log(caesarCipher("he llo", 26));
console.log(caesarCipher("", 26));
console.log(caesarCipher("hello welcome to career quest", 53));
// console.log(caesarCipher("zebra?", 2)); // => bgdtcb