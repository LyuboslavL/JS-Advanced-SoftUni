// function solve() {
//    document.querySelector('#btnSend').addEventListener('click', onClick);

//    function onClick() {
//       let restaurantsReceivedElement = document.querySelector('#inputs textarea').value;
//       let restaurantsArray = JSON.parse(restaurantsReceivedElement);

//       let restaurantsObj = {};
//       for (let i = 0; i < restaurantsArray.length; i++) {
//          let [restaurant, workers] = restaurantsArray[i].split(' - ');
//          let inputWorkers = workers.split(', ').map(w => {
//             let [name, salary] = w.split(' ');
//             return {name, salary: Number(salary)};
//          })

//          if (!restaurantsObj.hasOwnProperty(restaurant)) {
//             restaurantsObj[restaurant] = {
//                workers = [],
//                getAverageSalary: function() {
//                   return this.workers.reduce((acc, el) => acc + el, 0) / this.workers.length;
//                }
//             }
//          }

//          restaurantsObj[restaurant].workers = restaurantsObj[restaurant].workers.concat(inputWorkers);
//       }

//       let sortedRestaurants = Object.entries(restaurantsObj)
//                                     .sort((a, b) => b[1].getAverageSalary() - a[1].getAverageSalary());
//       let bestRestaurant = sortedRestaurants[0];
//       let sortedWorkers = bestRestaurant[1].workers.sort((a, b) => b.salary - a.salary);
//       let averageSalary = bestRestaurant[1].getAverageSalary().toFixed(2);
//       let bestSalary = sortedWorkers[0].salary.toFixed(2);


//       let bestRestaurantElement = document.querySelector('#bestRestaurant p');
//       let workersElement = document.querySelector('#workers p');

//       let topRestaurantString = `Name: ${bestRestaurant[0]} Average Salary: ${averageSalary} Best Salary: ${bestSalary}`;
//       let workersString = sortedWorkers
//                                     .map(x => `Name: ${x.name} With Salary: ${x.salary}`)
//                                     .join(' ')

//       bestRestaurantElement.textContent = topRestaurantString;
//       workersElement.textContent = workersString;

//    }
// }


// function solve() {
//    document.querySelector('#btnSend').addEventListener('click', onClick);

//    function onClick() {
//       let inputElement = document.querySelector('#inputs textarea').value;
//       let arrayRestaurants = JSON.parse(inputElement);
//       // console.log(arrayRestaurants);

//       let objectRestaurants = {};

//       for (let element of arrayRestaurants) {
//          let [restaurantName, workersArr] = element.split(' - ');
//          workersArr = workersArr.split(', ');
//          let workers = [];

//          for (let worker of workersArr) {
//             let [name, salary] = worker.split(' ');
//             salary = Number(salary);
//             workers.push({
//                name,
//                salary
//             });
//          }

//          if (objectRestaurants[restaurantName]) {
//             workers = workers.concat(objectRestaurants[restaurantName].workers);
//          }


//          workers.sort((a, b) => b.salary - a.salary);
//          let bestSalary = workers[0].salary;
//          let averageSalary = workers
//                         .reduce((sum, worker) => sum + worker.salary, 0) / workers.length;

//          objectRestaurants[restaurantName] = {
//             workers,
//             averageSalary,
//             bestSalary
//          };
//       }

//       let bestRestaurant = undefined;
//       let bestRestaurantSalary = 0;

//       for (let name in objectRestaurants) {
//          if (objectRestaurants[name].averageSalary >= bestRestaurantSalary) {
//             bestRestaurant = {
//                name, 
//                workers: objectRestaurants[name].workers,
//                bestSalary: objectRestaurants[name].bestSalary,
//                averageSalary: objectRestaurants[name].averageSalary
//             }

//             bestRestaurantSalary = objectRestaurants[name].averageSalary;
//          }
//       }

//       let bestRestaurantElement = document.querySelector('#bestRestaurant p');
//       bestRestaurantElement.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.workers[0].salary.toFixed(2)}`;

//       let bestWorkersElement = document.querySelector('#workers p');
//       let sortedWorkers = Object.values(bestRestaurant.workers);
//       let finalWorkersArr = []

//       sortedWorkers.forEach(w => {
//          finalWorkersArr.push(`Name: ${w.name} With Salary: ${w.salary} `);
//       });

