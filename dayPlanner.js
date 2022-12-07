var now = moment().format("dddd, MMMM do");

document.getElementById("currentDay").innerHTML = now;



// $('#9').addEventListener("click", console.log('hello world'));

var element = document.getElementById("btn0");

// element.addEventListener("click", function() {
//     var save = document.getElementById("row0").value



//   });
let hours = [9, 10, 11, 12, 1, 2, 3, 4, 5]

  function saveData(event) {
    console.log(event.target)
    let targetElement;
    if(event.target.tagName === "I") {
      targetElement = event.target.parentElement.previousElementSibling;
    } else if(event.target.tagName === "BUTTON"){
        targetElement = event.target.previousElementSibling
    }
    console.log(targetElement)
    let key = targetElement.getAttribute("id")
    let value = targetElement.value
    localStorage.setItem(key, value)
  }

  function getFromLocalStorage() {
    for(let i = 0; i < hours.length; i++){
      
      document.getElementById(`${hours[i]}`).value = localStorage.getItem(`${hours[i]}`)
    }
  }

getFromLocalStorage()

// get the current time from moment in 24:00 format



// compare the current time to each time row

// if row is less than current time, set class to .past 












// var a = moment('2016-01-01'); 
// var b = a.add(1, 'week'); 
// a.format();

// var c = a.format();
// console.log(c);