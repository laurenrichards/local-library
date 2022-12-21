//entering accounts array and finding matching account using inputted id
function findAccountById(accounts, id) {
  return accounts.find(account => {
    return account.id===id
  })
}

//take in accounts array and sort last name in alphabetical order 
function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) =>
  accountA.name.last.toLowerCase()> accountB.name.last.toLowerCase() ? 1: -1
)}

//takes in an account object and books array and gets total number of times specific account id has borrowed books
 function getTotalNumberOfBorrows(account, books) {
  let count = 0;
  books.forEach(book => {
    const borrowedById = borrowsById(book, account);
    count += borrowedById.length;
  });
  return count;
}

//takes in account object, books and authors array and it returns array of book objects that shows currently checked out books 
function getBooksPossessedByAccount(account, books, authors) {
 let result = [];
 let borrowMatch = [];
 books.forEach((item) => {
  const borrowed = item.borrows;
  const book = {
   id: item.id,
   title: item.title,
   genre: item.genre,
   authorId: item.authorId,
   author: {},
   borrows: {}
  };
  const { id, title, genre, authorId, author, borrows } = book;

  borrowed.forEach((borrow) => {
   if (borrow.id === account.id && borrow.returned === false) {
    result.push(book);
    borrowMatch.push(borrow);
    book.borrows = borrowMatch;
    book.author = authors.filter((auth) => auth.id === book.authorId)[0];
   }
  });
 });
 return result;
}


//helper function 
//looks up borrows of given books by account id's
function borrowsById (book, {id}) {
  return book.borrows.filter(borrow => borrow.id === id);
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};