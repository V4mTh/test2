const balance = document.getElementById("balance");
const income = document.getElementById("money-plus");
const expense = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

let tran = [{ id: 1, text: "testtt", amount: 10000 }];
let tran2 = { id: 2, text: "2", amount: 2 };
let trans = [];
function adddatatolist(trans) {
  const item = document.createElement("li");
  item.innerHTML = `${trans.text}<span>${trans.amount}</span><button class="delete-btn" onclick="removeData(${trans.id})">x</button>`;
  console.log("---------");
  list.appendChild(item);
}

function test(e) {
  e.preventDefault();
  if (text.value.trim() === "" || amount.value.trim() === "") {
    alert("Please enter all data");
  } else {
    tran2 = { id: autoID(), text: text.value, amount: +amount.value };
    tran.push(tran2);
    adddatatolist(tran2);
    console.log(tran);
  }
}
function autoID() {
  return Math.floor(Math.random() * 1000000);
}
form.addEventListener("submit", test);

console.log(tran);
