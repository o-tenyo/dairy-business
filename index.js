var dailyCapacity = 0;
var sellingPrice = 45; //per litre
var productionPerShed = {
  A : 370,
  B : 500,
  C : 350,
  D : 540,
  E : 390,
  F : 400,
  G : 770,
  H : 590,
}

function totalProduction(){
  for (var property in productionPerShed){
    console.log(`Your production in Shed ${property} is ${productionPerShed[property]} litres per day`);
    dailyCapacity = dailyCapacity + productionPerShed[property];
}
  console.log(`Total production is ${dailyCapacity} litres per day`);
}
totalProduction();

function incomeOverTime(sellingPrice){
  var dailyIncome = dailyCapacity*sellingPrice;
  console.log(`Your daily income will be Ksh ${dailyIncome}`)
  var weeklyIncome = dailyIncome*7;
  console.log(`Your weekly income will be Ksh ${weeklyIncome}`)
  var monthlyIncome = weeklyIncome*4;
  console.log(`Your monthly income will be Ksh ${monthlyIncome}`)
  var yearlyIncome = weeklyIncome*52;
  console.log(`Your yearly income will be Ksh ${yearlyIncome}`)
  }
incomeOverTime(45); 

var monthsOftheYear = {
  January : 31,
  February : 29,
  March : 31,
  April : 30,
  May : 31,
  June : 30,
  July : 31,
  August : 30,
  September : 31,
  October : 30,
  November : 31,
  December : 30,
};
