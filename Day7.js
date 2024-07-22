// let number1 = 100
// let number2 = 2
// let sum = number1 + number2
// console.log(number1, "+", number2, "=", number1 + number2)


// number1 = 50
// number2 = 50
// sum = number1 + number2
// console.log(number1, "+", number2, "=", number1 + number2)
// console.log("the sum of ", number1, " and", number2, "is", sum)

// number1 = 150
// number2 = 50
// sum = number1 + number2
// console.log(number1, "+", number2, "=", number1 + number2)
// console.log("the sum of ", number1, " and", number2, "is", sum)

// function calculateSum(){
//     let number1 = 100
//     let number2 = 2
//     let sum = number1 + number2
//     console.log(number1, "+", number2, "=", number1 + number2)

// }
// calculateSum()

// function double(input){
//     // console.log("2 *",input,"=",input*2)
//     console.log

// }
// double(2)
// double(4)
// double(8)

// function calculateSum(firstInput,secondInput){
//     // let number1 = 100
//     // let number2 = 2
//     let sum = firstInput + secondInput
//     console.log(`${secondInput}+${firstInput} = ${sum}`  )

// }
// calculateSum(100,2)
// calculateSum(4,5)
// calculateSum(10,5)

let fruitsData = [
    {
      name: "kiwi",
      scientificName: "k-wrong-xyz",
      price: 100,
    },
    {
      name: "orange",
      scientificName: "k-xyz",
      price: 50,
    },
    {
      name: "apple",
      scientificName: "k-xyz",
      price: 50,
    },
  ]
  
  // console.log("the price of ",fruitsData[0].name, " is ", fruitsData[0].price)
  // console.log("the price of ", fruitsData[1].name, " is ", fruitsData[1].price)
  // console.log("the price of ", fruitsData[2].name, " is ", fruitsData[2].price)

// function fruitPrice(name,price){

//     console.log
// }


// function FruitPrices(fruits) {
//   for (let i = 0; i < fruits.length; i++) {
//       console.log("The price of", fruits[i].name, "is", fruits[i].price);
//   }
// }
// FruitPrices(fruitsData);

// function fruitPrice(fruits) {
//   console.log(`The price of ${fruits[0].name} is ${fruits[0].price}`);
//   console.log(`The price of ${fruits[1].name} is ${fruits[1].price}`);
//   console.log(`The price of ${fruits[2].name} is ${fruits[2].price}`);
// }
// fruitPrice(fruitsData);


// function fruitPrice(fruits) {
//   console.log(`The price of ${fruits.name} is ${fruits.price}`);
// }
// fruitPrice(fruits[0]);
// fruitPrice(fruits[1]);
// fruitPrice(fruits[2]);

function fruitPrice(fruits) {
  let{name,price}=fruits
  console.log(`The price of ${name} is ${price}`);
}
