var amountDue = document.getElementById('amount-due').value;
var amountReceived = document.getElementById('amount-received').value;

function calculateAmount(amountDue, amountReceived){
    var amountDue = document.getElementById('amount-due').value;
    var amountReceived = document.getElementById('amount-received').value;
    return amountDue - amountReceived;
}


function handleClickEvent(){
    var displayDue = calculateAmount(amountDue, amountReceived);
    console.log(displayDue);
    document.getElementById("total-due").innerHTML= displayDue;
}

