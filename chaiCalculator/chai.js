function calculateChaiIngredients(numberOfCups){
        const waterPerCup=200;ml
        const milkPerCup=50;ml
        const teaLeavesPerCup = 1;tablespoon
        const sugarPerCup = 2;tablespoon

        const totalWater = waterPerCup * numberOfCups;
        const totalMilk = milkPerCup * numberOfCups;
        const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
        const totalSugar=sugarPerCup*numberOfCups;

         console.log(`To make ${numberOfCups} cups of Kenyan Chai you will need:`)
         console.log(`water ${totalWater} ml`)
         console.log(`milk ${totalMilk}ml`)
         console.log(`Tea leaves(majani): ${totalTeaLeaves} tablespoon`)
         console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
        console.log("\nEnjoy your Chai Bora!");
}
const cupsInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = Number(cupsInput);
if (!isNaN(numberOfCups) && numberOfCups > 0) {
  calculateChaiIngredients(numberOfCups);
} else {
  console.log("Please enter a valid number of cups.");
}