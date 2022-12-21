//takes in authors array and inputted id and returns the matching author to selected id
function findAuthorById(authors, id) {
  return authors.find((author) => author.id===id)
}

//takes in books array and inputted id and returns the matching book to selected id
function findBookById(books, id) {
  return books.find((book) => book.id===id)
}

//takes in an array of books and returns one array with 2 arrays inside: the first contains book objects that are currrently checked out and the second contains book objects that were returned 
function partitionBooksByBorrowedStatus(books) {
  let booksReturned= books.filter((book) => 
    book.borrows.every((borrow) => borrow.returned===true)
 );
    let booksBorrowed= books.filter((book) => 
    book.borrows.some((borrow) => borrow.returned===false)        )
    let array=[[...booksBorrowed], [...booksReturned]]
    return array
  }
         
//takes in book object and accounts array and returns an array with less than 10 account objects. It reads the borrow array within the books array. It lists <10 accounts that have checked out this particular book object
function getBorrowersForBook(book, accounts) {
  return book.borrows
  .map((borrow) => {
    let account= accounts.find((account) => account.id===borrow.id)
    return {...borrow, ...account}
  })
  .slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};