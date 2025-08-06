function uniqueLetter(string){
    for(i=0;i<string.length;i++)
    {
        let char=string[i];
        if(string.indexOf(char)===
    string.lastIndexOf(char)){
        return char;
    }
    }

    return null;

}

console.log(uniqueLetter("Hello"));
console.log(uniqueLetter("Swiss"));

