let ali = "Sli";

const a = function () {
  let ab = "onew";
  if (ali === "Sli") {
    console.log("Yay");
    console.log(ab);
  }
};
a();

const ab = {
  name: "ALi",
  pw: "DOne",
};

//arrow function
const arrow = () => "ali";

//execircise 5

const newarray = [1, 2, 3];

const maprray = newarray.map((num) => {
  return num + 1;
});
const filterarray = newarray.filter((num) => {
  return num > 1;
});
const reducearray = newarray.reduce((acc, num) => {
  return acc + num;
}, 0);
console.log(
  `Map array ${maparray} filterarray is ${filterarray} reducearray is ${reducearray}`
);
const filterarray2 = array.filter((num) => {
        if(num.team==="red")
        {
            return num;
        }
        
    });

    const array = [
      {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"],
      },
      {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"],
      },
      {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"],
      },
      {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"],
      },
    ];

    const finalarray = array.map((num) => {
        num.items= num.items.map(item=>{
            return item+"!";
        });
        return num;
    });
    const answer = array.map((user) => {
      user.items = user.items.map((item) => {
        return item + "!";
      });
      return user;
    });
    console.log(answer);


    const double = [];

    const foreacharray = array.forEach((num)=>{
         return (num.username+"!");
    });
    console.log(double);

    class first{

         

       
         a = () => console.log("hello");
        
       

    }

    let keys = {
        a:'ali',
        b:'cde',
    }

    Object.keys(keys).forEach(key=>console.log(key,keys[key]));