// Write your JavaScript code here!
window.addEventListener("load", function() {
   // function print("https://handlers.education.launchcode.org/static/planets.json") {
   //    };
      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {

         response.json().then(function(json) {
       const div = document.getElementById('missionTarget');
       // Add HTML that includes the JSON Data
            div.innerHTML = `
                           <h2>Mission Destination</h2>
                           <ol>
                              <li>Name: ${"Saturn/Titan"}</li>
                              <li>Diameter: ${"5149.5 km"}</li>
                              <li>Star: ${"Sol"}</li>
                              <li>Distance from Earth: ${"1.4 billion km from Earth"}</li>
                              <li>Number of Moons: ${0}</li>
                           </ol> 
                           <img src="${"https://solarsystem.nasa.gov/system/resources/detail_files/16278_PIA20016.jpg"}">
                         `;         
         // console.log(json);
         });
      });
   console.log('window loaded');

function init() {
      let form = document.getElementById("launchform");
      form.addEventListener("submit", function() { 
         event.preventDefault();

         let pilotStatus = document.getElementById("pilotStatus");
         let copilotStatus = document.getElementById("copilotStatus");
         let fuelStatus = document.getElementById("fuelStatus");
         let cargoStatus = document.getElementById("cargoStatus");
         let launchStatus = document.getElementById("launchStatus");
         let faultyItems = document.getElementById("faultyItems");
         let pilotName = document.getElementById("pilotName");
         let copilotName = document.getElementById("copilotName");
         let fuelLevel = document.getElementById("fuelLevel");
         let cargoWeight = document.getElementById("cargoWeight");
         let launchStatusCheck = true;

         if(cargoWeight.value === 0 || fuelLevel.value === 0
            || pilotName.value === "" || copilotName.value === "") {
               alert("all fields are required!");  
           }
         if(isNaN(cargoWeight.value) || isNaN(fuelLevel.value)) {
               alert("Make sure to enter valid information for each field!");              
           }
         if(Number.isInteger(pilotName.value) || Number.isInteger(copilotName.value)) {
              alert("Make sure to enter valid information for each field!");
           }
           
         if (fuelLevel.value < 10000) {
            faultyItems.style.visibility = "visible";
            launchStatusCheck = false;
            fuelStatus.inner.HTML = "not enough fuel for the journey"
            launchStatus.inner.HTML = "Shuttle not ready for launch"
            launchStatus.attr("id", "launchStatusInvalid");
         }  
         if (cargoWeight.value > 10000) {
            faultyItems.show();
            launchStatusCheck = false;
            cargoStatus.inner.HTML = "too much mass for the shuttle to take off"
            launchStatus.inner.HTML = "Shuttle not ready for launch"
            launchStatus.attr("id", "launchStatusInvalid");
         }
         if (launchStatusCheck === true) {
            launchStatus.inner.HTML = "Shuttle is ready for launch"
            launchStatus.attr("id", "launchStatusValid"); 
         }
         // if (fuelLevel === 890) {
         //    fuelStatus.inner.HTML = "not enough fuel for the journey"
         //    launchStatus.inner.HTML = "Shuttle not ready for launch"
         //    launchStatus.attr("id", "launchStatusInvalid"); -890 liters of fuel part
         // }   
   
         console.log("alert");
         
   });    
      
//             let div = document.getElementById("missionTarget");
//             
//     
//              
               
                   
//                    {/* <h3>Email: <a href="sendto:${json[i].html}">${json[i].html}</a></h3>
//                    <p><strong>Container:</strong> ${json[i].body}</p> */}
                   
//             }
//          });
//       // });
//   });
// }
 // fetch(url).then(function(response)) {
        //     <!-- JSON data?   -->
        //   })
        //   catch.function (err) {
        //   });
        //   
        //   let planet = json[2];
        //         console.log(typeof div);
        //         div["className"] = "planet";
        //         div.innerHTML = 
        //           <li>Diameter: ${"5149.5 km"}</li>
        //           <li>Star: ${"Sol"}</li>
        //           <li>Distance from Earth: ${1.4 billion km from Earth"}</li>
        //           <li>Number of Moons: ${0}</li>
        //        </ol>
        // <img src="${"https://solarsystem.nasa.gov/system/resources/detail_files/16278_PIA20016.jpg"}">
}
window.onload = init;
});
   /* This block of code shows how to format the HTML once you fetch some planetary JSON! */
