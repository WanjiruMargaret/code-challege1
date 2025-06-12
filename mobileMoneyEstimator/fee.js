function estimateTransactionFee(){
    const amountToSend=window.prompt("how much are you sending")
    const amount=parseInt(amountToSend)
    console.log(typeof amountToSend)
    if (!amount){
        console.log("failed to convert")
        console.log(amount);
        alert;
    }
    let transactionCost =(amount * 1.5)/100
    if (transactionCost<=10){
        alert('sending kes 500 the transaction cost is 10 the total amount will be 510')
        return;
    }
}