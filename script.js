const date = new Date();

const monthDays = document.querySelector(".days")

const lastDay = months_last

const year = "440"

const months_last = [
    "43",
    "45",
    "45",
    "46",
    "46",
    "45",
    "45",
    "45",
    "45",
]


const months = [
    "Lormon",
    "Gagiel",
    "Zepha",
    "Banur",
    "Peniel",
    "Zeriel",
    "Achiel",
    "Idwah",
    "Ariel",
];

document.querySelector(".date h1").innerHTML = months[1];

document.querySelector('.date p').innerHTML = date.toDateString();

let days = "";


for(let  i = 1; 1<= months_last[i]; i++){
    days += "<div>${i}</div>";
   
} 

monthDays.innerHTML = days;