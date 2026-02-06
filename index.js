// let country = ["Pakistani","Italian","Japanese"]
// let order = prompt("Which Country Food Do You Like To Eat? (Pakistani/Italian/Japanese) ").toLowerCase()
// let price = 0
// let food;

// if (order === "pakistani") {
//     food = prompt("Which Food Do You Like To Eat We Have (Biryani/Ande Wala Burger)").toLowerCase()
    
//     if (food === "biryani") {
//         let type = prompt("Which Biryani Do You Like To Eat We Have (Chicken/Beef)").toLowerCase()
//         let quantity = prompt("Order (Small/Medium/Large)").toLowerCase()
        
//         if (type === "chicken") {
//             if (quantity === "small") price = 300
//             else if (quantity === "medium") price = 500
//             else if (quantity === "large") price = 1000
//         }
//         if (type === "beef") {
//             if (quantity === "small") price = 500
//             else if (quantity === "medium") price = 800
//             else if (quantity === "large") price = 1800
//         }
//     }

//     if (food === "ande wala burger") {
//         price = 100
//     }
// }



// else if (order === "italian") {
//     food = prompt("Which Food Do You Like To Eat? (Caprese Salad/Pasta)").toLowerCase();

//     if (food === "pasta") { 
//         let type = prompt("Today We Only Have Ravioli Pasta. Do You Want To Eat? (Yes/No)").toLowerCase();
//         if (type === "yes") {
//             let quantity = prompt("Order Size? (Small/Medium/Large)").toLowerCase();
//             if (quantity === "small") price = 800
//             else if (quantity === "medium") price = 1200
//             else if (quantity === "large") price = 2000
//         }
//     } 
//     else if (food === "caprese salad") { 
//         price = 500
//     }
// }

// else if (order === "japanese") {
//     food = prompt("In Japanese dishes, we only have Sushi. Would You Like To Eat? (yes/no)").toLowerCase()

//     if (food === "yes") { 
//         let quantity = prompt("Tell us the Quantity (small/medium/large)").toLowerCase()

//         if (quantity === "small") price = 500
//         else if (quantity === "medium") price = 1000
//         else if (quantity === "large") price = 2000
//     } 
//     else if (food === "no") { 
//         price = 0
//     }
// let payment = prompt("How Would You Prefer To Make The Payment (Cash/Card)").toLowerCase()
//   if (payment === "cash") {
//     let support = prompt("We Support Currently We Only Support Meezan Bank And Faysal Bank Cards (Meezan/Faysal)")
//     console.log("Payment Via "(support + "Card"));
    
//   }
// }


// else{
//     alert("SomeThing Is Wrong")
  
// }

// let payment = prompt("How Would You Prefer To Make The Payment (Cash/Card)").toLowerCase()
//   if (payment === "card") {
//     let support = prompt("We Support Currently We Only Support Meezan Bank And Faysal Bank Cards (Meezan/Faysal)")
// console.log("Payment Via "+ (support)+  "Card"); 
// }

// console.log(payment + ("Payment"));

// console.log(order);
// console.log(food);
// console.log(price);
// console.log(type);
// console.log(quantity);







let country = ["Pakistani","Italian","Japanese"]
let order = prompt("Which Country Food Do You Like To Eat? (Pakistani/Italian/Japanese) ").toLowerCase()
let price = 0
let food;
let type;       // declare outside so it can be used later
let quantity;   // declare outside so it can be used later

if (order === "pakistani") {
    food = prompt("Which Food Do You Like To Eat We Have (Biryani/Ande Wala Burger)").toLowerCase()
    
    if (food === "biryani") {
        type = prompt("Which Biryani Do You Like To Eat We Have (Chicken/Beef)").toLowerCase()
        quantity = prompt("Order (Small/Medium/Large)").toLowerCase()
        
        if (type === "chicken") {
            if (quantity === "small") price = 300
            else if (quantity === "medium") price = 500
            else if (quantity === "large") price = 1000
        }
        if (type === "beef") {
            if (quantity === "small") price = 500
            else if (quantity === "medium") price = 800
            else if (quantity === "large") price = 1800
        }
    }

    if (food === "ande wala burger") {
        price = 100
    }
}



else if (order === "italian") {
    food = prompt("Which Food Do You Like To Eat? (Caprese Salad/Pasta)").toLowerCase();

    if (food === "pasta") { 
        type = prompt("Today We Only Have Ravioli Pasta. Do You Want To Eat? (Yes/No)").toLowerCase();
        if (type === "yes") {
            quantity = prompt("Order Size? (Small/Medium/Large)").toLowerCase();
            if (quantity === "small") price = 800
            else if (quantity === "medium") price = 1200
            else if (quantity === "large") price = 2000
        }
    } 
    else if (food === "caprese salad") { 
        price = 500
    }
}

else if (order === "japanese") {
    food = prompt("In Japanese dishes, we only have Sushi. Would You Like To Eat? (yes/no)").toLowerCase()

    if (food === "yes") { 
        quantity = prompt("Tell us the Quantity (small/medium/large)").toLowerCase()

        if (quantity === "small") price = 500
        else if (quantity === "medium") price = 1000
        else if (quantity === "large") price = 2000
    } 
    else if (food === "no") { 
        price = 0
    }
}

else{
    alert("SomeThing Is Wrong")
}

// Payment process
let payment = prompt("How Would You Prefer To Make The Payment (Cash/Card)").toLowerCase()
let support = "";
if (payment === "card") {
    support = prompt("We Support Currently We Only Support Meezan Bank And Faysal Bank Cards (Meezan/Faysal)")
    console.log("Payment Via "+ support + " Card"); 
} else if(payment === "cash") {
    console.log("Payment: Cash");
}

// Print all to console (original)
console.log(payment + " Payment");
console.log(order);
console.log(food);
console.log(price);
console.log(type);
console.log(quantity);

// --- PRINT TO PAGE ---
document.write("Payment: " + (payment === "card" ? "Via " + support + " Card" : "Cash") + "<br>");
document.write("Order: " + order + "<br>");
document.write("Food: " + food + "<br>");
document.write("Price: " + price + "<br>");
document.write("Type: " + type + "<br>");
document.write("Quantity: " + quantity + "<br>");
