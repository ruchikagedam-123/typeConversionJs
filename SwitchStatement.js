/*
Complete the getLetter(s) function in the editor. 
It has one parameter: a string, , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:
*/
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    letter = s.charAt(0);
    // Write your code here
    switch(letter){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
         return 'A';
         
         case 'b':
         case 'c':
         case 'd':
         case 'f':
         case 'g':
          return 'B';
          
         case 'h':
         case 'k':
         case 'l':
         case 'm':
         case 'j':
          return 'C';
          
         case 'n':
         case 'p':
         case 'q':
         case 'r':
         case 's':
         case 'v':
         case 'w':
         case 'x':
         case 'y':
         case 'z':
          return 'D'; 
    }
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}
