function findAccountById(accounts, id) {
  //return the acount object that has the matching ID 
  const acctFound = accounts.find((account)=>account.id===id);
  return acctFound
  }
  
  function sortAccountsByLastName(accounts) {
  //returns accounts array objects sorted by lastname 
  const lastnameSort= accounts.sort((accountA, accountB)=>(accountA.name.last>accountB.name.last ? 1:-1))
  return lastnameSort
  }
  
  function getTotalNumberOfBorrows(account, books) {
   //returns total # of times the account ID appears in the book.borrows array 
  let totalBorrowed = 0
    const acctID = account.id
    books.forEach((book)=>{
      book.borrows.forEach((borrow)=>{
        if (borrow.id ===acctID){
          totalBorrowed=totalBorrowed + 1 }
      })
    })
    return totalBorrowed
  }
  
  function getBooksPossessedByAccount(account, books, authors) {
  //returns an array of book objects, including author information, that represents all books _currently checked out_ by the given account
  const result = [];
    books.forEach((book) =>{
      book.borrows.forEach((borrow) =>{
        if (!borrow.returned && borrow.id == account.id){
          book.author = authors.find((author) => author.id == book.authorId); 
          result.push(book)
        }
      })
    })
    return result
  } 
    
  module.exports = {
    findAccountById,
    sortAccountsByLastName,
    getTotalNumberOfBorrows,
    getBooksPossessedByAccount,
  };
  