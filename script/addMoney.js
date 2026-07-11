document.getElementById("add-money-btn").addEventListener("click", function(){
    //1-- bank account get
    const bankAccount= getValueFromInput("add-money-bank");
    
    if(bankAccount=="Select a Bank"){
        alert("Please select a bank");
        return;
    }

    //2-- get bank account number
    const accno= getValueFromInput("add-money-number");
    if(accno.length !=11){
        alert("Invalid acc no");
        return;
    }

    //get amount 
    const amount = getValueFromInput("add-money-amount");
    const currentBalance= getBalance();
    const newBalance= currentBalance + Number(amount);

    const pin= getValueFromInput("add-money-pin");
    if(pin== "1234"){
        alert(`Add money Success from
            ${bankAccount}
            at ${new Date()}`);
        setBalance(newBalance);

        //1--history container ke dhorbo
        const history= document.getElementById("history-container");
        //2-- new div create korbo
        const newHistory = document.createElement("div");

        //3-- new div innerHTML add korbo
            newHistory.innerHTML=`
            <div class="transaction-card p-5 bg-base-100">
                Add Monney success from ${bankAccount}, acc-no $(accno) at ${new Date()}
            </div>
            `;
        //4-- history container a newDiv append
            history.append(newHistory);
    }
    else {
        alert("Invalid Pin");
        return;
    }
})