

function isPalindrome(str){

    const normal = str.replace(/[^a-zA-Z0-9]/g, '').toLowercase();
   
    const reversed = normal.split('').reverse().join('');

    return normal===reversed;
}

console.log(isPalindrome*("A man"))
