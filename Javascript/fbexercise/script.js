var user = {
    username: "Ali",
    password: "1234567",
};

var database = [
    user
];

var newsfeed = [{username: "Ali", timeline:"Learning javascript"},
{username: "Bob", timeline:"Hey it's chill out there"},
{username: "Alice", timeline:"Won't get tired of learning"},
];

var userNamePrompt = prompt("Please enter your username");
var userPasswordPrompt = prompt("Please enter your Password");

function checkUser(username,password){

    if(username === database[0].username && password === database[0].password){
        console.log(newsfeed);
    }else{
        console.error("Incorrect username/passsword");

    }

}

checkUser(userNamePrompt,userPasswordPrompt);