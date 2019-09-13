function handleClickEvent(){
    var received = document.getElementById("amount-received").value;
    var due = document.getElementById("amount-due").value;
    var change = received - due;

    dollars = Math.floor(change/1);
    change = (change % 1).toFixed(2);

    quarters = Math.floor(change/.25);
    change = (change % .25).toFixed(2);

    dimes = Math.floor(change/.10);
    change = (change % .10).toFixed(2);
   
    nickels = Math.floor(change/.05);
    change = (change % .05).toFixed(2);
    
    pennies = Math.floor(change/.01);
    change = (change % .01).toFixed(2);

    document.getElementById("dollars-output").innerHTML = 'Dollars: ' + dollars;
    document.getElementById("quarters-output").innerHTML = 'Quarters: ' + quarters;
    document.getElementById("dimes-output").innerText = 'Dimes: ' +dimes;
    document.getElementById("nickels-output").innerText = 'Nickels: ' +nickels;
    document.getElementById("pennies-output").innerText = 'Pennies: ' +pennies;
}

