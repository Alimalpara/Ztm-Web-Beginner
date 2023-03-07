// function sayHello(){
//     console.log("Hello");
// }
// sayHello();

// function bill(){
//     console.log("Say bye bye");

// }
// //bye();
// bill();

//exercise 5
// var age = Number(prompt("What is your age?")) ;

// function checkDriverAge(a){
//     if(a<18){
//         console.log("Sorry, you are too yound to drive this car. Powering off");
//     }else if(a===18){
//         console.log("Congratulations on your first year of driving. Enjoy the ride!");
//     }else if(a>18){
//          console.log("Powering On. Enjoy the ride!");
//     }
    
// }

// var checkDriverAge2 = function(a){
//      if(a<18){
//         console.log("function 2 Sorry, you are too yound to drive this car. Powering off");
//     }else if(a===18){
//         console.log("function 2 Congratulations on your first year of driving. Enjoy the ride!");
//     }else if(a>18){
//          console.log("function 2 Powering On. Enjoy the ride!");
//     }
// }

// function checkDriverAge3(){
//     var a = 109;
//     if(a<18){
//         console.log("3 Sorry, you are too yound to drive this car. Powering off");
//     }else if(a===18){
//         console.log("Congratulations on your first year of driving. Enjoy the ride!");
//     }else if(a>18){
//          console.log(" 3 Powering On. Enjoy the ride!");
//     }
    
// }

// checkDriverAge(age);
// checkDriverAge2(age);
// checkDriverAge3();

//Exercise 6 Arrrays

var array = ["Banana","Apples","Oranges","Blueberries"];

 var array2 = ["Banana", ["Apples",["test","test1"], ["Oranges"], "Blueberries"],"test"];

function printer(){
   array.shift();
   array.sort();
   array.push("Kiwi");
   array.shift();
   array.reverse();
   

   console.log(array);
   var second = array.slice(1,3);
   
   console.log(second);
   console.log(array);

   array.splice(0,1 ,"passionfruuit");
   array.splice(1,2,"firsts","second");
  
   console.log(array);


   console.log(array2[1][2][0]);

    console.log(array.slice(1,3))
    array.splice(1,2)
    console.log(array);
}
printer();
