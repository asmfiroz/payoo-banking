
document.getElementById("login-btn").addEventListener("click",function(){
    //1-- get the mobile number
    const numberInput= document.getElementById("input-number");
    const contactNumber = numberInput.value;
    console.log(contactNumber);
    //2-- get the pin
    const inputPin= document.getElementById("input-pin");
    const pin= inputPin.value;
    console.log(pin);
    //3--match the number and the pin
    if(contactNumber=="01234567890" && pin=="1234"){
        //3.1-- true::: alert> homepage
        alert("Login Successfully");
        window.location.assign("/home.html")
    }
    else{
        //3.2-- false::: alert> return
        alert("Login Failed");
        return;
    }
    
})