//       let workersString = finalWorkersArr.join('')

//       bestWorkersElement.textContent = workersString;
//    }
// }

function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      // Getting the inputed information and parsing it from JSON;
      let inputedInfo = document.querySelector('#inputs textarea');
      let restaurants = JSON.parse(inputedInfo.value);

      // Making a restaurant object to collect the data
      let restaurantsObj = {};

      // Iterating over the lines from the parsed JSON
      for (let place of restaurants) {
         let [restaurantName, workers] = place.split(' - ');
         workers = workers.split(', ');

         // Iterating over the workers
         let finalWorkers = [];
         for (let person of workers) {
            let [name, salary] = person.split(' ');
            salary = Number(salary);
            finalWorkers.push({ name, salary });
         }

         if (restaurantsObj.hasOwnProperty(restaurantName)) {
            finalWorkers = finalWorkers.concat(restaurantsObj[restaurantName].finalWorkers);
         }

         // Finding and sorting the salary part
         finalWorkers = finalWorkers.sort((a, b) => b.salary - a.salary);
         let bestSalary = finalWorkers[0].salary;

         // let averageSalary = finalWorkers
         //    .reduce((sum, worker) => sum + worker.salary, 0) / finalWorkers.length;
         let averageSalary = finalWorkers.reduce((sum, person) => sum + person.salary, 0);
         averageSalary = averageSalary / finalWorkers.length;

         restaurantsObj[restaurantName] = {
            finalWorkers,
            bestSalary,
            averageSalary
         };
      }

      let bestRestaurant = undefined;
      let bestRestaurantSalary = 0;

      for (let name in restaurantsObj) {
         if (restaurantsObj[name].averageSalary > bestRestaurantSalary) {
            bestRestaurant = {
               name,
               workers: restaurantsObj[name].finalWorkers,
               bestSalary: restaurantsObj[name].bestSalary,
               averageSalary: restaurantsObj[name].averageSalary
            };
            bestRestaurantSalary = restaurantsObj[name].averageSalary;
         }
      }

      // The final field elements;
      let bestRestaurantField = document.querySelector('#bestRestaurant p');
      bestRestaurantField.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;


      let sortedWorkers = Object.values(bestRestaurant.workers);
      let finalWorkersArr = [];
      sortedWorkers.forEach(w => finalWorkersArr.push(`Name: ${w.name} With Salary: ${w.salary} `));
      let workersString = finalWorkersArr.join('');
      let bestWorkersField = document.querySelector('#workers p');
      bestWorkersField.textContent = workersString;
   }

   // function onClick() {
   //    let input = document.querySelector('#inputs textarea');
   //    let bestRestaurantP = document.querySelector('#bestRestaurant>p');
   //    let bestWorkersP = document.querySelector('#workers>p');
   //    let arr = JSON.parse(input.value);

   //    let restaurants = {};

   //    arr.forEach((line) => {
   //       let tokens = line.split(' - ');
   //       let name = tokens[0];
   //       let workersArr = tokens[1].split(', ');
   //       let workers = [];

   //       workersArr.forEach((worker) => {
   //          let workerTokens = worker.split(' ');
   //          let salary = Number(workerTokens[1]);
   //          workers.push({ name: workerTokens[0], salary });
   //       })

   //       if (restaurants[name]) {
   //          workers = workers.concat(restaurants[name].workers);
   //       }

   //       workers.sort((worker1, worker2) => worker2.salary - worker1.salary);
   //       let bestSalary = workers[0].salary;
   //       let averageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;

   //       restaurants[name] = {
   //          workers,
   //          averageSalary,
   //          bestSalary
   //       }
   //    })

   //    let bestRestaurantSalary = 0;
   //    let bestRestaurant = undefined;

   //    for (const name in restaurants) {
   //       if (restaurants[name].averageSalary > bestRestaurantSalary) {
   //          bestRestaurant = {
   //             name,
   //             ...restaurants[name]
   //          };
   //       }
   //       bestRestaurantSalary = restaurants[name].averageSalary;
   //    }

   //    bestRestaurantP.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

   //    let workersResult = [];
   //    bestRestaurant.workers.forEach(worker => {
   //       workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`)
   //    });

   //    bestWorkersP.textContent = workersResult.join(' '); 
   // }
}