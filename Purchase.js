//PURCHASE AND DONATE PAGE

function inputValid(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let address=document.getElementById("address").value;
    let Card_No=document.getElementById("card_no").value;
    let Pin_No=document.getElementById("cvv").value;
    let Card_HName=document.getElementById("cardHold").value;
    let month_IN=document.getElementById("expiredate").value;
    let fixed_Donate=document.getElementById("Fixed_Donate").value;

    let email_pattern = /^[A-Za-z\d\.\_]+\@[A-Za-z\d\.\-]+\.[A-Za-z]{2,5}$/;
    let name_pattern = /^\b(?!.*\.{2})[a-zA-Z.]+(?:\s[a-zA-Z.]+)\b$/;
    let address_pattern = /^[A-Za-z\d\.\-\/\#\,\s]+$/;
    let card_pattern = /^[0-9]{16,16}$/;
    let pin_pattern = /^[0-9]{3,3}$/;
    let holder_pattern = /^\b(?!.*\.{2})[a-zA-Z.]+(?:\s[a-zA-Z.]+)\b$/;

    if(!name.match(name_pattern)){
        alert("Please enter a valid name!");
        document.getElementById("name").focus();
        return false;
    }

    if(!email.match(email_pattern)){
        alert("Please enter a valid email address!");
        document.getElementById("email").focus();
        return false;
    }

    if(!address.match(address_pattern)){
        alert("Please enter a valid address!");
        document.getElementById("address").focus();
        return false;
    }

    if(!fixed_Donate == ""){
        alert("Please select an amount!");
        return;
    }

    if(!Card_No.match(card_pattern)){
        alert("Please enter a valid card number!");
        document.getElementById("card_no").focus();
        return false;
    }
    
    if(!Pin_No.match(pin_pattern)){
        alert("Please enter a valid CVV number! (3 digits on the back of your card)");
        document.getElementById("cvv").focus();
        return false;
    }

    if(!month_IN == ""){
        alert("Please select the expiration month of your card!");
        document.getElementById("expireMM");
        return;
    }

    if(!year_IN == ""){
        alert("Please select the expiration month of your card!");
        document.getElementById("Year_In");
        return;
    }

    if(!Card_HName.match(holder_pattern)){
        alert("Please enter a valid email address!");
        document.getElementById("cardHold").focus();
        return false;
    }

    alert("Thank you for your contribution! Your receipt will be emailed to you!")

    clearDonation();
}

function clearDonation(){
    const inputs = document.getElementById('#name, #email, #address, #card_no, #cvv, #cardHold, #Month_In, #Year_In, #Fixed_Donate, #donateComment')
    inputs.array.forEach(input => {
        input.value = ' ';
    });
}