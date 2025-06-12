function estimateTransactionFee(){
    let amountToSend=window.prompt("how much are you sending")
     amountToSend=parseInt(amountToSend)
   // console.log(typeof amountToSend)
    if (isNaN(amountToSend)){
        console.log("failed to convert")
        //console.log(amount);
        alert;
        return;
    }
     let amount = (amountToSend * 100)/100;
    //console.log(typeof amount);
    //console.log(amount);
    let transactionCost =(amount * 1.5)/100;
    let totalAmount=amount + transactionCost
    let message=(`transaction cost is:${transactionCost}\n`+`Total amount:${totalAmount}`);
    alert(message)
}
estimateTransactionFee();