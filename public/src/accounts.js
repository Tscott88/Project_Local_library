function findAccountById(accounts, id) {
  let account = accounts.find((account) => account.id === id);
    return account
}

function sortAccountsByLastName(accounts) {
  const account = accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
    return account
}

function getAccountFullNames(accounts) {
  let account = accounts.map((account) => `${account.name.first} ${account.name.last}`)
  return account
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
