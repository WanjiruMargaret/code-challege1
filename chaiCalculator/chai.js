function calculateChaiIngredients(){
    let numberOfCups = prompt("Enter the number of cups of Kenyan Chai you want to make?");
    numberOfCups = parseInt(numberOfCups);
    if (isNaN(numberOfCups)) {
        console.log("Please enter a valid number of cups.");
        return;
    }
    let waterPerCup=200;//ml
    let milkPerCup=50;//ml
    let teaLeavesPerCup = 1;//tablespoon
    let sugarPerCup = 2;//tablespoon

    let totalWater = waterPerCup * numberOfCups;
    let totalMilk = milkPerCup * numberOfCups;
    let totalTeaLeaves = teaLeavesPerCup * numberOfCups;
    let totalSugar = sugarPerCup * numberOfCups;

    let message=(`To make ${numberOfCups} cups of Kenyan Chai, you will need:\n` +
        `${totalWater} ml of water,\n` +
        `${totalMilk} ml of milk,\n` +
        `${totalTeaLeaves} tablespoons of tea leaves,\n` +
        `${totalSugar} tablespoons of sugar.\n`+
        `karibu kunywa chai`);
    alert(message);
}
calculateChaiIngredients();
// This function calculates the ingredients needed for making Kenyan Chai based on the number of cups specified by the user.
