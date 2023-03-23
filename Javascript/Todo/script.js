var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var delt = document.getElementById("del");
var list = document.querySelectorAll("li");
var delettt = document.querySelectorAll("li button");
var addeket = ul.querySelectorAll("li");

//mehtod to append delete to already li child
addeket.forEach(function (i) {
  if (i.hasChildNodes()) {
    i.appendChild(createDelButton());
  }
}); 

//function to delelete the entry
function deleteEntry() {
  var delettt = document.querySelectorAll("li button");
  delettt.forEach(function (i) {
    i.onclick = function (e) {
      this.parentElement.remove();
    };
  });
}

//to check the input length
function checkInputLenght() {
  return input.value.length;
}

//to create the delete button
function createDelButton() {
  var del = document.createElement("button");
  del.appendChild(document.createTextNode("delete"));
  del.setAttribute("id", "del");
  var span = document.createElement("span");
  span.appendChild(del);
  deleteEntry();

  return del;
}

//to create li elements on click or enter
function createLiElement() {
  var li = document.createElement("li");

  li.appendChild(document.createTextNode(input.value));
  li.appendChild(createDelButton());
  //li.append(createDelButton());
  li.classList.add("clickableli");
  ul.appendChild(li);
  input.value = "";

  deleteEntry();

  togglemode();
}

//to add item when the mouse is clicked

function addListAfterClick() {
  if (checkInputLenght() > 0) {
    createLiElement();
  }
}

//to add items to list after enter is presses

function addListAfterKeyPressed(event) {
  if (checkInputLenght() > 0 && event.which === 13) {
    createLiElement();
  }
}

//error to be solved below.

function togglemode() {
  var list = document.querySelectorAll("li");

  list.forEach(function (i) {
    // i.addEventListener("click",function(){
    // 	this.classList.toggle("done");
    // });
    i.onclick = function (e) {
      this.classList.toggle("done");
	  
    };
  });
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPressed);

//to call the method for already existing elements

togglemode();

//to call it once the class is loaded to delete the last child

deleteEntry();
