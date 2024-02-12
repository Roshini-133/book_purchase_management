"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stud = [
    {
        rollno: "22mx121",
        book: [
            {
                bookId: "111",
                title: "harrypotter",
                author: "william",
                genre: "adventure",
                quantity: 1,
                price: 100,
            },
            {
                bookId: "222",
                title: "lockie and key",
                author: "george",
                genre: "fantasy",
                quantity: 1,
                price: 250,
            },
            {
                bookId: "333",
                title: "Pride and Prejudice",
                author: "Jane Austen",
                genre: "romance",
                quantity: 2,
                price: 120,
            },
        ],
    },
    {
        rollno: "22mx126",
        book: [
            {
                bookId: "333",
                title: "barbie",
                author: "george",
                genre: "romance",
                quantity: 2,
                price: 250,
            },
            {
                bookId: "444",
                title: "delegate",
                author: "george",
                genre: "romance",
                quantity: 2,
                price: 250,
            },
            {
                bookId: "111",
                title: "harrypotter",
                author: "william",
                genre: "adventure",
                quantity: 3,
                price: 100,
            }
        ],
    },
];
//display all student's details
// const display = () => {
//   const str = JSON.stringify(stud);
//   console.log(str);
// };
// display();
//display a specific student details
// const get = (num: string) => {
//   for (const bb of stud) {
//     if (num === bb.rollno) {
//       console.log(bb.book);
//       break;
//     } else {
//       console.log("There is no such student with this specific rollno.");
//     }
//   }
// };
// const input = () => {
//   const userInput = require("readline-sync");
//   const rollno: string = userInput.question("Enter your rollno: ");
//   get(rollno);
// };
// input();
//display author specific book details
const books = [
    {
        bookId: "222",
        title: "lord of the rings",
        author: "J.R.R. Tolkien",
        genre: "fantasy",
        quantity: 5,
        price: 150,
    },
    {
        bookId: "333",
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "romance",
        quantity: 8,
        price: 120,
    },
    {
        bookId: "444",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "fiction",
        quantity: 4,
        price: 110,
    },
    {
        bookId: "555",
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "fiction",
        quantity: 6,
        price: 130,
    },
    {
        bookId: "555",
        title: "The Fault in Our Stars",
        author: "George",
        genre: "Romance",
        quantity: 4,
        price: 180,
    },
    {
        bookId: "666",
        title: "Paper Towns",
        author: "George",
        genre: "Young Adult",
        quantity: 3,
        price: 150,
    },
    {
        bookId: "777",
        title: "Looking for Alaska",
        author: "George",
        genre: "Young Adult",
        quantity: 2,
        price: 160,
    },
    {
        bookId: "111",
        title: "harrypotter",
        author: "william",
        genre: "adventure",
        quantity: 6,
        price: 100,
    }
];
// const get = (detail: Input) => {
//     for(const bb of book ){
//         if(bb.author === detail.author){
//             console.log(`The available book is ${bb.title} and the quantity is ${bb.quantity}`)
//         }
//     }
//   };
// const input_1 = () => {
//     const userInput = require("readline-sync");
//     const author: string = userInput.question("Enter the author name: ");
//     get({author});
//   };
//   input_1();
//Checking the availability of books after student purchase
// const availability = () =>{
//     stud.forEach(rollno : string = () =>{
//     })
// }
// const updateBookQuantity = (bookId: string, purchasedQuantity: number) => {
//     const book = book.find(book => book.bookId === bookId);
//     if (book) {
//       book.quantity -= purchasedQuantity;
//       console.log(`Book '${book.title}' updated quantity: ${book.quantity}`);
//     } else {
//       console.log(`Book with ID '${bookId}' not found.`);
//     }
//   };
//Checking the availability of books after student purchase
//   const updateBookQuantityForAllStudents = () => {
//     stud.forEach(student => {
//       student?.book?.forEach(book => {
//         for(const bb of books){
//             if(book.bookId === bb.bookId){
//                 bb.quantity = bb.quantity - book.quantity
//             }
//         }
//       });
//     });
//     for(const bb of books){
//     console.log(` Book : ${bb.title} Quantity : ${bb.quantity}`)
// }
//   };
//   updateBookQuantityForAllStudents();
//check the genre's written by all the author
const findAllGenreOfAuthor = () => {
    for (const bb of books) {
        const auth = bb.author;
        console.log(` Author : ${auth}\n Genre : `);
        for (const cc of books) {
            if (bb.author === cc.author) {
                console.log(`${cc.genre}`);
            }
        }
    }
};
findAllGenreOfAuthor();
