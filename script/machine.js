//machine id-> input value
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value= input.value;
    return value;
}

//machine-> balance
function getBalance(){
    const balanceElement= document.getElementById("balance");
    const balance= balanceElement.innerText;
    return Number(balance);
}


//machine value -> set balance
function setBalance(value){
    const balanceElement= document.getElementById("balance");
    balanceElement.innerText= value;
}

//machine id > hide all > show id
function showOnly(id){
    
    const addmoney= document.getElementById("add-money");
    const cashout= document.getElementById("cashout");
    const history= document.getElementById("history");
    console.log(`add Money- ${addmoney}, ${cashout}`);
    
    //sobaike hide kore daw
    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");
    history.classList.add("hidden");


    //id wala element taa k show koro
    const selected =document.getElementById(id);
    selected.classList.remove("hidden");
}

