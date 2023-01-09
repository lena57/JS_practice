//Надо посчитать, сколько каждый покупатель потратил денюжки
// и сколько (кол-во) товаров он купил
 const receipts = [
  {

    OrderId: 1,
    CustomerId: 1,
    CustomerName: "Elizabeth",
    Total: "$30.00",
    Date: "2021-02-01 08:30:00.000",
    Items: [
      {
        Item: "Candle",
        ItemPrice: "$3.00",
        Quantity: "3"
      },
      {
        Item: "Book",
        ItemPrice: "$15.00",
        Quantity: "1"
      },
      {
        Item: "Pen",
        ItemPrice: "$0.75",
        Quantity: "1"
      },
      {
        Item: "Paper",
        ItemPrice: "$5.25",
        Quantity: "1"
      }
    ]
  },
  {

    OrderId: 2,
    CustomerId: 2,
    CustomerName: "Alexander",
    Total: "$52.50",
    Date: "2021-02-02 10:00:00.000",
    Items: [
      {
        Item: "Book",
        ItemPrice: "$15.00",
        Quantity: "1"
      },
      {
        Item: "Jar",
        ItemPrice: "$12.50",
        Quantity: "3"
      }
    ]
  },
  {

    OrderId: 3,
    CustomerId: 1,
    CustomerName: "Elizabeth",
    Total: "$6.00",
    Date: "2021-02-02 12:46:00.000",
    Items: [
      {
        Item: "Pen",
        ItemPrice: "$0.75",
        Quantity: "1"
      },
      {
        Item: "Paper",
        ItemPrice: "$5.25",
        Quantity: "1"
      }
    ]
  },
  {

    OrderId: 4,
    CustomerId: 3,
    CustomerName: "Emira",
    Total: "$30.50",
    Date: "2021-02-03 15:25:00.000",
    Items: [
      {
        Item: "Candle",
        ItemPrice: "$3.00",
        Quantity: "1"
      },
      {
        Item: "Book",
        ItemPrice: "$15.00",
        Quantity: "1"
      },
      {
        Item: "Jar",
        ItemPrice: "$12.50",
        Quantity: "1"
      }
    ]
  },
  {

    OrderId: 5,
    CustomerId: 4,
    CustomerName: "LJ",
    Total: "$36.00",
    Date: "2021-02-04 18:50:00.000",
    Items: [
      {
        Item: "Pen",
        ItemPrice: "$0.75",
        Quantity: "1"
      },
      {
        Item: "Book",
        ItemPrice: "$15.00",
        Quantity: "2"
      },
      {
        Item: "Paper",
        ItemPrice: "$5.25",
        Quantity: "1"
      }
    ]
  },
  {

    OrderId: 6,
    CustomerId: 5,
    CustomerName: "Armand",
    Total: "$52.50",
    Date: "2021-02-04 08:05:00.000",
    Items: [
      {
        Item: "Book",
        ItemPrice: "$15.00",
        Quantity: "1"
      },
      {
        Item: "Jar",
        ItemPrice: "$12.50",
        Quantity: "3"
      }
    ]
  },
  {

    OrderId: 7,
    CustomerId: 6,
    CustomerName: "Beth",
    Total: "$30.50",
    Date: "2021-02-06 17:30:00.000",
    Items: [
      {
        Item: "Movie",
        ItemPrice: "$18.00",
        Quantity: "1"
      },
      {
        Item: "Jar",
        ItemPrice: "$12.50",
        Quantity: "1"
      }
    ]
  },
  {

    OrderId: 8,
    CustomerId: 3,
    CustomerName: "Emira",
    Total: "$18",
    Date: "2021-02-08 16:30:00.000",
    Items: [
      {
        Item: "Movie",
        ItemPrice: "$18.00",
        Quantity: "1"
      }
    ]
  }
]

//count the total amount of money spent by //each customer
const countTotal = (arr) => {
  let result = {};
  arr.forEach((item) => {
    if (result[item.CustomerId]) {
      result[item.CustomerId] += Number(item.Total.slice(1));
    } else {
      result[item.CustomerId] = Number(item.Total.slice(1));
    }
  });
  return result;
}
//console.log(countTotal(receipts));

//count the quantity of items for each //customerId
const countQuantity = (arr) => {
  let result = {};
  arr.forEach((item) => {

    if (result[item.CustomerId]) {
      result[item.CustomerId] += item.Items.reduce((acc, item) =>
        acc + Number(item.Quantity), 0);
    } else {
      result[item.CustomerId] = item.Items.reduce((sum, item) =>
        sum + Number(item.Quantity), 0);
      return result;
    }
  })
  return result;
}
//console.log(countQuantity(receipts));

//given an
const obj1 = {
name: '1',
lastName: "Asder"
}
const obj2 = {
name: '2',
city: "Bort"
}
// Return the first object with updated values from the second object object1 = {
// // name: '2',
// // lastName: "Asder"
// // }

function updateObj(obj1, obj2){
  for(let key in obj1){   //for obj we use loop for in
    if(obj2.hasOwnProperty(key)){
      obj1[key]=obj2[key]
    }
  }
  return obj1
}

console.log(updateObj(obj1, obj2))
