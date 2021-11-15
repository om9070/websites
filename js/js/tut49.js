console.log("this is tut49");
//character classes
// let regex = /\war/; //word one character -_ ,alphabet or numbers
// let regex = /\w+d1r/; //w+ means one or more word characters
// let regex = /\Wbhai/; //non word character(use capital w)
// let regex = /\W+bhai/;//W+ means than one word character
// let regex = /\d999/;//\d mean digit any 
// let regex = /\D99/;//non digit
// let regex = /\D+99/; //non digit more than one
// let regex = /number \d+/; //\d mean more than one digit 
// let regex = /\ska number/; //matac whitespace character
// let regex = /\s+ka number/; //matac more than white space
// let regex = /\Ska number/; //matac non whitespace character
// let regex = /\S+ka number/; //matac non more than white space character
let regex = /1r4r\b/; //eord boundary


//assertion
regex = /h(?=y)/; //h after y avilavble
regex = /h(?!y)/; //h after not avilable y


str = "hyarh6rd1r4r $#&%bhai harryka number 4999 pyo99999";


let result = regex.exec(str);
console.log("the result from exec is ", result);

if (regex.test(str)) {
    console.log(`the string ${str}matches the  expression ${regex.source}`);
} else {
    console.log(`the string ${str} does not matches the  expression ${regex.source}`);

}