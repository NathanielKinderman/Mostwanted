"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
    let foundPerson = searchByName(people);
    mainMenu(foundPerson, people);
    break;
    case 'no':
    	searchByTrait(people);

      break;
      default:
    app(people); // restart app
    break;
  }
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    displayPerson(person);

    
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}


//.toLowercase()......find placement in prompt so user can type name without need to have correct capitlization... 

function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);

  var foundPeopleArray = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })

  if (foundPeopleArray.length === 1) {
    return foundPeopleArray[0];
  } else if(foundPeopleArray.length === 0){
    return null;
  }else{
    console.log("Something went wrong!!! Too many people with the same name.");
    return null;
  }


}




//alerts a list of people
function displayPeople(people){
	alert(people.map(function(person){
	return person.firstName + " " + person.lastName;
 	 }).join("\n"));
}

function searchByGender(people){
    var searchByGender = prompt("Is the person male or female?") 
    let  result  =  people.filter(function(el){
    switch (searchByGender){
      case "male" = displayPeople();
      alert(people.map(function(person))
      return person.firstName + " " + person.lastName;
       }.join("\n");

    }
    
}


function displayPerson(person){
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";

    alert(
    "id: " + person.id + "\n" 
    + "first name: " + person.firstName + "\n"
    + "lastName: " + person.lastName + "\n" 
    + "gender: " + person.gender + "\n"
    + "dob: " + person.dob + "\n"
    + "height: " + person.height + "\n"
    + "weight: " + person.weight + "\n"
    + "eyeColor: " + person.eyeColor +"\n"
    + "occupation: " +person.occupation +"\n"
    );

  console.log(personInfo);

  return personInfo;

}
// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
