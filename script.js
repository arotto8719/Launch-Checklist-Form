// Write your JavaScript code here!
window.addEventListener("load", function() {
   // let form = document.querySelector("form");
      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
         response.json().then(function(json) {
         console.log(response);
            
       const div = document.getElementById('missionTarget');
       // Add HTML that includes the JSON Data ${json[2].
            div.innerHTML = `
         <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[2].name}</li>
                  <li>Diameter: ${json[2].diameter}</li>
                  <li>Star: ${json[2].star}</li>
                  <li>Distance from Earth: ${json[2].distance}</li>
                  <li>Number of Moons: ${json[2].moons}</li>
               </ol> 
            <img src=${json[2].image}>
             `
         });
      });
   console.log('window loaded');

// function init() {
   let form = document.getElementById("launchform");
   let button = document.getElementById("formSubmit");
      button.addEventListener("click", function (event) {
         console.log('form submit'); 
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

         if(cargoWeight.value === "" || fuelLevel.value === ""
            || pilotName.value === "" || copilotName.value === "") {
               alert("all fields are required!");  
               return;
               // event.preventDefault();
           }
         if(isNaN(cargoWeight.value) || isNaN(fuelLevel.value)) {
               alert("Make sure to enter valid information for each field!");   
               return; 
               // event.preventDefault();         
           }
         if(Number.isInteger(Number(pilotName.value)) || Number.isInteger(Number(copilotName.value))) {
              alert("Make sure to enter valid information for each field!");
              return;
            //   event.preventDefault();
           }else{
             if(pilotName.value !== "") {
               pilotStatus.innerHTML = "Pilot " + pilotName.value + " is ready for launch"
              }
              if(copilotName.value !== "") {
               copilotStatus.innerHTML = "Co-pilot " + copilotName.value + " is ready for launch"
              }
           }
           console.log(fuelLevel.value, 'fuel');
         if (fuelLevel.value < 10000) {
            faultyItems.style.visibility = "visible";
            launchStatusCheck = false;
            fuelStatus.innerHTML = "not enough fuel for the journey"
            launchStatus.innerHTML = "Shuttle not ready for launch"
            launchStatus.setAttribute("class", "launchStatusInvalid");
         } else {
           launchStatusCheck = true;
           fuelStatus.innerHTML ="Fuel level high enough for launch";
         } 
         if (cargoWeight.value > 10000) {
            faultyItems.style.visibility = "visible";
            launchStatusCheck = false;
            cargoStatus.innerHTML = "too much mass for the shuttle to take off"
            launchStatus.innerHTML = "Shuttle not ready for launch"
            launchStatus.setAttribute("class", "launchStatusInvalid");
         } else {
            if (fuelLevel.value >= 10000) {
               launchStatusCheck = true;
            }
            cargoStatus.innerHTML ="Cargo weight low enough for launch";
         }
         if (launchStatusCheck === true) {
            launchStatus.innerHTML = "Shuttle is ready for launch"
            launchStatus.setAttribute("class", "launchStatusValid"); 
         }
         // if (fuelLevel === 890) {
         //    fuelStatus.innerHTML = "not enough fuel for the journey"
         //    launchStatus.innerHTML = "Shuttle not ready for launch"
         //    launchStatus.attr("id", "launchStatusInvalid"); -890 liters of fuel part
         // }  
         console.log("alert"); 

      // function submitButtonClicked() {
      //    document.getElementById("submitButton").innerHTML += "submitButtonClicked...";

      //    if (launchStatusValid === true) {
      //    document.getElementById('submitButton').enabled = true;
      //   }
   //  } 
      // document.getElementById("form").submit(); 
      // button.addEventListener("click", submitButton);
      // // <!-- <button ="alert('submit')" enabled="enabled"  -->
      // //           <button onclick="console.log('submit...');">Submit</button>
      //    console.log("submit button clicked");
         }); 

         
      // });  
   // }
// window.onload = init;
   });

   /* This block of code shows how to format the HTML once you fetch some planetary JSON! */
