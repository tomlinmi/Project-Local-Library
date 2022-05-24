function getTotalBooksCount(books) {
  let count = 0
  books.forEach((book)=>{
    count = count+1})
    return count
  }
  
  function getTotalAccountsCount(accounts) {
    let count = 0
    accounts.forEach((account)=>{
      count = count+1})
    return count
  }
  
  function getBooksBorrowedCount(books) {
    //returns a _number_ that represents the number of books _that are currently checked out of the library._ This number can be found by looking at the first transaction object in the `borrows` array of each book. If the transaction says the book has not been returned (i.e. `returned: false`), the book is currently being borrowed.
    const borrowedBooks = []
    books.forEach((book)=>{
      const borrowed = book.borrows;
      if(!borrowed[0].returned){
        borrowedBooks.push(book)}  
    })
   return borrowedBooks.length  
  }
  
  
  //helper function for genrecount, augument genreArray created inside of getMostCommonGenres function
  
  function genrecount(genreArray,currentgenre){
    let result = {};
    const filteredGenres = genreArray.filter((genre) => genre === currentgenre);
    const totalGenreCount = filteredGenres.length;
    result.name = currentgenre;
    result.count = totalGenreCount;
    return result;
  }
  function getMostCommonGenres(books) {
    //returns an array containing five objects or fewer that represents the most common occurring genres, ordered from most common to least
    const result = []
    //create an array of all the genre using map method
    const genreArray=books.map((book)=>book.genre);
    const genreObject=books.map((book)=>genrecount(genreArray,book.genre));
    console.log(genreObject)
     for (let i = 0; i < genreObject.length; i++) {
      if (result.includes(genreObject[i]) === false && result.length < 5) {
       result.push(genreObject[i]);
      }
    }
    result.sort((objA, objB) => objB.count - objA.count);
    return result
  }
  
  
  function getMostPopularBooks(books) {
   //loop through 'books'; create new objects with 'name' and 'count' keys, and push them onto an empty array. 
  //reducer
  
  const result = books.reduce((popularBooks, book) => {popularBooks.push({ name: book.title, count: book.borrows.length}); return popularBooks },[]);
    
  result.sort((objA, objB) => objB.count - objA.count);
  return result.slice(0,5)
  }                              
                                                               
  function getMostPopularAuthors(books, authors) {
  // returns an array containing five objects or fewer that represents the most popular authors whose books have been checked out the most. Popular is finding all books written by the author and adding up the # of times those books have been borrowed
    //nested functions into the body of the reducer method.
  const result = authors.reduce((popularAuthors, author)=>{ const fullName = `${author.name.first} ${author.name.last}`; const booksByAuthor = books.filter(book=>book.authorId===author.id); const totalBorrows = booksByAuthor.reduce((accum, book) => accum + book.borrows.length, 0); popularAuthors.push({name:fullName, count:totalBorrows}); return popularAuthors;},[]);
    result.sort((objA, objB) => objB.count - objA.count);
    return result.slice(0,5)
  }
  
  module.exports = {
    getTotalBooksCount,
    getTotalAccountsCount,
    getBooksBorrowedCount,
    getMostCommonGenres,
    getMostPopularBooks,
    getMostPopularAuthors,
  };
  