var user = {
    username: "Ali",
    password: "1234567",
};

var database = [
    {
    username: "Ali",
    password: "1234567",
},
 {
    username: "Ali2",
    password: "1234567",
},
 {
    username: "Ali3",
    password: "1234567",
}
];

var newsfeed = [{username: "Ali", timeline:"Learning javascript"},
{username: "Bob", timeline:"Hey it's chill out there"},
{username: "Alice", timeline:"Won't get tired of learning"},
];

var userNamePrompt = prompt("Please enter your username");
var userPasswordPrompt = prompt("Please enter your Password");

//first method
// function isUserValid(username,password){
//     for(var i = 0; i< database.length; i++){
//     if(database[i].username===username && database[i].password === password){
//         return true;
//     }
//     }
    
//     return false;
// }

// function checkUser(username,password){

//     if(isUserValid(username,password)){
//         console.log(newsfeed);
//     }else{
//         console.error("Incorrect username/passsword");

//     }

// }

// checkUser(userNamePrompt,userPasswordPrompt);


//second method 
 function isUserValid(uname,pw){
    for(var i =0; i < database.length; i++){
        if(database[i].username === uname && database[i].password === pw){
            return true;
        }
    }

    return false;

}

function checkIfUserExists(username,password){
    if(isUserValid(username,password)){
        console.log(newsfeed);
    }else{
        console.error("OOps");
    }

}
checkIfUserExists(userNamePrompt,userPasswordPrompt);


// var checkArray = [1,2,3,4,5];

// // for(var i = 0; i<checkArray.length;i++){
// //     console.log(i, checkArray[i]);
// // }

// function todoForEach(i,j){
//     console.log(i,j);
// }

// checkArray.forEach(todoForEach);