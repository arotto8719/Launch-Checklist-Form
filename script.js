// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
         console.log(response);
         // response.json().then(function(json) {
       const div = document.getElementById('missionTarget');
       // Add HTML that includes the JSON Data
            div.innerHTML = `
                           <h2>Mission Destination</h2>
                           <ol>
                              <li>Name: ${json.name}</li>
                              <li>Diameter: ${json.diameter}</li>
                              <li>Star: ${json.star}</li>
                              <li>Distance from Earth: ${json.distancefromEarth}</li>
                              <li>Number of Moons: ${json.numberofMoons}</li>
                           </ol> 
                           <img src="${"https://solarsystem.nasa.gov/system/resources/detail_files/16278_PIA20016.jpg"}">
                         `;         
            // console.log(json);
         // });
      });
   console.log('window loaded');

function init() {
      let form = document.getElementById("launchform");
      let button = document.getElementById("submit");
         form.addEventListener("submit", function() {  
         button.addEventListener("submit", function (event) {
         document.getElementById('submitbutton').enabled = !cansubmit;
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

      function submitButtonClicked() {
         document.getElementById("submitButton").innerHTML += "submitButtonClicked...";

         if (launchStatusValid === true) {
         document.getElementById('submitButton').enabled = true;
        }
    } 
      document.getElementById("form").submit(); 
      button.addEventListener("click", submitButton);
         console.log("submit button clicked");
         }); 
   });
window.onload = init;
});
   /* This block of code shows how to format the HTML once you fetch some planetary JSON! */
