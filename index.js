

// Hide the main app until the user has logged in
let unhide = document.getElementsByClassName("container")
let hideLogin = document.getElementsByClassName("login")

function login() {

  let userName = document.getElementById("username").value.toLowerCase()
  let passWord = document.getElementById("password").value

  if (userName === "name" && passWord === "Password") {
      unhide[0].style.display = "block"
      hideLogin[0].style.display = "none"

      greeting();
      } else {
    alert("Your username or password is incorrect")
      }

  }   

  // get the user's name and greet them 

  function greeting() {
    let fName = document.getElementById("fname").value
    fName = fName.charAt(0).toUpperCase() + fName.slice(1).toLowerCase();
    let greetEl = document.getElementById("greet-el")
    greetEl.textContent += ` ${fName} !`
  }
  // Function to get the current date in a desired format
    function getCurrentDate() {
      let today = new Date();
      let day = String(today.getDate()).padStart(2, '0');
      let month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
      let year = today.getFullYear();

      return `${day}/${month}/${year}`; // Format: DD/MM/YYYY
  }

  function getMonthYear() {
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let today = new Date();
    let nameOfMonth = month[(today.getMonth())]
    let year = String(today.getFullYear());
    return `${nameOfMonth} ${year}`
  }

  //check if listTitle is set
  let isTitleSet = false;

   // Add Income to the Income Column
function addIncome() {
    let incomeName = document.getElementById("income").value.toUpperCase();
    let incomeAmount = document.getElementById("amount").value;
    let currentDate = getCurrentDate();
    let errorMessage = document.getElementsByClassName("error")[0];
    let monthYear = getMonthYear();

    if (!incomeName || !incomeAmount) {
        errorMessage.style.display = "block";
       
    } else {
        errorMessage.style.display = "none";
         if (!isTitleSet) {
      listTitle.style.display = "block"
      listTitle.textContent += ` for ${monthYear}`
      isTitleSet = true;
      }

        let incomeListContainer = document.getElementById("income-list");

        // Create a new list item
        let newItem = document.createElement("div");
        newItem.classList.add("list-item");
        newItem.innerHTML = `<span class="item-date">${currentDate}</span>
                             <span class="item-name">${incomeName}</span>
                             <span class="item-amount">£${incomeAmount}</span>`;

        // Append new item to the income list
        incomeListContainer.appendChild(newItem);
        clearInput();
    }
}

// Add Expense to the Expense Column
function addExpense() {
    let expenseName = document.getElementById("expense").value.toUpperCase();
    let expenseCost = document.getElementById("cost").value;
    let currentDate = getCurrentDate();
    let errorMessage = document.getElementsByClassName("error")[0];

    if (!expenseName || !expenseCost) {
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
         if (!isTitleSet) {
        listTitle.style.display = "block"
        listTitle.textContent += ` for ${monthYear}`
        isTitleSet = true;
        }

        let expenseListContainer = document.getElementById("expense-list");

        // Create a new list item
        let newItem = document.createElement("div");
        newItem.classList.add("list-item");
        newItem.innerHTML = `<span class="item-date">${currentDate}</span>
                             <span class="item-name">${expenseName}</span>
                             <span class="item-amount expense-amount">-£${expenseCost}</span>`;

        // Append new item to the expense list
        expenseListContainer.appendChild(newItem);
        clearInput();
    }
}

  
   // Display total money when adding items to the list
   function totalMoney() {
    let incomeAmount = parseFloat(document.getElementById("amount").value) || 0; // Default to 0 if NaN
    let expenseCost = parseFloat(document.getElementById("cost").value) || 0; 
    let totalEl = document.getElementById("total");
    let currentTotal = parseFloat(totalEl.textContent.replace("£","")) || 0; 
    let errorMessage = document.getElementsByClassName("error")[0];

    let incomeName = document.getElementById("income")
    let expenseName = document.getElementById("expense")

   

    if ((!incomeName && incomeAmount>0) || (!expenseName && expenseCost >0)) {
      errorMessage.style.display="block"
      clearInput()
    } else {
      errorMessage.style.display="none"
   

      if (incomeAmount > 0 && incomeName) {
        currentTotal += incomeAmount 
        addIncome()
      }
      

      if (expenseCost > 0 && expenseName) {
        currentTotal -= expenseCost
        addExpense()
      }
     
    totalEl.textContent = "£" + currentTotal.toFixed(2); 
   }
  }
  

    // Reset input to null
    function clearInput() {
    document.getElementById("income").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("expense").value = "";
    document.getElementById("cost").value = "";
    }
    
  


