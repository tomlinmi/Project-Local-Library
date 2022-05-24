function findAuthorById(authors, id) {
  //returns the author object that has the matching ID.
  const author =authors.find((author)=>author.id === id);
  return author; 
 
 
}

function findBookById(books, id) {
   //returns the book object that has the matching ID
  const book = books.find((book)=>book.id ===id);
  return book;
}

function partitionBooksByBorrowedStatus(books) {
 //returns an array with two arrays inside of it. All of the inputted books are present in either the first or second array.
 //maintain 2 arrays, 1 for books returned the other for books not returned. run test with if statement and push results to the 2 arrays.  
const result = []
const returnedBooks = []
const notReturnedBooks =[]

books.forEach((book)=>{
 const borrowed = book.borrows
 //check returned status in array
 if(!borrowed[0].returned){
   notReturnedBooks.push(book)}
 else{
   returnedBooks.push(book)}
 result.push(notReturnedBooks)
 result.push(returnedBooks)
})
 return result;
}

function getBorrowersForBook(book, accounts) {
//return an array of ten or fewer account objects that represents the accounts given by the IDs in the provided book's `borrows` array. However, each account object should include the `returned` entry from the corresponding transaction object in the `borrows` array.
  
const result = [];
//iterate accounts and book.borrows to match id
 accounts.forEach((account)=>{
   book.borrows.forEach((borrow)=>{
     if(borrow.id == account.id){
//spread statement of iterable object to pull in account and rest of book.borrow
       const allInfo ={
         ...account, ...borrow}
       result.push(allInfo)
     }
   })
 })
 return result.slice(0,10);
}

module.exports = {
 findAuthorById,
 findBookById,
 partitionBooksByBorrowedStatus,
 getBorrowersForBook,
};
