const mealCost = (process.argv[2]*1);
const tipPercent = (process.argv[3]*1);
const tipAmount = (tipPercent / 100) * mealCost;
const totalOwing = tipAmount + mealCost;
const outPut = `your meal was $${mealCost} + a ${tipPercent}% tip = ${totalOwing}`;

console.log(outPut);