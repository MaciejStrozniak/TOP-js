let log = console.log;

const cars = new Array("Skoda", "Audi", "Volkswagen");
const differentCars = ["Dacia", "Lada", "Fiat"];

const carsData = [

    {
        company: "Skoda",
        model: "Scala",
        year: "2024",
        picture: "https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/autoblog/2023/12/27906-Scala_MC_34front.jpg"
    },

    {
        company: "Volkswagen",
        model: "Golf",
        year: "2022",
        picture: "https://i.gaw.to/content/photos/40/42/404207_2022_Volkswagen_Golf.jpg"
    }
];

const differentCarsArrayLength = differentCars.length - 1;

for(i = 0; i <= differentCarsArrayLength; i++) {
    log(i + " " + differentCars[i]);
}

log(cars.toString());
log(Array.isArray(cars));
log(cars instanceof Array);

document.addEventListener('DOMContentLoaded', () => {
    const documentElement = document.getElementById('array'); // takes element to add car datas to it
    const outputElement = document.getElementById('counter'); // takes the element to add rocket launch counting to it
    const startTheCounter = document.getElementById('button'); // takes the button that starts the counter

    if(documentElement) {

        for(let i in carsData) {
            
            documentElement.innerHTML +=
                `<h2>${carsData[i].company}</h2>` + 
                `<h4>${carsData[i].model}</h4>` +
                `<h4>${carsData[i].year}</h4>` +
                `<img src=${carsData[i].picture}>`;
        }
    }
    else
        log('error');

    startTheCounter.addEventListener('click', () => {
        startCountdown(outputElement);
    });

});


for(i=0; i <= carsData.length -1; i++) {
    log(carsData[i].company + " " +
        carsData[i].model + " " +
        carsData[i].year
    );
}

log(cars.join(" --- "));
log(carsData.at(-2));
log(`${cars.includes("Dodge")} + ${cars.includes("Audi")}`);


// ----------------------------------------- NO MORE CARS IN THE SECTION BELOW ------------------------------------------------
// ----------------------------------------- TIME FOR ROCKET LAUNCH COUNTER ----------------------------------------------

// ROCKET COUNTDOWN
function startCountdown(output) {
    for(i=10; i >= 0; i--) {
        if(i === 10)
            output.innerHTML += `<p>Countdown ${i}</p>`;
        else if(i === 0)
            output.innerHTML += `<p>BLAST OFF!</p>`;
        else
            output.innerHTML += `<p>${i} </p>`;
    }
}