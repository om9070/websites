console.log("this is toturial 32-solution");
//create a class libary and implement the folloeing
//constructer must take the book list as an argument
//getbooklist
//issu book
//return book(book name)

class libary {
    constructor(booklist) {
        this.booklist = booklist;
        this.issuedbook = {};
    }
    getbooklist() {
        this.booklist.forEach(element => {
            console.log(element);
        });
    }
    issuebook(bookname, user) {
        if (this.issuedbook[bookname] == undefined) {

            this.issuedbook[bookname] = user;
        } else {
            console.log("this book already taken");
        }
    }
    returnbook(bookname) {
        delete this.issuebook[bookname];
    }
}

harry = new libary(['ram', 'shyam', 'bhajan']);
harry.issuebook('ram', 'op');
harry.issuebook('ram', 'op');
harry.returnbook('ram');
console.log(harry.returnbook());