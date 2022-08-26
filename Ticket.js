//ACTIVITIES PAGE
//
let tickets = {
    ticket_price : [5000,2500,1000,500,15000,4500], 
    duration_price : [0,0,250,500,500,1000], 
    extras_price : [500]
  }
  let ticketApp = {
    ticket_cost : 0, 
    ft_cost : 0,  
    no_of_tickets : 0,
    spCost :0,
  };
  
  function calculateCost() {
  
    let ticket_price = tickets["price"];
    let duration_price = tickets["duration"];
    let extras_price = tickets["extras"];
  
    let cost = 0;
    
    let choice = document.getElementById("cmbChoice").value;
    let duration = document.getElementById("cmbDuration").value;
    let noOfTickets = document.getElementById("noOfTickets").value; 
    let foodTokens = document.getElementById("noOfTokens").value;

  
  if(noOfTickets!= 0){
  
    if(choice == ""){
      alert("Please select your choice");
      document.getElementById("cmbChoice").focus();
      return;
    }
  
    if(duration == ""){
      alert("Please select the duration");
      document.getElementById("cmbDuration").focus();
      return;
    }
  
  }
  
    if(duration != "" && choice == ""){
        alert("Please select the choice first");
        document.getElementById("cmbDuration").focus();
        
        return;
    }
  
  
    if(noOfTickets == "" ){
      noOfTickets = 0;
    }
    else{
      noOfTickets = parseInt(noOfTickets);
  
    }
  
  
    if(foodTokens == ""){
      foodTokens = 0;
      
    }
    else{
      foodTokens = parseInt(foodTokens);
  
    }
  
    let tPrice = 0;
    choice = parseInt(choice);
  
    switch(choice) {
      case 0:
        tPrice = ticket_price[0] * noOfTickets;
        break;
      case 1:
        tPrice = ticket_price[1] * noOfTickets;
        break;
      case 2:
        tPrice = ticket_price[2] * noOfTickets;
        break;
      case 3:
        tPrice = ticket_price[3] * noOfTickets;
        break;
      case 4:
        tPrice = ticket_price[4] * noOfTickets;
        break;
      case 5:
        tPrice = ticket_price[5] * noOfTickets;
        break;
      default:
    }


    if(duration !=""){
      duration = parseInt(duration);
      tPrice = tPrice + duration_price[duration];
  
    }
  
    ticketApp.ticket_cost = tPrice;
  
    ticketApp.ft_cost = foodTokens * extras_price[0];
   
  
    cost = parseFloat(tPrice + ticketApp.ft_cost);
  
    document.getElementById("spCost").innerHTML = cost.toFixed(2); 
    
    ticketApp.no_of_tickets = noOfTickets; 
    ticketApp.spCost = cost;
  
  }
  
  document.getElementById("AddOrder").onclick = function(){
  
    
    if(ticketApp.spCost>0){
      document.getElementById("tbl_order").style = "display: inlineblock;"
    }
  
    let cost = parseFloat(document.getElementById("spCost").innerHTML);
    if(cost == 0){
        alert("You cannot place an order without any items in the current order. Please add one or more items to continue.");
        return;
    }
  
    
    let grand_total = parseFloat(document.getElementById("thGrandTot").innerHTML);
    let total_ftokens = parseInt(document.getElementById("thFtokens").innerHTML);
    let grand_token = parseFloat(document.getElementById("pthFtokens").innerHTML);
    
    let foodTokens = document.getElementById("noOfTokens").value;
    
  
    if(foodTokens == ""){
      foodTokens = 0;
      
    }
    else{
      foodTokens = parseInt(foodTokens);
  
    }

  
    let ctrl_choice = document.getElementById("cmbChoice");
    let choice_txt = ctrl_choice.options[ctrl_choice.selectedIndex].text;
  
    let ctrl_duration = document.getElementById("cmbDuratiom");
    let duration_txt = ctrl_duration.options[ctrl_duration.selectedIndex].text;
  
  
    
  
    let total = ticketApp.ticket_cost;
    
    let tbody = document.getElementById("tbody_order");
  
  
    if(ticketApp.no_of_tickets>0) { //|| ticketApp.no_of_children>0){
  
        let trow = tbody.insertRow(-1)
  
      td1 = trow.insertCell(0);
      td1.innerHTML = choice_txt;
  
      td2 = trow.insertCell(1);
      td2.innerHTML=document.getElementById("noOfTickets").value;
      td2.style = "text-align:center";
  
      td3 = trow.insertCell(2);
      td3.innerHTML=document.getElementById("date").value;
      td3.style = "text-align:center";
  
      td4 = trow.insertCell(3);
      td4.innerHTML =  duration_txt;                        //document.getElementById("date").value;
      td4.style = "text-align:center";
  
      td5 = trow.insertCell(4);
      td5.innerHTML = total.toFixed(2);              //duration_txt;
      td5.style = "text-align:center";
      
  
      td6 = trow.insertCell(5);
      td6.innerHTML= "<a href='javascript:void(0)' style='color:red;font-weight:bold' onclick='removeRecord(this.parentElement);'> <img src ='images/trash-bin.png' id ='trashBin' alt ='trashbin' > </a>";                  //total.toFixed(2);
      td6.style = "text-align:right";
  
  
    }
    
  
    total_ftokens = total_ftokens + foodTokens;
    document.getElementById("thFtokens").innerHTML = total_ftokens.toFixed(2);
    document.getElementById("thFtokens").style = "text-align:center";
  
    grand_token = grand_token + ticketApp.ft_cost;
    document.getElementById("pthFtokens").innerHTML = grand_token.toFixed(2);
    document.getElementById("pthFtokens").style = "text-align:right";
  
    
    grand_total = grand_total + ticketApp.spCost;
    document.getElementById("thGrandTot").innerHTML = grand_total.toFixed(2);
    document.getElementById("thGrandTot").style = "text-align:center";
  
    document.getElementById("spCost").innerHTML = grand_total.toFixed(2);
  
    document.getElementById("overallGtotal").innerHTML = grand_total.toFixed(2);
  
  
    resetPurchaseForm();
    calcLoyaltyPoints();
    
    
  
  }
  
  
  
  function resetPurchaseForm(){
    document.getElementById("frmPurchase").reset();
    document.getElementById("spCost").innerHTML = "0.00";
  }
  
  
  function removeRecord(item){
    let result = confirm("Do you want to remove this record?");
    
    if(result == true){
        let table = document.getElementById("tbl_order");
        let grand_total = parseFloat(document.getElementById("thGrandTot").innerHTML);
        let total = parseFloat(item.parentElement.cells[5].innerHTML);
        grand_total = grand_total - total;
        document.getElementById("thGrandTot").innerHTML = grand_total.toFixed(2);
        document.getElementById("overallGtotal").innerHTML = grand_total.toFixed(2);
        table.deleteRow(item.parentElement.rowIndex);
    }
   
  
  }
  
  
  function removeFoodTokens(){
    let result = confirm("Do you want to remove all food tokens? You can always add more later if necessary.");
    
    if(result == true){
        let tpfoodTokens = parseFloat( document.getElementById("pthFtokens").innerHTML);
        let tfoodTokens = parseFloat(document.getElementById("thFtokens").innerHTML);
        let grand_total = parseFloat(document.getElementById("thGrandTot").innerHTML);
      grand_total = grand_total -tpfoodTokens;
      document.getElementById("thGrandTot").innerHTML = grand_total.toFixed(2);
      document.getElementById("overallGtotal").innerHTML = grand_total.toFixed(2);
      tpfoodTokens = 0;
      tfoodTokens = 0;
  
      document.getElementById("pthFtokens").innerHTML = tpfoodTokens;
      document.getElementById("thFtokens").innerHTML = tfoodTokens;
     
    }
   
  
  }
  
  document.getElementById("extra_items").style.display = "none"; 
  
  function showHide() {
    let x = document.getElementById("extra_items");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  

  document.getElementById("placeOrder").onclick = function(){
    let overallOrder = parseFloat(document.getElementById("overallGtotal").innerHTML);
    if(overallOrder != 0){
    let Table = document.getElementById("tbody_order");
    document.getElementById("thGrandTot").innerHTML = "0.00";
    document.getElementById("overallGtotal").innerHTML = "0.00";
    Table.innerHTML = "";
    document.getElementById("tbl_order").style = "display: none;"
    alert("Thank you for your purchase of tickets or additional items. We look forward to seeing you again soon.")
    }
    else{
      alert("You cannot place an order without any items in the overall order. Please add one or more items to continue.")
    }
  }
  
  
  let todayDate = new Date();
  let frmDate = document.getElementById("date");
  let month = todayDate.getMonth() + 1; 
  let year = todayDate.getUTCFullYear() - 0; 
  let tdate = todayDate.getDate(); 
  if(month < 10){
    month = "0" + month 
  }
  if(tdate < 10){
    tdate = "0" + tdate;
  }
  let maxDate = year + "-" + month  + "-" + tdate;
  document.getElementById("date").value = maxDate;
  frmDate.setAttribute("min",maxDate)
  
  const formId = "frmPurchase"; 
  const formDetector = `${formId}`; 
  const saveButton = document.querySelector("#addFavourite"); 
  const retrieveButton = document.querySelector("#retriveFavourite"); 
  const alertBox = document.querySelector(".alert"); 
  let form = document.querySelector(`#${formId}`);
  let formElements = form.elements; 
  
   const getFormData = () => {
    let data = { [formDetector]: {} }; 
    for (const element of formElements) {
      if (element.name.length > 0) {
        data[formDetector][element.name] = element.value;
      }
    }
    return data;
  };
  
  saveButton.onclick = event => {
    event.preventDefault();
    data = getFormData();
    localStorage.setItem(formDetector, JSON.stringify(data[formDetector]));
    const message = "Your order has been saved as a favorite . Thank you.";
    displayAlert(message);
  };
  
  
  const displayAlert = message => {
    alertBox.innerText = message; 
    alertBox.style.display = "block"; 
    setTimeout(function() {
      alertBox.style.display = "none"; 
    }, 2000);
  };
  

   const formautoRefill = () => {
    if (localStorage.key(formDetector)) {
      const savedData = JSON.parse(localStorage.getItem(formDetector)); 
        if (element.name in savedData) {
          element.value = savedData[element.name];
        }
      }
      const message = "Form has been refilled with saved data!";
      displayAlert(message);
      document.getElementById("extra_items").style.display = "block"; 
    }
  
  retrieveButton.onclick = function(){
      formautoRefill(); 
      calculateCost();
  
  }
  
  
  var grand_loyaltyPoints = 0;
  var loyaltyPoints =0;
  var totalTicket = 0;
  
  function calcLoyaltyPoints(){
   
    
    totalTicket = totalTicket + ticketApp.no_of_adults + ticketApp.no_of_children;
    if(totalTicket > 3){
        loyaltyPoints = 20 * totalTicket;
        grand_loyaltyPoints = grand_loyaltyPoints + loyaltyPoints; 
        localStorage.setItem("loyality",grand_loyaltyPoints);
    }
  }

  function showLoyaltyPoints(){
    
    grand_loyaltyPoints = JSON.parse(localStorage.getItem(`loyality`));
   
    if(grand_loyaltyPoints>0){
        alert("Congratulations! You have earned "+  grand_loyaltyPoints + " loyalty points so far");
    }
    else{
        alert("Sorry! You don't have any loyalty points so far");
    }
  }