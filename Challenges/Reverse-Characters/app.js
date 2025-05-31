function ReverseCharacters(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(ReverseCharacters("javascript"));   // Output: "tpircsavaj"
console.log(ReverseCharacters("elyts"));        // Output: "style"
console.log(ReverseCharacters("nadroj"));       // Output: "jordan"
console.log(ReverseCharacters("abc564"));       // Output: "465cba"
