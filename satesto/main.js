function calculateDifference(a, b) {
    return a - b;
  }
  
  let value1 = 15;
  let value2 = 5;
  
  let difference = calculateDifference(value1, value2);
  
  console.log("10:", difference);
  

  let input = document.getElementById("userInput");

input.addEventListener("change", function () {
  console.log(input.value);
});

// 2. button click
let button = document.getElementById("clickBtn");

button.addEventListener("click", function () {
  console.log("clicked");
});

// 3. კენტი რიცხვები
for (let i = 1; i <= 20; i++) {

  if (i % 2 !== 0) {
    console.log(i);
  }

}
// 4. temperature
let temperature = 35;

if (temperature > 30) {
  console.log("ტემპერატურა 30 გრადუსზე მეტია");
} else {
  console.log("ტემპერატურა 30 გრადუსზე ნაკლებია");
}

  
let names = [
    "gio",
    "mari",
    "salome",
    "luka",
    "dato",
    "anastasia",
    "irakli",
    "tamari",
    "saba",
    "giorgi",
    "nino"
  ];
  
  let shortNames = [];
  
  // 1
  for (let name of names) {
  
    if (name.length < 5) {
      shortNames.push(name);
    }
  
  }
  
  console.log(shortNames);
  
  // 2
  shortNames.unshift("nika");
  shortNames.push("ana");
  
  console.log(shortNames);
  
  // 3
  let numbers = [4, 11, 23, 8, 19, 2, 30, 14, 27];
  
  let evenNumbers = numbers.filter(function (num) {
    return num % 2 === 0;
  });
  
  console.log(evenNumbers);
  
  // 4
  let firstArray = [12, -3, 7, 0, 25];
  let secondArray = [5, 18, -1, 9, 2];
  
  let mergedArray = firstArray.concat(secondArray);
  
  mergedArray.sort(function (a, b) {
    return a - b;
  });
  
  for (let number of mergedArray) {
    console.log(number);
  }
  
  
  // =======================
  // დავალება 4
  // =======================
  
  // 1
  window.addEventListener("load", function () {
    console.log("Page loaded successfully");
  });
  
  // 2
  let count = 10;
  
  let timer = setInterval(function () {
  
    console.log(count);
  
    count--;
  
    if (count < 1) {
      clearInterval(timer);
    }
  
  }, 2000);
  
  // 3
  let city = "tbilisi";
  
  console.log(city.toUpperCase());
  
  // 4
  let currentDate = new Date();
  
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
  
  console.log(hours + ":" + minutes + ":" + seconds);
  
  let newDiv = document.createElement("div");

newDiv.id = "newDiv";
newDiv.textContent = "ეს არის ახალი div ელემენტი";

document.body.appendChild(newDiv);

// 2
let title = document.getElementById("title");

let firstBox = document.querySelector(".box");

let allBoxes = document.querySelectorAll(".box");

console.log(title);
console.log(firstBox);
console.log(allBoxes);

// 3
title.style.color = "blue";
title.style.fontSize = "40px";

firstBox.style.border = "3px solid red";

allBoxes.forEach(function (box) {
  box.style.backgroundColor = "lightgray";
});

// 4
firstBox.addEventListener("mouseover", function () {
  console.log("mouseover შესრულდა");
});

input.addEventListener("focus", function () {
  console.log("focus შესრულდა");
});

document.addEventListener("keydown", function () {
  console.log("keydown შესრულდა");
});

button.addEventListener("click", function () {
  alert("click შესრულდა");
});


// =======================
// დავალება 6
// =======================

// 1 POST request
fetch("https://jsonplaceholder.typicode.com/comments", {

  method: "POST",

  headers: {
    "Content-Type": "application/json"
  },

  body: JSON.stringify({
    name: "Gio",
    email: "gio@gmail.com",
    body: "Hello World"
  })

})
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log("POST პასუხი:", data);
});


// 2 GET request
fetch("https://jsonplaceholder.typicode.com/comments?_limit=3")

.then(function (response) {
  return response.json();
})

.then(function (data) {

  data.forEach(function (item) {

    console.log("Name:", item.name);
    console.log("Email:", item.email);
    console.log("Body:", item.body);

  });

});