function swapCase(str){
    let result=[];
    for (let i = 0; i < str.length; i++) {
        // If the character is uppercase, convert it to lowercase
        if (str[i] === str[i].toLowerCase()){
        result += str[i].toUpperCase();
        } else {
            result += str[i].toLowerCase();
        }
    }
    return result;
}
console.log(swapCase('The Quick Brown Fox'));