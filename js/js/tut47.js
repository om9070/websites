console.log("this is tut47");

let regex = /harry/;
//lets look into some metacharacter sybol
regex = /^harr/; //^mean expression will match if string start string with
regex = /ry$/; //$ at the end of string  mean "string end with "
regex = /h.rry/; //match any one character
regex = /h*rry/; //match any 0 or more character
regex = /ha?rryi?/; //? after character mean that characters is optional
regex = /h\*rry/; //its show same character


let str = "harry ";
let result = regex.exec(str);
console.log(result);


if (regex.test(str)) {
    console.log(`the string ${str}matches the  expression ${regex.source}`);
} else {
    console.log(`the string ${str} does not matches the  expression ${regex.source}`);

}