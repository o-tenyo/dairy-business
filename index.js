function totalProduction(){
    var sum = 0;
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
      for (var property in productionPerShed){
          console.log(`Your production in Shed ${property} is ${productionPerShed[property]} litres per day`);
          sum = sum + productionPerShed[property]
      }
    console.log(`Total production is ${sum} litres per day`)
  }
  totalProduction()
  