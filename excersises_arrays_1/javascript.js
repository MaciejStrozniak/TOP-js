let log = console.log;

const cars = new Array("Skoda", "Audi", "Volkswagen");
const differentCars = ["Dacia", "Lada", "Fiat"];

const carsData = [

    {
        company: "Skoda",
        model: "Scala",
        year: "2024"
    },

    {
        company: "VW",
        model: "Golf",
        year: "2022"
    }
];

const differentCarsArrayLength = differentCars.length - 1;

for(i = 0; i <= differentCarsArrayLength; i++) {
    log(i + " " + differentCars[i]);
}

log(cars.toString());
log(Array.isArray(cars));
log(cars instanceof Array);

// document.addEventListener('DOMContentLoaded', () => {
//     if(document.getElementById("array"))
//         document.getElementById("array").innerHTML = cars.toString();
//     else
//         log("error");
//});

let htmlTextVar = "";

document.addEventListener('DOMContentLoaded', () => {
    const documentElement = document.getElementById('array');

    if(documentElement) {

        for(let i in carsData) {
            
            documentElement.innerHTML =
                htmlTextVar += "<h2>" + carsData[i].company + "</h2>";

                    for(let j in carsData) {   
                        documentElement.innerHTML =
                            htmlTextVar += "<h4>" + carsData[j].model + "</h4>" + " " +
                            "<h4>" + carsData[j].year + "</h4>";
                    }   
        }
    }
    else
        log('error');
});

for(i=0; i <= carsData.length -1; i++) {
    log(carsData[i].company + " " +
        carsData[i].model + " " +
        carsData[i].year
    );
}