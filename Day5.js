// let fruits = ["kiwi", "app", "orange"]
// console.log(fruits);
// console.log(fruits[1]);
// fruits[1] = "apple";
// console.log(fruits[1]);


// let fruit1={
//     name:"kiwi",
//     scientificName:"k-wrong-xyz",
//     price:{
//     Nepal:100,
//     us:1,
//     cad:2.5,
//     uk:0.8,
// }
// }

// console.log("before",fruit1.scientificName);
// fruit1.scientificName="k-right-xyz"
// console.log(fruit1.scientificName)

// fruit1={
//     name:"kiwi",
//     scientificName:"k-wrong-xyz",
//     prices:[
//         {

//         }
//     ]
// }



let backendResponse = {
    msg: "success",
    result: {
      total: 2,
      data: [
        {
          name: "kiwi",
          scientificName: "k-wrong-xyz",
          prices: [
            {
              country: "us",
              price: 1,
            },
            {
              country: "nepal",
              price: 1, 
            },
          ],
        },
        {
          name: "orange",
          scientificName: "k-xyz",
          prices: [
            {
              country: "us",
              price: 2,
            },
            {
              country: "nepal",
              price: 200,
            },
            {
              country: "cad",
              price: 200,
            },
          ],
        },
      ],
    },
  }

  backendResponse.result.data[0].prices[1].price=200;
  console.log(backendResponse);

  backendResponse.result.data[0].prices[2]={country:"Canada",price:120};
  console.log(backendResponse);

  // first_value=10;
  // second_value=20;
  // sum=first_value+second_value;
  // console.log($(first_value)+$(second_value)=sum);