// Displays the value of the range slider
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

// Validation for "Principal" input box
function validatePrincipal(){
    //Create references to the input elements I want to validate
    var principal = document.getElementById("principal");

    //Check if principal field is empty
    if(principal.value == "" || parseInt(principal.value) <= 0){
          alert("Please enter a positive number");
          principal.focus();
          return false;
    }

   //If everything is OK, return true
    return true;
}

// Calculates the interest amount and displays the result
function compute() {
    // Create references to the values for user input
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = parseInt(document.getElementById("years").value);

    // Calculates the amount
    var amount = principal * years * rate / 100;

    // Calculates the year the amount is recieved 
    var year = new Date().getFullYear() + years;

    // HTML with the result
    var resultHTML = 
        "\<br\>\<br\>If you deposit " 
        + '<span class="highlight">' + principal + "</span>"
        + ".-<br\>at an interest rate of "
        + '<span class="highlight">' + rate + "</span>"
        + "%,<br\>you will receive an amount of "
        + '<span class="highlight">' + amount + "</span>"
        + "<br\>in the year " 
        + '<span class="highlight">' + year + "</span><br\>"; 

    // If the user input is OK, displays the result
    if (validatePrincipal()) {
    document.getElementById("result").innerHTML=resultHTML;
    }
}

        