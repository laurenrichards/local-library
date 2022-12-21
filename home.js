//takes in books array and returns the total number of books within the array
function getTotalBooksCount(books) {
  return books.length
}

//takes in accounts array and returns the total number of accounts within the array
function getTotalAccountsCount(accounts) {
  return accounts.length
}

//takes in the books array and returns the number of books currently checked out
function getBooksBorrowedCount(books) {
  let booksCO= books.filter((book) => 
    book.borrows.filter((result) => result.returned===false).length>0)
  return booksCO.length
}

//takes in books array and returns an array with 5 objects or less. It lists in order of most popular to least popular genres with a count of the number of times the genre occurs. 
  function getMostCommonGenres(books) {
 let map = {};
 books.forEach((num) => {
  if (map[num.genre]) {
   map[num.genre]++;
  } else {
   map[num.genre] = 1;
  }
 });
 return Object.entries(map)
  .map(([name, count]) => {
   return {
    name,
    count
   };
  })
  //this allows the list to go from most pop to least
  .sort((a, b) => (a.count < b.count ? 1 : -1))
  //this makes sure there are only 5 objects or less listed 
  .slice(0, 5);
}


//takes in books array and returns an array with 5 objects or less. It lists in order of most popular to least popular books within the library. It counts the number of times it has been checked out
function getMostPopularBooks(books) {
 return books
  .map((book) => {
   return { name: book.title, count: book.borrows.length };
  })
  //this allows the list to go from most popular to least
  .sort((a, b) => (a.count < b.count ? 1 : -1))
  //this makes sure there are only 5 objects or less listed 
  .slice(0, 5);
}

//takes in books and authors array and returns an array with 5 objects or less. It looks at the authors of the books that have been checked out the most and adds a count. Lists them in order of most pop to least pop
function getMostPopularAuthors(books, authors) {
 let result = [];
 authors.forEach((author) => {
  let authorOne = {
   name: `${author.name.first} ${author.name.last}`,
   count: 0
  };
  books.forEach((book) => {
   if (book.authorId === author.id) {
    authorOne.count += book.borrows.length;
   }
  });
  result.push(authorOne);
 });
  
 return result
  //this allows the list to go from most pop to least
  .sort((a, b) => (a.count < b.count ? 1 : -1))
  //this makes sure there are only 5 objects or less listed
 .slice(0, 5);
}



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};