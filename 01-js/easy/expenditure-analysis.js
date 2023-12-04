/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let categorywisetotalamount = {}
  transactions.forEach(transaction => {
    let {category,price}=transaction
    if(categorywisetotalamount[category]){
      categorywisetotalamount[category]+= price
    }else{
      categorywisetotalamount[category]=price
    }
  });

  console.log(Object.entries(categorywisetotalamount))

  let Output= Object.entries(categorywisetotalamount).map(([category,totalAmount])=>({"category":category,"totalSpent":totalAmount}))
  return Output
}

const Transaction = [
  {"itemname": "Laptop", "category": "electronics", "price": 1200, "timestamp": 17064567544},
  {"itemname": "Coffee Maker", "category": "appliances", "price": 50, "timestamp": 17064567545},
  {"itemname": "Gaming Console", "category": "electronics", "price": 300, "timestamp": 17064567547},
  {"itemname": "Desk Chair", "category": "furniture", "price": 150, "timestamp": 17064567548},
  {"itemname": "Headphones", "category": "electronics", "price": 100, "timestamp": 17064567549},
  {"itemname": "Microwave", "category": "appliances", "price": 80, "timestamp": 17064567555},
  {"itemname": "Smartwatch", "category": "wearables", "price": 200, "timestamp": 17064567551},
  {"itemname": "Desk Lamp", "category": "furniture", "price": 30, "timestamp": 17064567554},
  {"itemname": "Air Purifier", "category": "appliances", "price": 120, "timestamp": 17064567558},
  {"itemname": "Refrigerator", "category": "appliances", "price": 800, "timestamp": 17064567560},
  {"itemname": "TV", "category": "electronics", "price": 600, "timestamp": 17064567562},
  {"itemname": "Washing Machine", "category": "appliances", "price": 400, "timestamp": 17064567564},
  {"itemname": "Smart Thermostat", "category": "electronics", "price": 70, "timestamp": 17064567566},
  {"itemname": "Sofa", "category": "furniture", "price": 500, "timestamp": 17064567568},
  {"itemname": "Robot Vacuum", "category": "appliances", "price": 250, "timestamp": 17064567570}
]

calculateTotalSpentByCategory(Transaction)

module.exports = calculateTotalSpentByCategory;
