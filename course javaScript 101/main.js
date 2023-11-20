let inventory = [
    ["ID" , "Book Title" ,          "Author" ,              "Price" , "Quantity"],
    [1 ,    "Start with why" ,      "Simon Sinek" ,         80 ,        13],
    [2 ,    "But how do it know" ,  "J. Clark Scott" ,      59.9 ,      22],
    [3 ,    "Clean Code" ,          "Robert Cecil Martin" , 50 ,        5],
    [4 ,    "Zero to One" ,         "Peter Thiel" ,         45 ,        12],
    [5 ,    "You don't know JS" ,   "Kyle Simpson" ,        39.9 ,      9]
];


function findBook(search_type, value) {
    for (let i = 0; i < inventory.length; i++) {
      let book = inventory[i];
      switch (search_type) {
        case "id":
          if (book[0] === value) return book;
          break;
        case "title":
          if (book[1] === value) return book;
          break;
        case "author":
          if (book[2] === value) return book;
          break;
      }
    }
    return null;
  }

function sellBook(title, quantity, balance) {
  let book = findBook("title", title);

  if (book && book[4] >= quantity && balance >= quantity * book[3]) {
    book[4] -= quantity; 
    let totalCost = quantity * book[3];
    return `Successfully sold ${quantity} copies of ${title}. Total: ${totalCost}`;
  } else {
    return "Sale failed. Please check book availability, requested quantity, and customer balance.";
  }
}

console.log(findBook("id", 5));
console.log(sellBook("Clean Code", 3, 200));
console.log(inventory)