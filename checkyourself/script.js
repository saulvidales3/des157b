(function(){
    "use strict";
    console.log("reading js");

       

const stepsData = {
  "steps": [
    { "day": "SUNDAY",   "count": 5074  },
    { "day": "MONDAY",   "count": 16540 },
    { "day": "TUESDAY",  "count": 22713 },
    { "day": "WEDNESDAY", "count": 14288 },
    { "day": "THURSDAY",  "count": 18962 },
    { "day": "FRIDAY",    "count": 20147 },
    { "day": "SATURDAY",  "count": 18601 },
    { "day": "SUNDAY",    "count": 462   }
  ]
};

let upto = 0;
let counts = null;
let dayIndex = 0; 

function startCounting() {
    counts = setInterval(updated, .000000001);
}

function updated() {
    const currentDay = stepsData.steps[dayIndex];

    let counter = document.getElementById("counter");
    let dayLabel = document.getElementById("day-label");
   

    counter.innerHTML = ++upto;
    dayLabel.innerHTML = currentDay.day;
   

    if (upto === currentDay.count) {
        clearInterval(counts);
        counter.style.color = "yellow";
        dayLabel.style.color = "yellow";

        setTimeout(() => {
            counter.style.color = "";
            dayLabel.style.color = "";

            dayIndex++;

          
            if (dayIndex < stepsData.steps.length) {
                upto = 0; 
                startCounting();
            } else {
                dayLabel.innerHTML = "The End!";
            }
        }, 3000);
    }
}

startCounting();

     
       


})();