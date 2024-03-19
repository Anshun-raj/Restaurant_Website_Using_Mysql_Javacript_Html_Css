var x = 0;
var y = 0;

function confirm() {
  if (x == 0) {
    x = 1;
    document.getElementById("btn").innerHTML = "Table Booked";
  } else {
    x = 0;
    document.getElementById("btn").innerHTML = "Book a Table";
  }
}

function showToggle() {
  if (y == 0) {
    y = 1;
    document.getElementById("txt").nextElementSibling.innerHTML =
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.A laborum Lorem ipsum,dolor sit amet consectetur adipisicing elit.Adipisci deleni tinecessitatibus quasi magni, cupiditate pariatur A laborum corporis eligendi nulla temporibus, illum veniam fugiat exercitationem debitis in consequuntur cum.. ";
    document.getElementById("btn2").innerHTML = "Read Less";
  } else {
    y = 0;
    document.getElementById("txt").nextElementSibling.innerHTML = "";
    document.getElementById("btn2").innerHTML = "Read More";
  }
}

let counter7 = 0;
let counter8 = 0;
let counter9 = 0;
function counter1() {
  counter7 = counter7 + 1;
  var a = document.getElementById("x");
  a.innerText = counter7;
}

function counter2() {
  counter7 = counter7 - 1;
  var a = document.getElementById("x");
  a.innerText = counter7;
  if (counter7 < 0) {
    counter7 = 0;
  }
}

function counter3() {
  counter8 = counter8 + 1;
  var a = document.getElementById("y");
  a.innerText = counter8;
}

function counter4() {
  counter8 = counter8 - 1;
  var a = document.getElementById("y");
  a.innerText = counter8;
  if (counter8 < 0) {
    counter8 = 0;
  }
}

function counter5() {
  counter9 = counter9 + 1;
  var a = document.getElementById("z");
  a.innerText = counter9;
}

function counter6() {
  counter9 = counter9 - 1;
  var a = document.getElementById("z");
  a.innerText = counter9;
  if (counter9 < 0) {
    counter9 = 0;
  }
}

let count1 = 0;
function Contact1() {
  if (count1 == 0) {
    count1 = 1;
    document.getElementById("btn4").innerText = "Connecting..";
    alert("Connecting Smith...");
  } else {
    count1 = 0;
    document.getElementById("btn4").innerText = "Connect Now";
  }
}

let count2 = 0;
function Contact2() {
  if (count2 == 0) {
    count2 = 1;
    document.getElementById("btn6").innerText = "Connecting..";
    alert("Connecting Claw...");
  } else {
    count2 = 0;
    document.getElementById("btn6").innerText = "Connect Now";
  }
}

let count3 = 0;
function Contact3() {
  if (count3 == 0) {
    count3 = 1;
    document.getElementById("btn7").innerText = "Connecting..";
    alert("Connecting Jolly...");
  } else {
    count3 = 0;
    document.getElementById("btn7").innerText = "Connect Now";
  }
}

function verifyPasswrd() {
  var nm = document.getElementById("nm").value;
  var ag = document.getElementById("ag").value;
  var num = document.getElementById("num").value;
  var em = document.getElementById("em").value;

  var nm1 = document.getElementById("nm");
  var ag2 = document.getElementById("ag");
  var num3 = document.getElementById("num");
  var em = document.getElementById("em");

  if (nm == "") {
    document.getElementById("msg1").innerHTML = "*name field is required";
    nm1.style.border = "1px solid red";
    return false;
  }
  if (nm.length < 3) {
    document.getElementById("msg1").innerHTML =
      "*name should be of atleast 3 character";
    nm1.style.border = "1px solid red";
    return false;
  }
  if (ag == "") {
    document.getElementById("msg2").innerHTML = "*age field is required";
    ag2.style.border = "1px solid red";
    return false;
  }

  if (em == "") {
    document.getElementById("msg4").innerHTML = "*email field is required";
    nm1.style.border = "1px solid red";
    return false;
  }

  if (em.length < 8) {
    document.getElementById("msg4").innerHTML =
      "*email field should be of atleast 8 char";
    nm1.style.border = "1px solid red";
    return false;
  }
  if (ag.length < 2) {
    document.getElementById("msg2").innerHTML =
      "*name should be greater than 18 and less than 100";
    ag2.style.border = "1px solid red";
    return false;
  }
  if (ag.length > 3) {
    document.getElementById("msg2").innerHTML =
      "*name should be less than 3 character";
    ag2.style.border = "1px solid red";
    return false;
  }

  if (num == "") {
    document.getElementById("msg3").innerHTML = "*number field is required";
    num3.style.border = "1px solid red";
    return false;
  }
  if (num.length < 10) {
    document.getElementById("msg3").innerHTML =
      "*number should be of 10 characters";
    num3.style.border = "1px solid red";
    return false;
  }
  if (num.length > 10) {
    document.getElementById("msg3").innerHTML =
      "*number should be of 10 characters only";
    num3.style.border = "1px solid red";
    return false;
  }
}

let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

let products = [
  {
    id: 1,
    name: "Chawmin",
    image: "3.jpeg",
    price: "300/-",
  },
  {
    id: 2,
    name: "Chicken Chilli",
    image: "2.jpeg",
    price: "350/-",
  },

  {
    id: 4,
    name: "Allu Dum",
    image: "1.jpeg",
    price: "150/-",
  },
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("card");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <img src="Image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button class="btn"  onclick="addToCard()">Add To Card</button>`;
    list.appendChild(newDiv);
  });
}
initApp();

let val = 0;

function addToCard() {
  if (val == 0) {
    val++;
    document.getElementById("quan").innerHTML = val;
  }
}
