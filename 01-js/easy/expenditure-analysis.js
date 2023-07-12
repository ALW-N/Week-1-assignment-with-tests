/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var spend = {}
  for(var i = 0; i < transactions.length; i++){
    var t = transactions[i];
    if(spend[t.category]){
      spend[t.category] = spend[t.category] + t.price
    }else {
      spend[t.category] = t.price
    }

  }
  // return [];
  console.log(spend)
}

var transactions = [{ itemName: "Milk", category: "Diary", price: 35, timestamp:"12-oct-2023" },
{ itemName:"Cheese", category:"Diary", price:50 , timestamp: "12-oct-2023" },
{ itemName: "Noodles", category:"Food", price:15 , timestamp:"12-oct-2023" }
]

calculateTotalSpentByCategory(transactions)
module.exports = calculateTotalSpentByCategory;
