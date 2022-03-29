var country = {
 
    name: "Германия",
    language: "немецкий",
    capital:{
     
        name: "Берлин",
        population: 3375000,
        year: 1237
    }
};
console.log("Столица: " + country.capital.name); // Берлин
console.log("Население: " + country["capital"]["population"]); // 3375000
console.log("Год основания: " + country.capital["year"]); // 1237